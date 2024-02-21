/* 
var numero =prompt( `Escribe un numero` );

if(numero > 0){
    console.log(`tu numero es positivo`)
    
} 
else{
    console.log(` tu numero es negativo`)
}
 */
/* var n1 =prompt( `Escribe dos numeros` );
var n2 =prompt( `Escribe dos numeros` );
if( n1 > 0){
    console.log(n1)
}
if( n2 > 0){
    console.log(n2)
} */
// Pedir al usuario que ingrese dos números
/* var numero1 = Number(prompt("Ingresa el primer número:"));
var numero2 = Number (prompt("Ingresa el segundo número:"));

// Verificar si los números son iguales
if (numero1 == numero2) {
   console.log("Los números son iguales. Su multiplicación es: " + resultado);
} 
else if (numero1 > numero2) 
{
    var resultado = numero1 - numero2;
    console.log("El primer número es mayor. Su resta es: " + resultado);
} 
else {
    var resultado = numero1 + numero2;
    console.log("El segundo número es mayor. Su suma es: " + resultado);
} */

const btnincrement= document.getElementById(`increment`);
const btndecrement= document.getElementById(`decrement`);
const btnpantalla= document.getElementById(`pantalla`);

var num = 0;

function increment(){
    if( num <20){
 num ++
 pantalla.innerText = num;
}
}
function decrement(){
   if(num > 0){
     num --
    pantalla.innerText = num;
}


}
//inertext para texto//
const btnimagen = document.getElementById(`imagen`)
let e = 1;  

function cambiar (){
   if(e == 1){
    imagen.src = './images/img 1.jpg'
    e = 2
   }
   else if(e == 2){
    imagen.src = './images/img 2.jpg'
    e = 1
   }
}

const numero = document.getElementById('galeria')
let es = 0;

function siguiente(){
if(es == 0){
    numero.src = './images/img 3.jpg'
    es = 1
}else if(es == 1){
    numero.src = './imges/img 4.jpg'
    es = 2
}else if(es == 2){
    numero.src = './imges/img 5.jpg'
    es = 3
}else if(es == 3){
    numero.src = './imges/img 6.jpg'
    es = 0
}
}
let est = 0;
function anterior(){
    if(est == 0){
        numero.src = './imges/img 6.jpg'
        est = 1
    }else if(est == 1){
        numero.src = './imges/img 5.jpg'
        est = 2
    }else if(est == 2){
        numero.src = './imges/img 4.jpg'
        est = 3
    }else if(est == 3){
        numero.src = './imges/img 3.jpg'
        est = 0
    }
}


 

