let juegos = ['GT', 'SP','Zelda', 'God of War'];
console.log('Largo:', juegos.length);

let primero1  = juegos[0];
let primero  = juegos[2-2];

let ultimo = juegos[juegos.length -1]
console.log({primero, ultimo})

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
})

let nuevaLongitud = juegos.push('F1');
console.log(nuevaLongitud, juegos);

let nuevaLongitud2 = juegos.unshift('Piratas')
console.log(nuevaLongitud2, juegos);

let nuevaLongitud3 = juegos.pop();
console.log(nuevaLongitud3, juegos);

let position = 1;
let nuevaLongitud4 = juegos.splice(position, 2);
console.log(nuevaLongitud4, juegos);

let zeldaIndex = juegos.indexOf('zelda');
console.log(zeldaIndex);





