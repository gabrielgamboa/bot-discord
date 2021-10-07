const messages = msg => {
    if (msg.content === 'O carlos é gay?') {
        msg.reply("Sim, ele é.");
    }

    if (msg.content === '!gamboa') {
        msg.reply(`
        Quem é Gabriel de Barros Gambôa ?
        Para o cego, é a luz.
        Para o faminto, é o pão.
        Para o sedento, é a fonte de água viva.
        Para o morto, é a vida.
        Para o enfermo, é a cura.
        Para o prisioneiro, é a liberdade.
        Para o solitário, é o companheiro.
        Para o viajante, é o caminho.
        Para o sábio, é a sabedoria.
        Para a medicina, é o médico dos médicos.
        Para o réu, é o advogado.
        Para o advogado, é o Juiz.
        Para o Juiz, é a justiça.
        Para o cansado, é o alívio.
        Para o pedreiro, é a pedra principal.
        Para o jardineiro, é a rosa de Sharon.
        Para o triste, é a alegria.
        Para o leitor, é a palavra.
        Para o pobre, é o tesouro.
        Para o devedor, é o perdão.
        
        Para mim, Ele é TUDO!`);
    }

    if (msg.content === '!angolano') {
        msg.reply(`primeiro 1️⃣  escolha um ativo ✅  por exemplo 💡 , euro dolar 💶  decida 🤔 se o preço💸  ficará mais alto 📈 ou mais baixo 📉 no que está agora. Eu acho 🧐  que o preço  💰ficará mais alto ↗️ , ótimo 😁 , está subindo, opa 😮 , consegui! 💯 dólares 💵 em apenas 🤑 1 minuto ⏱`);
    }


    if (msg.content === '!tapa') {
        msg.reply(`Um :point_up: tapa :raised_hand: na :point_right: gostosa :hot_face:

        :flag_um: Yes :thumbsup: baby :baby:
        
        :flag_um: Thank :raised_hands: you :raised_hand:`)
    }

    if(msg.content === '!triste'){
        msg.reply(`quem tá triste 😭 não tá mais 😆 quem tá triste 😭 não tá mais 😁 esquece a tristeza 🧐 se ela te abandonou 💃 se perdeu o emprego 

        💼 vc vai conquistar td de novo ✅ o mundo é gigante 🌍 é o planeta inteiro 🪐 fio vamo vamo o importante é não parar o importante é não parar 🏃‍♂️🏃‍♂️`)
    }

    if (msg.content === '!comandos') {
        msg.reply(`!gamboa !angolano !tapa !triste`);
    }

    
}

module.exports = { messages };