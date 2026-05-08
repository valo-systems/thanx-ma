# Thanx Ma — Preview Deployment Guide

**Preview URL:** https://preview.thanxma.co.za  
**Document root:** `/home/valosyst/public_html/preview.thanxma.co.za`  
**Repo:** `valo-system/thanx-ma-preview` (private)

> ⚠ **Do NOT deploy to `thanxma.co.za` (root domain) at this stage.**  
> This is a private staging environment for client review only.

---

## 1. GitHub repository setup

```bash
# Confirm gh is authenticated
gh auth status

# Initialise git (first time only)
git init
git add .
git commit -m "Initial Thanx Ma preview site"

# Create private repo under valo-system org and push
gh repo create valo-system/thanx-ma-preview \
  --private \
  --description "Private preview site for Thanx Ma Productions" \
  --source=. \
  --remote=origin \
  --push
```

If the remote already exists:

```bash
git remote add origin https://github.com/valo-system/thanx-ma-preview.git
git push -u origin main
```

---

## 2. Project type

| Field | Value |
|---|---|
| Framework | Vite + React |
| Router | React Router DOM v7 |
| Build output | `dist/` |
| Base URL | `/` |

---

## 3. Local build

```bash
npm install
npm run build
```

Confirm `dist/` contains:

```
dist/
  index.html
  .htaccess          ← SPA routing — must be present
  favicon.svg
  assets/
    index-*.js
    index-*.css
```

The `.htaccess` is copied automatically from `public/.htaccess` during build.

---

## 4a. Deployment — Option A: Manual cPanel upload

1. Run the deploy script (builds + zips):

   ```bash
   chmod +x scripts/deploy-preview.sh
   ./scripts/deploy-preview.sh
   ```

   This produces `thanx-ma-preview.zip` containing the **contents** of `dist/`.

2. Log in to cPanel → **File Manager**.

3. Navigate to:
   `/home/valosyst/public_html/preview.thanxma.co.za`

4. Upload `thanx-ma-preview.zip` into that folder.

5. Right-click the zip → **Extract**.

6. Confirm the folder now contains:
   ```
   index.html
   .htaccess
   favicon.svg
   assets/
   ```

7. Test:
   - https://preview.thanxma.co.za
   - https://preview.thanxma.co.za/books
   - https://preview.thanxma.co.za/contact  *(direct refresh must work)*

---

## 4b. Deployment — Option B: cPanel Git Version Control

1. In cPanel → **Files → Git Version Control** → **Create**.

2. Clone URL:
   ```
   https://github.com/valo-system/thanx-ma-preview.git
   ```

3. Repository path (outside `public_html`):
   ```
   /home/valosyst/repositories/thanx-ma-preview
   ```

4. The `.cpanel.yml` in the project root handles deployment automatically.  
   On each **Deploy**, it:
   - Clears `preview.thanxma.co.za` document root
   - Copies `dist/` contents to `/home/valosyst/public_html/preview.thanxma.co.za`
   - Sets correct file/directory permissions

5. **Important:** The build (`npm run build`) must run before the Git deploy  
   because cPanel Git Version Control deploys the committed files, including  
   the committed `dist/` folder. Either:
   - Commit `dist/` to the repo (simplest for cPanel), or
   - Run the build on the server if Node is available via cPanel Terminal.

6. Source files are never exposed in `public_html` — only built output.

---

## 5. `.cpanel.yml` explained

```yaml
---
deployment:
  tasks:
    - export DEPLOYPATH=/home/valosyst/public_html/preview.thanxma.co.za
    - /bin/mkdir -p $DEPLOYPATH          # ensure folder exists
    - /bin/find $DEPLOYPATH -mindepth 1 -maxdepth 1 -exec /bin/rm -rf {} +   # clean old files
    - /bin/cp -R dist/. $DEPLOYPATH      # copy built output (not the dist folder)
    - /bin/find $DEPLOYPATH -type d -exec /bin/chmod 755 {} +   # correct dir perms
    - /bin/find $DEPLOYPATH -type f -exec /bin/chmod 644 {} +   # correct file perms
```

---

## 6. SPA routing — `.htaccess`

React Router requires a server rewrite rule so that direct URL access  
(e.g. `https://preview.thanxma.co.za/books`) serves `index.html` instead  
of a 404.

`public/.htaccess` is copied to `dist/` on every build. It contains:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 7. SSL / AutoSSL

After the preview domain is live:

1. cPanel → **Security → SSL/TLS Status**.
2. Find `preview.thanxma.co.za`.
3. Click **Run AutoSSL** if not already issued.
4. Confirm `https://` loads without browser warnings.

---

## 8. Post-deployment checklist

- [ ] `https://preview.thanxma.co.za` opens correctly
- [ ] HTTPS certificate is valid (no browser warnings)
- [ ] Mobile menu opens and closes on every page
- [ ] Direct refresh works on `/books` (React Router SPA test)
- [ ] Logo shows "Thanx Ma" only on mobile (no "Productions" label)
- [ ] No official endorsement language unless approved
- [ ] No copyrighted images used without clearance
- [ ] Contact form placeholder details are clearly marked as placeholders
- [ ] "Independent concept — pending official approval" disclaimer is visible

---

## 9. What NOT to do

- **Do not** upload to `/home/valosyst/public_html` (root `thanxma.co.za`).
- **Do not** make the repo public.
- **Do not** remove the concept/approval disclaimers before client sign-off.
- **Do not** add real contact details, ISBNs or broadcaster names before verification.
