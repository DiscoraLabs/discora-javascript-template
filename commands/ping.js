/** @format */
const {
  SlashCommandBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
} = require("discord.js");
const { createSlashCommand } = require("discora");

module.exports = createSlashCommand({
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Ping pong command"),

  execute: async (interaction) => {
    const hiButton = new ButtonBuilder()
      .setCustomId("ping-hi_button")
      .setLabel("Say Hi")
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRowBuilder().addComponents(hiButton);

    await interaction.reply({ content: "pong!", components: [row] });
  },

  handlers: {
    handleButtonClick: async (interaction) => {
      await interaction.reply("hi, you found a cool command");
    },
  },
});
