#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# deploy-preview.sh
# Build and package the Thanx Ma preview site for manual cPanel upload.
#
# Usage:
#   chmod +x scripts/deploy-preview.sh
#   ./scripts/deploy-preview.sh
#
# Output:
#   dist/                  — built site (deploy these contents)
#   thanx-ma-preview.zip   — ready to upload and extract in cPanel File Manager
#
# Deploy target (cPanel):
#   /home/valosyst/public_html/preview.thanxma.co.za
#
# DO NOT deploy to /home/valosyst/public_html (root domain).
# ─────────────────────────────────────────────────────────────────────────────

set -e

echo ""
echo "── Thanx Ma Preview — build & package ──────────────────────────────────"
echo ""

# 1. Install dependencies
echo "▸ Installing dependencies..."
npm ci

# 2. Build
echo "▸ Running build..."
npm run build

# 3. Confirm required output files
echo "▸ Verifying dist/ output..."
required=("dist/index.html" "dist/.htaccess" "dist/assets")
for item in "${required[@]}"; do
  if [ -e "$item" ]; then
    echo "  ✓ $item"
  else
    echo "  ✗ $item — MISSING. Aborting."
    exit 1
  fi
done

# 4. Zip the CONTENTS of dist/ (not the dist folder itself)
#    Extract this zip inside /home/valosyst/public_html/preview.thanxma.co.za
ZIP_NAME="thanx-ma-preview.zip"
echo ""
echo "▸ Creating $ZIP_NAME..."
rm -f "$ZIP_NAME"
cd dist && zip -r "../$ZIP_NAME" . && cd ..

echo ""
echo "── Done ─────────────────────────────────────────────────────────────────"
echo ""
echo "  dist/               — built files"
echo "  $ZIP_NAME  — ready for cPanel File Manager upload"
echo ""
echo "  Upload $ZIP_NAME to:"
echo "  /home/valosyst/public_html/preview.thanxma.co.za"
echo "  then Extract via File Manager."
echo ""
echo "  Test after upload:"
echo "  https://preview.thanxma.co.za"
echo "  https://preview.thanxma.co.za/books"
echo ""
