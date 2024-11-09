module.exports = {
    name: 'ping', //esse nome é a mesma coisa lá do "ping.js" não importa, é só pra diferenciar 
    description: 'mostra o ping e blá blá', //mesma coisa, é apenas uma descrição sobre o comando.
    async execute(msg, args) {
        const sentMessage = await msg.reply(' Caçando raposas... digo, Calculando ping 🤓☝️'); //isso é uma gambiarra, ele envia a mensagem e depois edita pra mostrar a latência. Essa é a mensagem que exibe pela primeira vez
        const latency = sentMessage.createdTimestamp - msg.createdTimestamp;
        const apiLatency = msg.client.ws.ping;
        const nodeVersion = process.version;
        sentMessage.edit(`✨ minha latência: ${latency}ms\n💻 API: ${apiLatency}ms\n👻 meu node: ${nodeVersion}`);
    },
};
