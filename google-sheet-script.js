/**
 * Swastik Realty Group — Dear Pune / The Hidden Forest
 * Google Apps Script to save form leads into Google Sheet
 * 
 * Target Google Sheet:
 * https://docs.google.com/spreadsheets/d/1V4LHSd48fgO4QiVHux_eBQx2_RwcbeoXUb28vSVmDwM/edit
 */

const SHEET_ID = "1V4LHSd48fgO4QiVHux_eBQx2_RwcbeoXUb28vSVmDwM";

function getTargetSheet() {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    ss = SpreadsheetApp.openById(SHEET_ID);
  }
  return ss.getSheets()[0];
}

function setupHeaders(sheet) {
  if (!sheet) {
    sheet = getTargetSheet();
  }
  if (sheet.getLastRow() === 0) {
    const headers = [
      "Timestamp (IST)",
      "Name",
      "Mobile",
      "Email",
      "Consent",
      "Campaign / Source",
      "Page URL"
    ];
    sheet.appendRow(headers);

    // Style headers with elegant dark green and gold text
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#14251c");
    headerRange.setFontColor("#f4ead7");
    headerRange.setFontWeight("bold");
    headerRange.setFontFamily("Arial");
    headerRange.setHorizontalAlignment("center");
    sheet.setFrozenRows(1);

    // Set column widths
    sheet.setColumnWidth(1, 170); // Timestamp
    sheet.setColumnWidth(2, 180); // Name
    sheet.setColumnWidth(3, 140); // Mobile
    sheet.setColumnWidth(4, 220); // Email
    sheet.setColumnWidth(5, 90);  // Consent
    sheet.setColumnWidth(6, 240); // Source
    sheet.setColumnWidth(7, 320); // Page URL
  }
}

function testRun() {
  const fakeEvent = {
    parameter: {
      name: "Test User",
      mobile: "9876543210",
      email: "test@example.com",
      consent: "Yes",
      source: "Manual Test Run",
      page: "https://www.thehiddenforest.in/dear-pune"
    }
  };
  const result = doPost(fakeEvent);
  Logger.log(result.getContent());
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000); // Wait up to 10 seconds for concurrent writes

  try {
    const sheet = getTargetSheet();
    setupHeaders(sheet);

    // Support both URLSearchParams and JSON payloads
    let data = {};
    if (e && e.parameter && Object.keys(e.parameter).length > 0) {
      data = e.parameter;
    } else if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = {};
      }
    }

    // Format IST Timestamp
    const now = new Date();
    const formattedTimestamp = Utilities.formatDate(
      now,
      "Asia/Kolkata",
      "dd/MM/yyyy HH:mm:ss"
    );

    const name = data.name || "";
    const rawMobile = data.mobile ? String(data.mobile).trim() : "";
    const mobile = rawMobile ? "'" + rawMobile : "";
    const email = data.email || "Not provided";
    const consent = data.consent === "true" || data.consent === "Yes" ? "Yes" : "No";
    const source = data.source || data.form || "Dear Pune — The Hidden Forest";
    const page = data.page || "";

    // Append the row
    sheet.appendRow([
      formattedTimestamp,
      name,
      mobile,
      email,
      consent,
      source,
      page
    ]);

    // Align new row
    const lastRow = sheet.getLastRow();
    const dataRange = sheet.getRange(lastRow, 1, 1, 7);
    dataRange.setFontFamily("Arial");
    dataRange.setFontSize(10);
    sheet.getRange(lastRow, 1).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 3).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 5).setHorizontalAlignment("center");

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", row: lastRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("Swastik Realty Group — Lead webhook is active and ready to receive form submissions!")
    .setMimeType(ContentService.MimeType.TEXT);
}
