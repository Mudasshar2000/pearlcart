# PearlCart × Google Sheets — Setup Guide

Follow these steps exactly and your website will pull live product data from your Google Sheet.

---

## Step 1 — Create Your Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet.
2. Rename the first sheet tab (bottom) to exactly: **`Products`**
3. Add the following headers in **Row 1** (copy exactly, including capitalisation):

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| id | name | price | type | stock | sku | category | description | image_url | emoji |

4. Add one more column **K**: `active`

So your full Row 1 should be:
```
id | name | price | type | stock | sku | category | description | image_url | emoji | active
```

---

## Step 2 — Fill In Your Products

Add your products starting from **Row 2**. One product per row.

### Column Rules:

| Column | What to enter | Example |
|--------|--------------|---------|
| **id** | Unique number, increment by 1 | 1, 2, 3… |
| **name** | Product name | Wireless Headphones |
| **price** | Number only, no $ sign | 89.99 |
| **type** | Either `physical` or `digital` | physical |
| **stock** | Number of units in stock | 45 |
| **sku** | Your product code | ELE-001 |
| **category** | Category name | Electronics |
| **description** | Product description | Premium headphones with ANC… |
| **image_url** | Paste a direct image URL here | https://… |
| **emoji** | One emoji as a fallback | 🎧 |
| **active** | `yes` to show, `no` to hide | yes |

### Tips:
- For **digital products**, you can put any number in stock (it won't affect display).
- Leave **image_url** blank to use the emoji instead.
- Set **active** to `no` to temporarily hide a product without deleting it.
- To **remove a product**: either delete the row or set active to `no`.

### Google Drive Image URLs:
If your image is in Google Drive:
1. Right-click the image file → **Share** → Anyone with the link → **Viewer**
2. Copy the link. It looks like: `https://drive.google.com/file/d/FILE_ID/view`
3. Change it to: `https://drive.google.com/uc?export=view&id=FILE_ID`
4. Paste that into the `image_url` column.

---

## Step 3 — Add the Apps Script

1. In your Google Sheet, click **Extensions → Apps Script**
2. Delete all existing code in the editor
3. Open the file `pearlcart-appscript.gs` (included in your download)
4. Copy the entire contents and paste into the Apps Script editor
5. Click **Save** (disk icon or Ctrl+S)
6. Click **Run** → select function `testFetch` → Click **Run**
   - The first time, Google will ask for permissions — click **Review permissions → Allow**
7. Check the **Execution log** at the bottom — you should see your products as JSON

---

## Step 4 — Deploy as a Web App

1. Click **Deploy → New deployment**
2. Click the gear icon ⚙ next to "Select type" → choose **Web app**
3. Fill in:
   - **Description**: PearlCart API
   - **Execute as**: Me
   - **Who has access**: **Anyone** ← This is required!
4. Click **Deploy**
5. Copy the **Web app URL** — it looks like:
   `https://script.google.com/macros/s/AKfyc.../exec`

---

## Step 5 — Connect to Your Website

1. Open `pearlcart-store.html` in a text editor (Notepad, VS Code, etc.)
2. Find this line near the top of the `<script>` section:
   ```javascript
   const SHEET_API_URL = 'YOUR_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `YOUR_APPS_SCRIPT_URL_HERE` with your Web App URL:
   ```javascript
   const SHEET_API_URL = 'https://script.google.com/macros/s/AKfyc.../exec';
   ```
4. Save the file.
5. Open `pearlcart-store.html` in your browser — your products will load automatically!

---

## Step 6 — Making Updates

Once connected, managing your store is simple:

| Action | What to do in Google Sheets |
|--------|---------------------------|
| **Change a price** | Edit the number in the `price` column |
| **Update stock** | Edit the number in the `stock` column |
| **Change description** | Edit the `description` column |
| **Change image** | Paste a new URL in `image_url` |
| **Add a product** | Add a new row with all columns filled |
| **Remove a product** | Set `active` to `no` or delete the row |
| **Rename a product** | Edit the `name` column |
| **Change category** | Edit the `category` column |

After any change, just click the **↻ Refresh** button on the website to reload from the sheet.

---

## Troubleshooting

**Products not loading?**
- Make sure your sheet tab is named exactly `Products` (capital P)
- Make sure the deployment is set to "Anyone" (not "Anyone with Google account")
- Try redeploying: Deploy → Manage deployments → Edit → Create new version → Deploy

**Image not showing?**
- Make sure the URL is a direct image link (ends in .jpg, .png, .webp) or a converted Google Drive link
- Test the URL by pasting it directly into your browser — if the image shows, it will work

**CORS error in browser console?**
- This is normal for local file testing. Upload to a web server or GitHub Pages to resolve.

---

## Sheet Column Reference Card

```
A: id          → Unique number (1, 2, 3...)
B: name        → Product name
C: price       → Price (no $ sign)
D: type        → "physical" or "digital"
E: stock       → Stock quantity
F: sku         → Product code (e.g. ELE-001)
G: category    → Category name
H: description → Product description
I: image_url   → Direct image URL or Google Drive link
J: emoji       → Fallback emoji (e.g. 🎧)
K: active      → "yes" to show, "no" to hide
```
