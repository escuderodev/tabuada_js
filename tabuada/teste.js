let lista = [];

const tabuada = 7;

console.log(`Tabuada do ${`${tabuada}`}`);

for(let i = 1; i <= 10; i++) {
    lista.push(`${tabuada} X ${i} = ${tabuada * i}`);
}

for(let j = 0; j < 10; j++) {
    // console.log(lista[j]);
}

let resultado = lista.join('\n');

console.log(resultado);
