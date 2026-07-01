// ============================================================
// PearlCart — Google Apps Script
// Paste this entire file into your Google Sheet's Apps Script
// Extensions > Apps Script > paste > Save > Deploy
// ============================================================

const SHEET_NAME = "Products";

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) return jsonResponse({ error: "Sheet '" + SHEET_NAME + "' not found." });

    const rows  = sheet.getDataRange().getValues();
    const headers = rows[0].map(h => h.toString().trim().toLowerCase().replace(/\s+/g, "_"));

    const products = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      // Skip completely empty rows
      if (row.every(cell => cell === "" || cell === null)) continue;

      const obj = {};
      headers.forEach((h, idx) => { obj[h] = row[idx]; });

      // Normalise key fields
      const product = {
        id:          Number(obj["id"])          || i,
        name:        String(obj["name"]         || "").trim(),
        price:       Number(obj["price"])        || 0,
        type:        String(obj["type"]         || "physical").toLowerCase().trim(),
        stock:       obj["type"] && obj["type"].toString().toLowerCase().trim() === "digital"
                       ? 999
                       : Number(obj["stock"]) || 0,
        sku:         String(obj["sku"]          || "SKU-" + i).trim(),
        category:    String(obj["category"]     || "Other").trim(),
        description: String(obj["description"]  || "").trim(),
        image_url:   String(obj["image_url"]    || "").trim(),
        emoji:       String(obj["emoji"]        || "📦").trim(),
        active:      String(obj["active"]       || "yes").toLowerCase().trim(),
      };

      // Only include active products
      if (product.active === "yes" || product.active === "true" || product.active === "1") {
        products.push(product);
      }
    }

    return jsonResponse({ success: true, count: products.length, products });

  } catch (err) {
    return jsonResponse({ error: err.message });
  }
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── TEST FUNCTION ──
// Run this manually in the Apps Script editor to verify your sheet is working.
function testFetch() {
  const result = doGet({});
  Logger.log(result.getContent());
}
