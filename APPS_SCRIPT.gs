// ============================================================
// PASO 1: Pegá este código en Google Apps Script
// Extensions → Apps Script → pegá y guardá → Deploy → Web App
// Execute as: Me | Who has access: Anyone
// ============================================================

function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const result = {};

  // Hoja 1: IOL
  const iolSheet = ss.getSheetByName("IOL");
  if (iolSheet) {
    const iolData = iolSheet.getDataRange().getValues();
    const headers = iolData[0];
    result.iol = iolData.slice(1).filter(r => r[0]).map(row => {
      const obj = {};
      headers.forEach((h, i) => obj[h] = row[i]);
      return obj;
    });
  }

  // Hoja 2: Tastytrade
  const tastySheet = ss.getSheetByName("Tastytrade");
  if (tastySheet) {
    const tastyData = tastySheet.getDataRange().getValues();
    const headers = tastyData[0];
    result.tastytrade = tastyData.slice(1).filter(r => r[0]).map(row => {
      const obj = {};
      headers.forEach((h, i) => obj[h] = row[i]);
      return obj;
    });
  }

  // Hoja 3: Crypto
  const cryptoSheet = ss.getSheetByName("Crypto");
  if (cryptoSheet) {
    const cryptoData = cryptoSheet.getDataRange().getValues();
    const headers = cryptoData[0];
    result.crypto = cryptoData.slice(1).filter(r => r[0]).map(row => {
      const obj = {};
      headers.forEach((h, i) => obj[h] = row[i]);
      return obj;
    });
  }

  // Hoja 4: Config
  const configSheet = ss.getSheetByName("Config");
  if (configSheet) {
    const configData = configSheet.getDataRange().getValues();
    result.config = {};
    configData.forEach(row => {
      if (row[0]) result.config[row[0]] = row[1];
    });
  }

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
