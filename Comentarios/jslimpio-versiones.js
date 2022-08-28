//ctrl +k/c/u  k para esperar y c y u para comentar y descomentar

/*VERSION 1 Y 2   
V E R S I O N E S - VERSION 1
CODIGO ORIGINAL del github de ALURA ONE

ALTERNADO ---BOTON 1ERO Y RESPECTIVO ARRAY  Y AL FINAL EL BOTON DE COPIAR

//DECLARO MIS VARIABLES

const inputTexto = document.querySelector(".input-texto");   
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
btnCopy.style.display = "none"

//Encriptar mensaje  ---TODA LA ACCION SE HARA AL OPRIMIR EL BOTON

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage="none"
    inputTexto.value = ""
    btnCopy.style.display = "block"

}
// BUSCA, COMPARA LA POSICION Y LA CAMBIA O REMPLAZA DE LA POSICION 0 A LA 1

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                
    }
    return stringEncriptada;

    
}

// HACE LO MISMO QUE ARRIBA PERO AL REVES AHORA CUANDO COMPARA Y ENCUENTRA LA POSICION 1 LA VUELVE A CAMBIAR O REMPLAZA LO QUE AHI TENGA AHORA LA POSICION 0
//DE ESA FORMA EL MENSAJE SE DESENCRIPTA O VUELVE A SU ESTADO ORIGINAL

//Desencriptar mensaje
      //EN EL JS QUE HICE PARA NO CONFUNDIR LE PUSE const textoDesencriptado
      
function btnDesencriptar() {  
    const textoEncriptado = desencriptar(inputTexto.value)   
    mensaje.value = textoEncriptado
    inputTexto.value = ""  
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}

//botón copiar

function copiar() {
    
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
*/



//CONSEJO PARA VER UNO DESCOMENTAR EL OTRO PARA QUE NO DE ERRORES
// SOLO PUEDE HABER UNA DE LAS DOS VERSIONES AQUI, ACTIVA  PERO ES 
//PARA VER COMO PODEMOS HACER DE MAS DE UNA EL CODIGO EN JS


// ***************************************************************************
// VERSION 2
// repitiendo todo el CODIGO PERO YA CON MUCHOS MENOS COMENTARIOS
// 1ERO LOS ARRAYS Y LUEGO CON TODAS LAS FUNCIONES AL HILO


const inputTexto = document.querySelector(".input-texto");   
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
btnCopy.style.display = "none"



function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                
    }
    return stringEncriptada;

    
}


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}


//Encriptar mensaje

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage="none"
    inputTexto.value = ""
    btnCopy.style.display = "block"

}

//Desencriptar mensaje
      //EN EL JS QUE HICE PARA NO CONFUNDIR LE PUSE const textoDesencriptado
function btnDesencriptar() {  
    const textoEncriptado = desencriptar(inputTexto.value)   
    mensaje.value = textoEncriptado
    inputTexto.value = ""  
}



//botón copiar

function copiar() {
    
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}

