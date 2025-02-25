

let amigos = []; //array

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
} //teste da aula de funções

function adicionarAmigo(){

    let amigo = document.querySelector('#amigo').value; //seleciona o input e armazena o valor digitado na variavel
    amigos.push(amigo);//puxa o que está somente na variável pro array

    let lista = document.getElementById('listaAmigos'); //seleciona a ul e armazena na variavel resultado 
    lista.innerHTML = ''; // limpa a lista

    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo; 
        lista.appendChild(li); 
    }); //para cada amigo no array, cria um li e adiciona na ul exibindo o nome do amigo na tela

    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    let numeroSorteado = parseInt(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroSorteado];
    exibirTextoNaTela('#resultado', amigoSorteado);
}
