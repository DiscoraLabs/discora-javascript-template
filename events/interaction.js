/** @format */

const { Events } = require("discord.js");
const { createEvent } = require("discora");

module.exports = createEvent({
  name: Events.InteractionCreate,

  async handler(client, interaction) {
    // Discora will handle the command smartly for you.
    await client.handleCommand(interaction);
  },
});
