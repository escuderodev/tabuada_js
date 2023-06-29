const form = document.querySelector(".form");
const resultado = document.getElementById('exibirResultado');
const inputTabuada = document.getElementById('tabuada');

function calcularTabuada(tabuada) {
    let lista = [];

    console.log(`Tabuada do ${tabuada}:`);
    
    for (let i = 1; i <= 10; i++) {
        lista.push(`${tabuada} X ${i} = ${tabuada * i}`);
    }

    resultado.innerHTML = `Tabuada do ${`${tabuada}<br><br>${lista.join('<br>')}`}`;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const tabuadadigitada = inputTabuada.value;
    const tabuada = parseInt(tabuadadigitada);

    calcularTabuada(tabuada);
});

form.addEventListener('reset', function(event) {
    event.preventDefault();

    resultado.innerHTML = "";
    inputTabuada.value = "";
})