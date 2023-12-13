const { Bot, InlineKeyboard } = require("grammy");
const fs = require('fs');
const path = require('path');
/* startKeyboard is a keyboard that bots sends when someone 
type /start on his pm or when is added to a group or channel */

require('dotenv').config()

const bot = new Bot(process.env.BOT_TOKEN);


function loadCommands(dir, commandType = "command") {
    // Lê todos os arquivos na pasta
    const files = fs.readdirSync(path.join(__dirname, dir));

    // Itera sobre cada arquivo
    for (let file of files) {
        const stat = fs.lstatSync(path.join(__dirname, dir, file));

        // Se o arquivo for um diretório, chama a função recursivamente
        if (stat.isDirectory()) {
            loadCommands(path.join(dir, file));
        } else {
            // Importa o comando
            const command = require(path.join(__dirname, dir, file));
            switch(commandType) {
                case "command":
                    bot.command(command.name, command.handler);
                    break;
                case "on":
                    bot.on(command.name, command.handler)
                    break
                case "hears":
                    bot.hears(command.name, command.handler)
            }
        }
    }
}

loadCommands('comandos');
loadCommands('eventos', "on");

bot.on("message:new_chat_members:me", async (ctx) => {
    const groupTitle = await ctx.chat.title.replace(markdownRegex, markdownSubst)
    await ctx.reply(`Hey\\! Obrigado por me adicionar no\\(a\\) *${groupTitle}*\\, espero que goste das minhas funções e comandos \\-w\\-`, { reply_markup: startKeyboard, parse_mode: "MarkdownV2"})
})

bot.start();