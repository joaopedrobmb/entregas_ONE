let amigos = []

function adicionarAmigo(){
    const amigo = document.getElementById('amigo').value;

    if (amigo == '') {
        alert('Por favor, insira um nome.')
    } else {
        amigos.push(amigo)
        document.getElementById('amigo').value = ''
    }

    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);        
    })};

function sortearAmigo(){

    if (amigos.length == 0){
        alert('Por favor, adicione amigos para sortear.')
    } else {
        let numeroSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[numeroSorteado]

        const resultadoCampo = document.getElementById('resultado');
        
        resultadoCampo.textContent = amigoSorteado;
        resultadoCampo.innerHTML = amigoSorteado;
    }
}