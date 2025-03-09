//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let amigo;
let listaAmigos = document.getElementById('listaAmigos');

function adicionarAmigo() {
  amigo = document.getElementById('amigo').value;
  if (amigo == '') {
    alert('Nome inválido');
  } else {
    amigos.push(amigo);
    document.getElementById('amigo').value = '';
    atualizarAmigos();
  }

  return;
}

function atualizarAmigos() {
  listaAmigos.innerHTML = '';
  let novoAmigo;
  for (let i = 0; i < amigos.length; i++) {
    novoAmigo = document.createElement('li');
    novoAmigo.textContent = amigos[i];
    listaAmigos.appendChild(novoAmigo);
    console.log(listaAmigos);
  }
}

function sortearAmigo() {
  let amigoLidps = document.createElement('li');
  if (amigos == '') {
    alert("Não há nenhum amigo");
  } else {
    listaAmigos.innerHTML = '';
    amigoLidps.textContent = "Seu amigo secreto é:" + amigos[(Math.floor(Math.random() * (amigos.length - 1)))];
    listaAmigos.appendChild(amigoLidps);
    amigos = [];
  }
}