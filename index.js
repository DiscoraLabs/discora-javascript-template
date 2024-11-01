/** @format */

const { DiscoraClient } = require("discora");
const dotenv = require("dotenv");

dotenv.config();

const client = new DiscoraClient({
  root: process.cwd(), // root dir the current version of Discora requires this
  token: process.env.TOKEN, // your bot token(required)
  clientId: process.env.CLIENT_ID, // your bot clientId(required)
  guildId: process.env.GUILD_ID, // guild commands will be resgister here (required)
  handler: { events: "/events", slash: "/commands" },
  environment: "development", // if set to production then global commands will be registered instead of guild
  loader: { events: "flat", slash: "recursive" },
  client: { intents: ["GuildMessages", "GuildMembers"] },
});

// loads, register commands then starts the bot
client.start();
