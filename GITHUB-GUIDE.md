# Uploading PearlCart to GitHub & Going Live

Follow these steps to push your files to GitHub and host the store for free with GitHub Pages.

---

## Step 1 — Create a GitHub Account

If you don't have one: go to [github.com](https://github.com) → **Sign up** → free plan is fine.

---

## Step 2 — Create a New Repository

1. Click the **＋** icon (top right) → **New repository**
2. Fill in:
   - **Repository name:** `pearlcart` (or any name you like)
   - **Description:** My PearlCart e-commerce store
   - **Visibility:** Public ← required for free GitHub Pages hosting
   - ✅ Check **Add a README file** — NO (we already have one)
3. Click **Create repository**

---

## Step 3 — Upload Your Files

### Option A — Via GitHub Website (no coding needed)

1. On your new repository page, click **uploading an existing file** (or **Add file → Upload files**)
2. Drag and drop ALL of these files:
   - `pearlcart-store.html`
   - `pearlcart-wms.html`
   - `pearlcart-appscript.gs`
   - `pearlcart-setup-guide.md`
   - `README.md`
   - `.gitignore`
   - `GITHUB-GUIDE.md`
3. Scroll down, add a commit message like `Initial upload`
4. Click **Commit changes**

### Option B — Via Git (command line)

```bash
# 1. Install Git if you haven't: https://git-scm.com/downloads

# 2. Clone the empty repo
git clone https://github.com/YOUR_USERNAME/pearlcart.git
cd pearlcart

# 3. Copy your files into the folder, then:
git add .
git commit -m "Initial upload — PearlCart storefront and WMS"
git push origin main
```

---

## Step 4 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**
6. Wait 1–2 minutes, then your site will be live at:

```
https://YOUR_USERNAME.github.io/pearlcart/pearlcart-store.html
```

> Replace `YOUR_USERNAME` with your actual GitHub username.
> Replace `pearlcart` with your repo name if you named it differently.

---

## Step 5 — Share Your Links

Once live, you'll have two URLs:

| Page | URL |
|------|-----|
| **Storefront** | `https://YOUR_USERNAME.github.io/pearlcart/pearlcart-store.html` |
| **WMS (admin)** | `https://YOUR_USERNAME.github.io/pearlcart/pearlcart-wms.html` |

> **Keep the WMS link private** — don't share it publicly. Anyone with the link can access it since it's a static HTML file. When you move to a proper backend, you'll add real authentication.

---

## Step 6 — Connect Google Sheets to the Live Site

After your site is live on GitHub Pages:

1. Open `pearlcart-store.html` in a text editor
2. Find this line:
   ```js
   const SHEET_API_URL = 'YOUR_APPS_SCRIPT_URL_HERE';
   ```
3. Replace with your deployed Apps Script URL (from the setup guide)
4. Save the file
5. Re-upload it to GitHub (drag & drop again, commit)
6. Wait ~30 seconds for GitHub Pages to update
7. Your live site now loads products from Google Sheets! ✅

---

## Updating the Site in Future

Every time you want to update a file:

### Via website:
1. Go to your repo
2. Click the file → click the **pencil icon** (Edit)
3. Make changes → **Commit changes**

### Via Git:
```bash
git add .
git commit -m "Updated store design"
git push origin main
```

GitHub Pages automatically updates within ~30 seconds of any push.

---

## Custom Domain (Optional)

If you own a domain (e.g. `pearlcart.com`):

1. Settings → Pages → **Custom domain** → enter your domain
2. At your domain registrar, add a CNAME record pointing to `YOUR_USERNAME.github.io`
3. Check **Enforce HTTPS**

Your store will then be available at `https://pearlcart.com/pearlcart-store.html` (or configure it as the root).

---

## Troubleshooting

**Site shows 404?**
- Make sure the file is named exactly `pearlcart-store.html` (not `.htm` or with spaces)
- Double-check the URL path matches your filename

**Google Sheets not loading?**
- CORS errors are normal on `localhost` but should work on GitHub Pages
- Make sure your Apps Script deployment is set to **Anyone** (not "Anyone with Google account")

**Changes not showing?**
- GitHub Pages can take 1–3 minutes to update
- Try a hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
