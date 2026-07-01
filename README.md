# 🛍️ PearlCart

A premium e-commerce platform with Apple-style glassmorphic design, Google Sheets as a live product database, and a separate Warehouse Management System (WMS) — all in plain HTML/CSS/JS.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-teal?style=for-the-badge)](https://YOUR_USERNAME.github.io/pearlcart/pearlcart-store.html)

---

## ✨ Features

### 🛒 Storefront (`pearlcart-store.html`)
- Glassmorphic design — animated teal/cyan gradient background with frosted glass cards, nav, and modals
- Live product sync from **Google Sheets** via Apps Script Web App
- Category navigation (built dynamically from your sheet)
- Live search with autocomplete dropdown
- Product detail modal with image support
- Shopping cart with quantity controls
- **Cash on Delivery** checkout
- Fully responsive — mobile, tablet, desktop
- Fallback demo products when sheet is not connected

### 🏭 WMS (`pearlcart-wms.html`)
- Admin-only internal dashboard
- Product CRUD (add, edit, delete)
- Inventory management with restock modal and CSV export
- Order management with status updates
- Supplier management
- Revenue reports and charts

---

## 📁 File Structure

```
pearlcart/
├── pearlcart-store.html        # Customer-facing storefront
├── pearlcart-wms.html          # Internal warehouse management
├── pearlcart-appscript.gs      # Google Apps Script (paste into Sheets)
├── pearlcart-setup-guide.md    # Full setup instructions
├── README.md                   # This file
└── .gitignore
```

---

## 🚀 Quick Start

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/pearlcart.git
cd pearlcart
```

### 2. Open locally
Just open `pearlcart-store.html` in your browser — it will load with demo products automatically.

### 3. Connect Google Sheets (for live products)
See [`pearlcart-setup-guide.md`](./pearlcart-setup-guide.md) for the full step-by-step guide.

**Quick summary:**
1. Create a Google Sheet with tab named `Products`
2. Add headers: `id | name | price | type | stock | sku | category | description | image_url | emoji | active`
3. Go to **Extensions → Apps Script**, paste `pearlcart-appscript.gs`, save & deploy as Web App (access: **Anyone**)
4. Copy the Web App URL into `pearlcart-store.html`:
   ```js
   const SHEET_API_URL = 'https://script.google.com/macros/s/YOUR_ID/exec';
   ```
5. Save and reload — your products are now live!

---

## 🌐 Host on GitHub Pages (Free)

1. Push your files to a GitHub repository
2. Go to **Settings → Pages**
3. Under **Source**, select `main` branch → `/ (root)`
4. Click **Save**
5. Your store will be live at:
   ```
   https://YOUR_USERNAME.github.io/pearlcart/pearlcart-store.html
   ```

> **Note:** GitHub Pages serves static files — the Google Sheets integration still works perfectly since it uses a fetch call to your Apps Script URL.

---

## 🖼️ Product Images

Images are loaded from URLs in your Google Sheet's `image_url` column.

**Supported formats:**
- Any direct image URL (`.jpg`, `.png`, `.webp`)
- Google Drive: share the file → copy link → convert to:
  ```
  https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
  ```

If an image fails to load, the product's emoji is shown as a fallback automatically.

---

## 🔧 Customisation

| What | Where |
|------|-------|
| Store name / logo | Search for `PearlCart` in `pearlcart-store.html` |
| Accent colours | `:root` CSS variables at the top of the `<style>` block |
| Hero headline | `<h1>` inside `#heroSection` |
| Announcement bar | `.announcement` div |
| Tax rate | `calcTotals()` function — change `0.10` |
| Shipping cost | `calcTotals()` function — change `5.99` |

---

## 📱 Browser Support

| Browser | Status |
|---------|--------|
| Chrome 88+ | ✅ Full glassmorphism |
| Safari 14+ | ✅ Full glassmorphism |
| Firefox 103+ | ✅ Full glassmorphism |
| Edge 88+ | ✅ Full glassmorphism |

> Glassmorphism (`backdrop-filter`) requires a modern browser. On unsupported browsers, surfaces fall back to semi-transparent white — fully functional, just without the blur effect.

---

## 🗺️ Roadmap

- [ ] Move to Next.js + Supabase for a real backend
- [ ] Real-time order tracking
- [ ] Customer accounts & order history
- [ ] Stripe / PayPal payment integration
- [ ] Email confirmations via SendGrid

---

## 📄 Licence

MIT — free to use, modify, and deploy for personal or commercial projects.
