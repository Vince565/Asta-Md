const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""
global.email ="astromedia0010@gmail.com"
global.location="Astro,World"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/Astropeda/Asta-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/JMsAFRD.jpeg" ;
global.caption = process.env.CAPTION || global.caption || "αѕтα-м∂ 2024" 
global.BUTTONS = process.env.BUTTONS || process.env.MENU_BTN || "1";


global.devs = "2348039607375"
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348039607375";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348039607375";
global.style = process.env.STYLE   || '2'
global.flush = process.env.FLUSH   || "false"; 
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false",

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" 
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/mHEqQgr.jpg,https://i.imgur.com/lSdca7B.jpg,https://i.imgur.com/XakNh3r.jpg,https://i.imgur.com/UslG8eB.jpg,https://i.imgur.com/0OQxTyt.jpg,https://i.imgur.com/MJCmdiA.jpg,https://i.imgur.com/K7zFZl2.jpg"
global.waPresence= process.env.WAPRESENCE ||  "online" ;


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348039607375";


global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2348039607375";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348039607375";

global.api_smd = "https://api-amd.onrender.com"
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0k2Y1Z1ZXhvNXZiTngvc3FnKzliQ1R2dTVyM3BYbnVXR1dBbkhmMHIyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU94djhLRERtc3RNMS8wUjBVUUNiN3pYc2FvSUpoZGc1dTVLcWdFRy9rND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTVlFZGdrbFpLWWhuRVl3cEVLVW02cVVscjVXVXphc1ZxYVNFYklMMW1BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKMkZQVS9mOUFFckRJajBjNExLK0JPZ24ralIvQUlwaHRlTmcxYzdTY3dZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBeDFibklJWUJDVWxWM3NaWHNpSmgzRFZXY3pKa3FhRGsvdURFQW9nMlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikp6bkRPTzFHTEVvMHJLVEdmakp5SmdNOC9TK0k3SW1TS1BzRVJnVVNVMkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0lGbHlnNmZXTXNhYTROZWh2NFIwelBvdjdpRkVnZzVpSjhZZmhLL0oycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRm5MUW5pdjFqK3JKRHM1ZFRRU2oxdjRncUlBTGY4V2xubkZiOCtjWTR5WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlVMjBiU012S3g5OHFYYkRkQXgraGVodmJvM3RDOC8raEo4MGgvanIvclk3VDNHV01JdlVNVEk2RGNPVlJOUTJiemYyalZ6MUZYbmd4QzRHa2ZncGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6IktHM1owYklHNEYxY1NZMUU4cTNKTjFPR2ZVNngrU1BoeVF6c1FtZW5wMWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik9mcmR2YmNRVG5pT2d1RUJrZHNBQnciLCJwaG9uZUlkIjoiMjkyMGFjMzEtYWVmMC00NDEzLThhNmItZThmZTRlOTgzMjUwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjR2U1JDZGJJeWRIZ2FJdGpPTXloNVFneGlaOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoNHpIQ0hUanJaV2hPWU9rVUlrbXBvMlNRRGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVjVHRkRLQzYiLCJtZSI6eyJpZCI6IjIzNDgwNjk5MTgwOTY6MTZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xMT3FjQU5FUEQweUxJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im9JckRFNkVTZkttQXBNbGpLWXBGNEFycEZXcWJNMmV6NjRTbDYrdUJPbUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFtR25tMkNoaDBBVllxRGJNQ3AweWRaN0NYZG5HbG5NRDlrem00RWtjRkcvbDduamhzdmx2NzFUWis3YUpsc3dnaFVBdW5zMTliU1FRZ1RuelNCYWlRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJnV0JqUmNpalpTK1lZZW9ISDRlUk13Wnd3QjBCRU41RCtXTEp4U2QvS0hYT3h4ZjBlYVloaFlab0gwTDdxbzA4RHB4Q3VnS1hpcC9tS1ROa0o2dnJqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNjk5MTgwOTY6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYUNLd3hPaEVueXBnS1RKWXltS1JlQUs2UlZxbXpObnMrdUVwZXZyZ1RwaSJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE2NjY0OTU2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURjSyJ9"


module.exports = {

  menu: process.env.MENU || "v1", 

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.0",
  caption : global.caption || "αѕтα-м∂ 2024" , 
 
  author : process.env.PACK_AUTHER|| "αѕтяσ",
  packname: process.env.PACK_NAME || "αѕтяσ",
  botname : process.env.BOT_NAME  || "ᴀsᴛᴀ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "αѕтяσ",
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "main"  ).toUpperCase(),
};
global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";
global.rank = "updated" // Don't Touch
global.isMongodb = false; // Don't Touch Else Bot Won't Work
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
