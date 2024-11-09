const { Client, GatewayIntentBits } = require('discord.js');
const { token, prefix } = require('./config.json');
const fs = require('fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
client.commands = new Map();

//procurar comandos
fs.readdirSync('./comandos').filter(f => f.endsWith('.js')).forEach(f => {
    const cmd = require(`./comandos/${f}`);
    client.commands.set(cmd.name, cmd);});

//definir status 
client.user.setPresence({ activities: [{ name: 'nome do status', type: 4 }], status: 'idle' });
});

client.on('messageCreate', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const cmd = client.commands.get(args.shift().toLowerCase());
    if (cmd) {
        console.log(`Comando ${cmd.name} usado por ${msg.author.tag}`);
        try { 
            cmd.execute(msg, args); 
        } catch (e) { 
            console.error(e); 
            msg.reply('🥺 não foi possível usar esse comando'); 
        }
    }
});

client.login(token);
