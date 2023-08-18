// Criando botão para concluir tarefa
const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button') 
    botaoConclui.innerText = 'concluir' //Texto do botão
    botaoConclui.addEventListener('click', concluirTarefa); //Ação do botão

    return botaoConclui;
};

//Criando efeito riscado quando clica em concluir tarefa

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target; //Descobre o elemento que clica

    const tarefaCompleta = botaoConclui.parentElement; //Pega o pai do elemento

    tarefaCompleta.classList.toggle('done'); //Executa a classe quando o botão é clicado
};

export default BotaoConclui; //Mesmo objetivo da IIFE