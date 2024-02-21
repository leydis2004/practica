
const textinput = document.getElementById(`textinput`)
const btnprint = document.getElementById(`btn-print`)
const pantalla = document.getElementById(`pantalla`)

function imprimir(){
    pantalla.innerText = textinput.value;
}

//ejercicio 2

const cuadro = document.getElementById('cuadro')
console.log(cuadro)

function pintar(color){
    console.log( 'te pinto de`' + color );
    cuadro.style.backgroundColor = color;
}

//3

const circulo = document.getElementById('circulo')
let estado = `inicio`;

function mover(){

if(estado == `inicio`){
    circulo.style.marginLeft = `400px`;
    circulo.style.transitionDuration = `5s`;
    estado = `fin` ;

}
else if(estado == `fin`){
    circulo.style.marginLeft = `0px`;
    circulo.style.transitionDuration = `6s`;
    estado = `inicio`;
}
}
const imagen = document.getElementById('imagen')
let e = 1;
function cambiar(){
    if(e == 1){
        imagen.src = './img/img 1.jpg'
        e = 2
    }else if(e == 2){
        imagen.src = './img/img 2.jpg'
        e = 1
    }
}
const galeria = document.getElementById('galeria')
let es = 0;
function siguiente(){
    if(es == 0){
        galeria.src = './img/img 3.jpg'
        es = 1
    }else if(es == 1){
        galeria.src = './img/img 4.jpg'
        es = 2
    }else if(es == 2){
        galeria.src = './img/img 5.jpg'
        es = 3
    }else if(es == 3){
        galeria.src = './img/img 6.jpg'
        es = 0
    }
}
let est = 0;
function anterior(){
    if(es == 0){
        galeria.src = './img/img 6.jpg'
        es = 1
    }else if(es == 1){
        galeria.src = './img/img 5.jpg'
        es = 2
    }else if(es == 2){
        galeria.src = './img/img 4.jpg'
        es = 3
    }else if(es == 3){
        galeria.src = './img/img 3.jpg'
        es = 0
    }
}