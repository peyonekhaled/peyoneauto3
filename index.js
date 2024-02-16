// to raise the level of robot accounts | رفع لفل حسابات بروبوت
const Discord = require("discord.js-selfbot-v13"); 
const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS],
  checkUpdate: false
});
client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})
const {userAccount} = require("sphinx-run");
new userAccount(client, Discord).leveling({
    channel: '1114538165684940800',
    randomLetters: false, 
    time: 9000, //الوقت 
    type: 'ar' //الغةا 
});

const express = require("express");
const app = express();
app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});



app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});




new userAccount(client, Discord).autoReaction({
channel: "1107802454449467454",
user: "1078723016554467400",
timeout: 6000,
customBotId: ['990617618899681370','824119071556763668', '294882584201003009', '894633316010066032', '806018563307601930', '1113447941189926943', '1201075397182361650', '1131684868619763843'],
blacklistedwords: ["tokens", "auto"]
})


client.login(process.env.token)

process.on("unhandledRejection", error => {
  console.log(error)
});
