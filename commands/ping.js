const {SlashCommandBuilder} = require('discord.js')

module.exports = {

  date: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Reply with 'Pong!'"),

  async execute(interaection){
  await interaction.reply("Pong men!")
}

}
