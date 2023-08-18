import BotaoConclui from "./componentes/concluiTarefa.js";
import BotaoDeleta from "./componentes/deletaTarefa.js";

const criarTarefa = (evento) => {

    //Prevenir o comportamento padrão
    evento.preventDefault();

    //Encontrando a ul no DOM
    const lista = document.querySelector('[data-list]')

    //Captura o valor do input
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    //Criar elementos no DOM
    const tarefa = document.createElement('li')

    //Adicionar o modelo do CSS no novo elemento
    tarefa.classList.add('task');

    //Acessando a lista para adicionar tarefa
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());

    //Anexar um elemento dentro de outro
    lista.appendChild(tarefa);
        
    input.value = ' '; //Limpar conteúdo

}

 const novaTarefa = document.querySelector('[data-form-button]');

//Evento de click
novaTarefa.addEventListener('click', criarTarefa);

 //Função de invocação imediata(IIFE)