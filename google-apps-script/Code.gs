const SHEET_NAME = "Leads";
const HEADERS = ["Submitted at", "Name", "Mobile", "Email", "Consent", "Form", "Page"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getSheet_();
    const p = e.parameter || {};
    sheet.appendRow([
      p.submittedAt ? new Date(p.submittedAt) : new Date(),
      p.name || "",
      p.mobile ? "'+91 " + p.mobile : "",
      p.email || "",
      p.consent === "true" ? "Yes" : "No",
      p.source || "",
      p.page || "",
    ]);
    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json_({ ok: true, message: "The Hidden Forest lead endpoint is running." });
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
