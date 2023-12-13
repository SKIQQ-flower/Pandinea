const { startKeyboard, markdownRegex, markdownSubst } = require('../utils.js');


module.exports = {
    name: 'start',
    handler: (async ctx => {
        const user = await ctx.from.username
        await ctx.reply(`Oii ${user} UwU\\. Obrigado por iniciar o @pandinea\\_bot\\. Aqui estão algumas informações :3\n\nSou um panda muito astuto\\, tenho comandos de manipulação de imagem\\, moderação\\, economia\\, sorteios\\, conquistas\\, rpg e memes\\.`, { reply_markup: startKeyboard, parse_mode: "MarkdownV2"});
    })
};
