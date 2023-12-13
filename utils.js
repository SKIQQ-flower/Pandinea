const { InlineKeyboard } = require("grammy");

const startKeyboard = new InlineKeyboard()
    .url('Adicionar bot em um grupo ❤', 'https://t.me/pandinea_bot?startgroup').row()
    .url('Comandos ✨', 'https://skiqq.pw/pandinea/comandos').row()
    .webApp('Painel de controle', 'https://skiqq.pw')
    .url('Obter suporte 📞', 'https://t.me/matrizpandatica/2053').row()

const markdownRegex = /[_*[\]()~`><$+\-=|{},.!]/g
const markdownSubst = "\\$&"

module.exports = {
    markdownRegex,
    markdownSubst,
    startKeyboard,
}