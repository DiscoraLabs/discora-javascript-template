/** @format */
const { Events } = require("discord.js");
const {createEvent} = require("discora");

module.exports = createEvent({
  name: Events.ClientReady,
  once: true,
  handler: async (_, client) => {
    console.log(`${client.user.username} is online and ready!`);
  },
});
