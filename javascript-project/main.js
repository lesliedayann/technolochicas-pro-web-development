
// Diferenciando let y const 
let favoriteColor = "red";
const myName= "leslie";
let likesMusic = true;
let likesMovies= true
let myAgeString= "25";
let myAgeNumber = 25;

console.log("My name is: ", myName);
console.log("1 My fav color is:", favoriteColor);

favoriteColor="pink";
console.log("2 My fav color is:", favoriteColor);

// console.log("favoriteColor", typeof favoriteColor);
// console.log("myName", typeof myName);
console.log(' ');
console.log(' ');
// 09-Agosto
console.log('09-Agosto ');
if(likesMusic === true){
    console.log('Si me gusta la musica ');
}else{
    console.log('No me gusta la musica ');
}

//10-Agosto
console.log('10-Agosto ');
likesMusic=false
if(likesMusic === true){
    console.log('Si me gusta la musica ');
}else{
    console.log('No me gusta la musica ');
}


console.log(' ');
likesMusic = false;
likesMovies= false;
// false !== true ?
if(likesMusic !== true){
    // console.log('Si me gusta la musica ')
    console.log('no me gusta la musica');
    // falso === true ?
}else if(likesMovies===true){
    console.log('si me gustan las peliculas ');
}else{
    console.log('no me gusta nada');
}


// Usando typeof
console.log(' ');
console.log(' ');
console.log(' ');
// console.log("myAge string: ", myAgeString + 2)
// console.log("myAge number: ", myAgeNumber + 2)
// console.log("Tipo de dato myAgeString", typeof myAgeString);
// console.log("Tipo de dato myAgeNumber", typeof myAgeNumber);
console.log('********************************');
console.log('********************************');


// Mi tiendita, Sumando, restando, etc
const sabrita = 10;
const refresco = 15;
const cuponDescuento = 5;
let totalProductos;

totalProductos = sabrita + refresco;
console.log('********************************');
console.log("******   BIENVENIDO ************");
console.log('*                              *');
console.log('*                              *');
console.log('*                              *');

console.log('*  2 Sabrita..............', "$"+sabrita +' *');
console.log('*  2 Refresco.............', "$"+refresco +' *');

totalProductos = 2*sabrita+2*refresco;
console.log("*  Mi total es: ..........", "$"+totalProductos +' *' );

if(totalProductos>=50){
    console.log('*  Descuento..............', "$-"+cuponDescuento  +' *');
    console.log('*  Gran Total.............', "$"+(totalProductos-cuponDescuento) +' *');
} else{
    console.log('*  Gran Total............', "$"+(totalProductos));
}


console.log('*                              *');
console.log('*                              *');
console.log('*                              *');
console.log("**********  GRACIAS  ***********");


// console.log(' Diferenciando typeof ')
console.log(' ');
console.log('***************************');
console.log('***************************');
console.log('***************************');
totalProductos= 100;
console.log('inicializando totalProductos: ', totalProductos);
console.log('type: ', typeof totalProductos);

totalProductos= "100";
console.log('inicializando totalProductos: ', totalProductos);
console.log('type: ', typeof totalProductos);


console.log('***************************');
console.log('***************************');
console.log('Usando igualdad, aqui va a ser true');
if(totalProductos==100){
    console.log('Si es igualdad')
    console.log("Mi suma: ", totalProductos+50);
} else{
    console.log('No es igual');
}

// esta seccion utilizamos igualdad e igualdad estricta
console.log('Usando igualdad estricta, Aqui va a ser falso');
if(totalProductos===100){
    console.log('Si es igualdad estricta' );
    console.log("Mi suma: ", totalProductos+50);
} else{
    console.log("Mi suma: ", totalProductos+5);
    console.log('No es igualdad estricta ');
}


console.log(' ');
console.log(' ');
console.log(' ');

let compraRealizada = false;
let pisoBarrido = false;
let dinero = 0;

// true === true AND true === true? 
if(compraRealizada === true && pisoBarrido ===true){
    dinero = 50;

    // true === true OR false == true 
} else if(compraRealizada === true || pisoBarrido === true){
    dinero= 20;

}else {
    dinero= 5;
}


console.log('Te dare: ', dinero);

const multiplo=10;

for(let vuelta=5; vuelta <= multiplo; vuelta++){
    console.log('Multiplicando '+ vuelta + " X " +multiplo + " = " + (vuelta*multiplo) )
}

let vuelta=0;

console.log(' ');
console.log(' ');
console.log(' ');

console.log('Ciclo while');

while(vuelta <= multiplo){
    console.log('Sumando ' + vuelta + ' + ' + multiplo + ' = ' + (vuelta+multiplo));
    vuelta++;
}
    
   console.log(' ') 

//    Arrow function
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

// funcion declarativa
function fahrenheitToCelsius2(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}
// const fahrenheitToCelsius = (fahrenheit) => {
//     return (fahrenheit - 32) * 5/9;
// }

console.log(fahrenheitToCelsius(86))   
    
  
const move = (name, age) => {
   console.log('Hola, mi nombre es ' +name);
   console.log('Tengo ' + age + ' años')
}

function moveFunction(name, age){
    console.log('Hola, mi nombre es ' +name);
    console.log('Tengo ' + age + ' años')
}
for(let contador =1; contador<=2; contador++){
    move('Vanya', 16)
}

 
    
    
// let YOB= 1996;
// const currentYear=2022;























// const currentDate = new Date();
// let CY = currentDate.getFullYear();


// for(let vuelta=0; vuelta <= multiplo; vuelta++){
//     console.log('Multiplicando '+ vuelta + " X " +multiplo + " = " + (vuelta*multiplo) )
// }





// let compra = false;
// let piso = false;
// let dinero2 = 0;

// // true === true AND true === true? 
// if(compraRealizada === true && pisoBarrido ===true){
//     dinero = 50;

// //    
// } else if((compraRealizada === true || pisoBarrido !== true) && (compraRealizada !== true && pisoBarrido === true)){
//     dinero= 20;

// }else {
//     dinero= 5;
// }

// if((ine || pasaporte) && (luz || agua)){
//     console.log(beca!)
// }
// identificacion: ine o pasaporte
// comprobante dom: luz o agua 


// console.log('Te dare: ', dinero)
