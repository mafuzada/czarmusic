module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/a9SHDpD", //Support Server Link
  Token: process.env.Token || "ODQyNTEwMDg0NDI0MzM1Mzgw.YJ2WqQ.aErAu7KSx0sFYGfNTt_RMbVgr8I", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "842510084424335380", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "4XYlXgxRTBV7cZAlyFBLKiQoMgCur4DK", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "https://czarmusic.aleatory1.repl.co", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink - Already there is a serer to connect :)
  Lavalink: {
    id: "Main",
    host: "node3.rockbusterhostings.in.net",
    port: 65535,
    pass: "pass134",
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "f86c401917cf4ee292690ffabf056552", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "cb9328e443764d98825242eb7d522be0", //Spotify Client Secret
  },
};
