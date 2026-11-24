// Google Sheet that collects the website's enquiries (one row per form submission).
//
// Setup (once):
// 1. Create a Google Sheet, e.g. "Shahrukhz Residences leads".
// 2. Extensions > Apps Script. Delete what is there, paste this whole file, click Save.
// 3. Deploy > New deployment > type "Web app". Execute as: Me. Who has access: Anyone. Deploy, allow access.
// 4. Copy the Web app URL (https://script.google.com/macros/s/.../exec) into sheetsUrl in lib/content.ts.
// After editing this script later, use Deploy > Manage deployments > Edit > New version (the URL stays the same).

const HEADERS = ["Date", "Name", "Phone", "Email", "Interested in", "Message", "Page"];

function doPost(e) {
  const p = e.parameter;
  if (p.botcheck) return ContentService.createTextOutput("ok"); // spam trap ticked: ignore
  const book = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = book.getSheetByName("Leads") || book.insertSheet("Leads");
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  // Leading ' keeps "+971..." as text and stops anything starting with = + - @ running as a formula.
  const cell = (v) => (/^[=+\-@]/.test(v || "") ? "'" + v : v || "");
  sheet.appendRow([new Date(), cell(p.name), cell(p.phone), cell(p.email), cell(p.interest), cell(p.message), cell(p.page)]);
  return ContentService.createTextOutput("ok");
}
