// function greet(){
//     console.log('Hello world');
// }

function greet( nombre){
    console.log(arguments); // aunque no funciona en funciones flecha, nos brinda todos los valores que vienen en la funcion
    console.log('Hello world' + nombre);
}

const greetArrow = (nombre) => {
    console.log('Hello flecha ,' + nombre);
}

// var greet = 123; dara error

// const greet2 = function(){
//     console.log('Hello world');
// }

greet('Nay', 30, 2023);
greetArrow('Nay')
// greet2();

