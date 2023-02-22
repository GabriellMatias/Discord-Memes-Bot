// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const dotenv = require('dotenv')
dotenv.config()

const { TOKEN, CLIENT_ID, GUIDE_ID} = process.env

const fs = require('node:fs')
const path = require('node:path')

const commandsPaths = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPaths).filter(file => file.endsWith(".js"))
client.commands = new Collection()


for(const file of commandFiles){
  const filePath = path.join(commandsPaths, file)
  const command = require(filePath)
  if ('date' in command && 'execute' in command) {
    client.commands.set(command.date.name, command)
  }else{
    console.log(`Command not found  in ${filePath}`);
  }
}
console.log(client.commands);


// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(TOKEN);