//Variables
let numeroSecreto = 0
let contadorDeIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDelUsuario === numeroSecreto) {
        asignarTextoElemento('p',`¡Felicidades, acertaste el número! Lo lograste en: ${contadorDeIntentos} ${(contadorDeIntentos === 1) ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDelUsuario > numeroSecreto) {
            asignarTextoElemento('p','Tip: el número es menor.');
        } else {
            asignarTextoElemento('p','Tip: el número es mayor.');
        }
        contadorDeIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}



function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya se sortearon TODOS los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles.');
    } else {
        //Si el numeroGenerado está incluido en la lista hacemos una operación, si no, sigo.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'El Juego del Número Secreto');
    asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    contadorDeIntentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros(de inicio)
    condicionesIniciales();
    //generar numero aleatorio
    //Inicializar el numero intentos
    //deshabilitar el boton Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();