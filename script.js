const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    }
    return stringEncriptada;
}


function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }

    }
    return stringDesencriptada;
}

function copiarTexto() {
    const mensajeTextarea = document.querySelector('.mensaje');
    const textoACopiar = mensajeTextarea.value;

    // Crear un elemento de textarea temporal
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textoACopiar;

    // Agregar el elemento al documento
    document.body.appendChild(tempTextArea);

    // Seleccionar el texto del elemento temporal
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    document.execCommand('copy');

    // Remover el elemento temporal
    document.body.removeChild(tempTextArea);

    // Alerta o mensaje de confirmación
    alert('Texto copiado con exito');
}

function cambiarTema() {
    const body = document.body;
    body.classList.toggle('tema-claro');
    body.classList.toggle('tema-oscuro');

    const botonTema = document.getElementById('boton-tema');
    const temaActual = body.classList.contains('tema-claro') ? 'claro' : 'oscuro';

    if (temaActual == 'oscuro') {
    botonTema.textContent = 'Dark';
    }

    if (temaActual == 'claro') {
        botonTema.textContent = 'Light';
    }
}
  
