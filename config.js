const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_37_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg4LFxuICAgICAgICA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDk3LFxuICAgICAgICA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMzksXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMyxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAyNCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNixcbiAgICAgICAgMTkwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MixcbiAgICAgICAgNzUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDczLFxuICAgICAgICAxMzAsXG4gICAgICAgIDYzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc1LFxuICAgICAgICA5NixcbiAgICAgICAgMTEwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgODgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUyLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDUwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDczLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgODcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUsXG4gICAgICAgIDY1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDUxLFxuICAgICAgICAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgNzMsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWYXFhWUFEcDdIMzdXQUhnNldMMGJiTExGNVl6SGd0eXc5OGZVVHN1eWNZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNjIxNTk3MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjUxMzZGM0E1OTBGNjMyNkI2NjE2NUREMTcyNDk1NTMyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTQ4NjYzOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5bzBlVnRrU1JWT0ZtdkJQZG9HWWhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI1YTk0NmUyLTk3MGUtNGNlNS05YjgwLWQ5ZjZkMGNhOGIyMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICAyNDgsXG4gICAgICAxNDYsXG4gICAgICAyMDUsXG4gICAgICAxMjksXG4gICAgICA4OSxcbiAgICAgIDEwOCxcbiAgICAgIDEyNCxcbiAgICAgIDEzNyxcbiAgICAgIDE1MCxcbiAgICAgIDE2MSxcbiAgICAgIDE2NyxcbiAgICAgIDcxLFxuICAgICAgMTc4LFxuICAgICAgMjQzLFxuICAgICAgMTAzLFxuICAgICAgNzcsXG4gICAgICA0NSxcbiAgICAgIDE0NCxcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDEyLFxuICAgICAgMzEsXG4gICAgICA5OSxcbiAgICAgIDM3LFxuICAgICAgMTczLFxuICAgICAgMjIyLFxuICAgICAgMTc2LFxuICAgICAgNzQsXG4gICAgICA4NyxcbiAgICAgIDE0NSxcbiAgICAgIDIzNyxcbiAgICAgIDM4LFxuICAgICAgMyxcbiAgICAgIDI0OCxcbiAgICAgIDY5LFxuICAgICAgNDAsXG4gICAgICAyMDgsXG4gICAgICAzMixcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhIOENWUTJCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDYyMTU5NzA0OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDQ0MDIzNzU4MzU4MzQ6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0tWNnNRSEVLblp4YnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXZ09KVDI3bDIzUHVpYUhyZzFuR2pTRGZxcWcrVlFrRUdsTTZZdzBRVUh3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNndGUweHNwZTJYYXdLVm1GNlA5Q0Z3OTN5MVlHbFBINFFEbnp0UngxOUMwdWswVG1weGprOCt1V0MzU2E4VG5HSldwNXo4WlQ2WkIwai9PQmc5MUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJyQXVPb044TDF1TGJsamFoaktkdWsyUWRJb1ZTYi95dXdFbjBCRmh4UE9zb0dsdGF1aTFQSXpiMjlhU3dMQndGTENXMitKb0g1N3ZSbGRBVFpvUEF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjIxNTk3MDQ6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTQ4NjYzNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpPclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSk9yLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRXJZdWdFdHU1dUZxRUd6YmVwdUtadEtQQVM3L2RkdjdNVWVlYnV0cU53VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDIzMzkzOTUzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Successful Kontroller",
  ownername:process.env.OWNER_NAME|| "Kontroller",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
