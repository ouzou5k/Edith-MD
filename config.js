const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0pNblRQS20vNXpJSUxRMnZVN3RNc2U1SlVhMm9RZXF3WUZERzRYR2dFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENvdWloS05EcTN2T0xhK20reEFpNkc5Wm5DRW51V2UvNDJoZTUzbnNWVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSGRPNGdyYlA4c0ZoQXZNenNjWkpHdm9ROEZPZzAzZS9sNlAvSGtXTkhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1c2ZaU3NYeTdtdW9PM0tlbjRtQW4vQW5qMUdscklBUUJJVVVRWEluOGhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDUXdCS01wb1lzWWFWWUlXTzdSQlpzdFh4RVVObmZqTW5tQlJYZnJSR1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRTQisycFpjL09KakkwWUR6NWtJaExZdXlVdGVVQ3lYM2lJOGRmZk8wRTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUd4UmNzM2hCdzN6SW1ISlF5eHJWMFY1QUUwNmc0QW1uRXdnRDhhbFNWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjV1TXdGMm9KOUFHSWFLZmNpaW9KeEs5SEFaU1djTlRkK0xIL09DWDRHRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBrNFI1aGttbk5zVXMyYlF5MVdkUWRtOFpxMk82alN2N25qejlNUndmNmtxL1lDekpiSUdqZEJDSkVpaVJCWmQyODYvT2pSUU1YY1lkeCt6azZLQ2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUzLCJhZHZTZWNyZXRLZXkiOiJpQW1oeDVGNk1CZ3AvbFg1VDVkYlpKdE9vS3dWVm5YTnVVZFdpeGZ0Q013PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyMzk0NDc5ODY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE0RTZCQUI2OUM1MkMzNzUyMTM4QzI4RDJERjE4OTFEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTcyNDEzMzV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIyMzk0NDc5ODY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUwN0JFMUJDN0MzQTM5MjU3RjEyQjYyMTEwNjlDNUNCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTcyNDEzMzV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ051MjRiTURFUEcvOWNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InduVWxBUXM1Y1NEN24raEtVM0EzSS9xRWpIOHlKNDMvNWVTK1ZPUlY2aGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNzdjlJNXNMdUZGVU1wSVVpbW9vV0Jlekk3ZzdOZExhVnZJaDJKbTQ3MHU3WHRweWpCQ2NWbS9oQW5Mc0VWN1RGS1ZBeTE2dUNuNm9OWEE1elNuc0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEVk5zWXNSeWtyZFBHMC9OMVE4UXZ4NzQwWHErOWl4UFhoZEVQUDl1S2RxdXdzWnRnTDd4dHlCWnVCTzVLUGlKWkZiM1hiU1U2dkhGc0lYWVF0V2ZoZz09In0sIm1lIjp7ImlkIjoiMjIzOTQ0Nzk4Njg6MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE0MDM2ODc1ODc2Mzc2OToxQGxpZCIsIm5hbWUiOiJLIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyMzk0NDc5ODY4OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0oxSlFFTE9YRWcrNS9vU2xOd055UDZoSXgvTWllTi8rWGt2bFRrVmVvWiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3MjQxMzMzLCJsYXN0UHJvcEhhc2giOiJubTNCYiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSUFnIn0=",
  START_IMG: process.env.START_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS EDITH-MD*",
  WELCOME: process.env.WELCOME || "false",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  PREFIX: process.env.PREFIX || "*",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  BOT_NAME: process.env.BOT_NAME || "EDITH-MD",
  STICKER_NAME: process.env.STICKER_NAME || "EDITH-MD",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍,😎,🥶,🥸,🥴,🥳,🙂‍↕️,🤑,😘,🤩",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "22394479868",
  OWNER_NAME: process.env.OWNER_NAME || "Ouzou_officiel",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Ouzou_officiel*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *EDITH-MD*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
 BOTMODE: process.env.BOTMODE || "Ouzou_officiel",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_MEDIA: process.env.ANTI_MEDIA || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  READ_CMD: process.env.READ_CMD || "false",
  DEV: process.env.DEV || "22394479868",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
