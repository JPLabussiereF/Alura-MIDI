function tocarSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    elemento === null || elemento.localName !== 'audio' ? console.error('Elemento não encontrado, ou seletor inválido') : elemento.play(); 
}
        
const listaDeBotoes = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeBotoes.length; i++) {

    const tecla = listaDeBotoes[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocarSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
            }
        }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
