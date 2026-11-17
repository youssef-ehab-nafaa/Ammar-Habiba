/**
 * Google Apps Script guestbook backend for the Ammar & Habiba invitation.
 *
 * Setup (about 2 minutes):
 * 1. Open https://script.google.com → New project
 * 2. Delete any default code, paste this whole file, Save
 * 3. Deploy → New deployment → Type: Web app
 *    - Description: guestbook
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Authorize, then copy the Web App URL
 * 5. Put that URL in script.js → invitation.guestbookUrl
 *
 * The script creates a Google Sheet automatically on first use.
 */

var SHEET_NAME = 'messages';

/** Run this once from the editor (Run ▶) to grant Sheets permission. */
function setup() {
  var sheet = getSheet_();
  Logger.log('Guestbook ready. Sheet ID: ' + sheet.getParent().getId());
}

function getSpreadsheet_() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty('SHEET_ID');
  var ss = null;
  if (id) {
    try {
      ss = SpreadsheetApp.openById(id);
    } catch (e) {
      ss = null;
    }
  }
  if (!ss) {
    ss = SpreadsheetApp.create('Ammar Habiba Guestbook');
    props.setProperty('SHEET_ID', ss.getId());
  }
  return ss;
}

function getSheet_() {
  var ss = getSpreadsheet_();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['name', 'message', 'createdAt']);
  }
  return sheet;
}

function doGet() {
  var sheet = getSheet_();
  var values = sheet.getDataRange().getValues();
  var messages = [];
  for (var i = 1; i < values.length; i++) {
    var name = String(values[i][0] || '').trim();
    var message = String(values[i][1] || '').trim();
    var createdAt = values[i][2] ? String(values[i][2]) : '';
    if (!name || !message) continue;
    messages.push({ name: name, message: message, createdAt: createdAt });
  }
  messages.sort(function (a, b) {
    return String(b.createdAt).localeCompare(String(a.createdAt));
  });
  return json_(messages);
}

function doPost(e) {
  try {
    var raw = (e && e.postData && e.postData.contents) ? e.postData.contents : '{}';
    var data = {};
    try {
      data = JSON.parse(raw);
    } catch (parseErr) {
      data = (e && e.parameter) ? e.parameter : {};
    }
    var name = String(data.name || '').trim().slice(0, 80);
    var message = String(data.message || '').trim().slice(0, 500);
    if (!name || !message) {
      return json_({ ok: false, error: 'missing fields' });
    }
    var createdAt = data.createdAt || new Date().toISOString();
    getSheet_().appendRow([name, message, createdAt]);
    return json_({ ok: true, name: name, message: message, createdAt: createdAt });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
