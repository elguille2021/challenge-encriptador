const inputTexto= document.querySelector(".input-texto");   //Constantes que rigen mi 1er cuadro de texto -parte de encriptar
const mensaje=document.querySelector(".mensaje");           //y Constante al 2do cuadro  de texto -parte desencriptar

//Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Esto es lo que va a hacer el programa
// Ponemos un mensaje el boton encriptar lo va a descomponer y el boton desencriptar lo va a volver de nueva cuenta a su estado original

/*function btnEncriptar() {  //esto llama al onclick() de html o funcion llamada btnEncriptar
    const TextoEncriptado=encriptar(inputTexto.value) //y esta variable recibirá el texto colocado en la 1er caja de texto
    mensaje.value=TextoEncriptado;  //y la pasará  a la 2da caja a la de descencriptar -dónde se desencriptará el texto que se pasó
    mensaje.style.backgroundImage="none";  // sirve para cuando se pase el texto no se muestre la imagen de la otra caja de texto
    inputTexto.value = "";  //y esto para que lo limpie  y no se quede el texto inicial en la 1er caja
} */


/*function btnDesencriptar() {
const textoDesencriptado=desencriptar(inputTexto.value)
mensaje.value=textoDesencriptado;
mensaje.style.backgroundImage="none";
inputTexto.value = "";
}   */

//luego de los 2 elemento o constantes crados al inicio ahora creamos  nuestra 1era función  ¿y, que recibira esta función?
function encriptar(stringEncriptada) {  // tambien creamos un parámetro entre () QUE Recibe el texto que el usuario colocó en el input
    //matriz es un array dentro de otro array [[]]
    //EJ let matrizCodigo = [["e", enter]] --//SIGNIFICA QUE "e" va a ser convertida a "enter"  
//siempre la 1er posición de un array comienza con 0 , asi que  posición 0 es lo que originalmente hay y posicion 1 es por lo que va a reemplazar
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]  ]  ; 
    
    stringEncriptada = stringEncriptada.toLowerCase();  //converte a minuscula

    for (let i=0; i < matrizCodigo.length; i++){    //El for recorre el arreglo o mas bien las letras  NO ES LENGHT "CON HT" SINO LENGTH  CON "TH" POR ESO NI ENCONTRABA LA LETRA EN EL ARRAY NI LA PASABA ENCRIPTADA A NINGUN LADO


        if (stringEncriptada.includes(matrizCodigo[i][0])) {  /* y Si contiene alguna de las letras de nuestro arreglo va a remplazar por las letras que hemos definido  */
            stringEncriptada=stringEncriptada.replaceAll
            (matrizCodigo[i][0] ,  matrizCodigo[i][1])   //--siendo 0 es lo que tiene originalmente  y 1 lo que va a reemplazar
        }      
    }                              //   (matrizCodigo[i][0]) no cerrar el () ni aqui ni acá ,  (matrizCodigo[i][1])
    return stringEncriptada;            //es decir no se cierra el ) ni despues del 1er matrizCodigo ni al iniciar el 2do
                                        // evitar esto  (matrizCodigo[i][0]) ,  (matrizCodigo[i][1]) ---debe ser un solo parentesis el que abre y cierra
}                                       
                   //tanto la  función btnEncriptar como btnDesencriptar NO VAN AQUI SINO ARRIBA AL PRINCIPIO                                 
                  // function btnEncriptar() {}


/*function btnEncriptar() {  //esto llama al onclick() de html o funcion llamada btnEncriptar
const TextoEncriptado=encriptar(inputTexto.value) //y esta variable recibirá el texto colocado en la 1er caja de texto
mensaje.value=TextoEncriptado;  //y la pasará  a la 2da caja a la de descencriptar -dónde se desencriptará el texto que se pasó
mensaje.style.backgroundImage="none";  // sirve para cuando se pase el texto no se muestre la imagen de la otra caja de texto
inputTexto.value = "";  //y esto para que lo limpie  y no se quede el texto inicial en la 1er caja
}
function btnDesencriptar() {
const textoDesencriptado=desencriptar(inputTexto.value)
mensaje.value=textoDesencriptado;
mensaje.style.backgroundImage="none";
inputTexto.value = "";
}  */ 






/**NOTAS JS  DE LO QUE APRENDÍ 
las clases haran referencia a nuestras 2 <textareas> a input-texto  y mensaje
con (".") seguido del nombre de la clase

document.querySelector=(".input-texto")--- NOS PERMITE SELECCIONAR EL ELEMENTO O referimos a nuestros elementos html, en este caso a  nuestra clase  input-texto    y luego también con  
a nuestra clase mensaje  document.querySelector=(".mensaje")

podemos poner una constante como variable ya que estas no cambiaran 
ni tampoco los elementos alos que haga referencia

LA CONST VA CON EL NOMBRE QUE QUERAMOS ej inputTexto 
const inputTexto = document.querySelector=(".input-texto")

notamos que la const puede llevar cualquier nombre donde debe llevar el mismo es en  el del elemento de la clase a la cual estamos referenciando
en este caso para este primere elemento a (".input-texto) --ASI SE LLAMA NUESTRA CLASE EN NUESTRO ARCHIVO HTML Y QUE AHORA LIGAMOS AQUI EN ESTE OTRO ARCHIVO DE JAVASCRIPT --al que llamamos script.js

entonces tenemos nuestros dos elementos (ya referenciados) como:

const inputTexto = document.querySelector=(".input-texto");
const mensaje =    document.querySelector=(".mensaje");



matriz es un array dentro de otro array [[]]
¿como se pone la regla de  que letra va a ser ocnvertida en que letra?
asi:
******************************************************************************
function encriptar(stringEncriptada){ // stringEncriptada este es el parametro que le pasamos a nuestra función encriptar
****************************************************************************** RECIBE EL TEXTO QUE EL USUARIO COLOCÓ
entonces repitiendo...
function encriptar(stringEncriptada){

let matrizCodigo = [["e", enter]] --SIGNIFICA QUE "e" va a ser convertida a "enter"

luego ahi mismo = [ ["e", enter],  ["i", "imes"] ]...y asi sucesivamente


luego sigue convertir todo lo de la función en minúsculas  pues una de las reglas que aceptase todo en minúsculas

para ello usamos lo que le pasamosa nuestra función encriptar
stringEncriptada = stringEncriptada.toLowerCase(); 

es decir vamos a recibir ese texto y vamos a decirle que va a ser ella misma .toLowerCase  convertir todo esa cadena de texto o código en minuscula



//verificar cuales fueron esas letras que nuestro usuario pasó para luego
//hacer la parte del reemplazo

para recorrer las letras hacemos un for
}


let i indica que desde aquí va a iniciar nuestro ciclo (es nuestro índice-index)  hasta nuestro arreglo de letras (que va a verificar)
o la matrizCódigo.lenght --lenght verifica la largura de ella

en el for debe ser el tamaño de la matriz código siempre que sea menor que el indice porque ese es el loop que va a recorrer nuestro arreglo: si no le ponemos el <  el ciclo será infinito


for (let i=0; i < matrizCódigo.lenght; i++){


//ahora sigue verificar cuales letras letras están en nuestra palabra 
o sea veificar si tiene alguna letra de las que estan en nuestro arreglo
(o del abánico de palabras que convertira el programa)


//entonces cada que un ciclo sea cumplido  Va a verificar SI desde la posición 0  en adelante hasta la ultima posición hay una vocal o alguna de esas palabras contenidas en el arreglo

va a verficar si tiene alguna de las letras de nuestro arreglo

para eso usamos un IF

y si contiene alguna de las letras de nuestro arreglo
va a remplazar por las letras que hemos definido 


//cuando encuentra una la va a reemplazar   pero si solo ponemos replace
va a reemplazar solo una en cambio con replaceAll va a reemplazar todas las que encuentra se una o varias palabras del la regla de nuestro arreglo

asi que
mi stringEncriptada va a ser = a mi misma stringEncriptada y va a reemplazar lo del indice en la posición 0 o [i] [0] por lo que esté en la posición 1 o 
[i] [1] 


la 1era poisicion de array comienza con 0
posición [0] es lo que encuentra
y
posición 1 sería por lo que vamos a reemplazar---[1]

si encuentra [a], "a" será posicion [0]  y "ai" será posición [1] 
ej
            
letrs------["a" , "ai" ]
posicion----[0] ,  [1]  --siendo 1 lo que va a reemplazar



y returnamos lo que sería esa string

return stringEncriptada;


//AHORA EN NUSTRO HTML CREAMOS DOS FUNCIONES EN NUESTROS BOTONES QUE AHORA VAMOS A UTILIZAR AQUI EN NUESTRO JAVASCRIPT  Y VAN A IR ARRIBA LUEGO DE DECLARAR NUESTRAS CONSTANTES Y ANTES DE DECLARAR NUESTRA 1ewr FUNCION 
function encriptar(StringEncriptada){}


esto va aarriba

function btnEncriptar()   ---esto va a llamar a nustra función de html Onclic del mismo nombre

const TextoEncriptado =  encriptar(imputTexto.value);  nuestro texto encriptado  es igual = a nuestra funcion que hemos creado y le vamos a pasar el texto que hemos creado

asi con esto
creamos una variable para recibir el resultado de lo que escriba el usuario

y eso se va a a mandar a la otra cajita de texo (donde se desencriptará el texto en cuestión)  con

mensaje.value = textoEncriptado;

 //cuando se pase el texto no se muestre la imagen de la otra caja de texto




//y esto para que lo limpie
inputTexto.value = ""




//AHORA SIGUE LA PARTE DE DESENCRIPTAR QUE VA A SER LO CONTRARIO

SI PENSAMOS UN POCO VEMOS QUE REUTILIZAREMOS LA MISMA FUNCION PARA ENCRIPTAR 
PERO CAMBIAREMOS UNOS PARAMETROS COMO QUE  AHORA EN VEZ DE ESTAR EN LA [i][0]  porque supone que ya esta así   y ahora  va a cambiar la palabra a nuevamente de [i][0]  a [i][1]  y ahora nuevamente al estado origina o [i][0] para que la desencripte nuevamente


asi es como va declarado un for   con leng"th"
deciamos que:
    for (let i=0; i < matrizCodigo.length; i++){    //El for recorre el arreglo o mas bien las letras  NO ES LENGHT "CON HT" SINO LENGTH  CON "TH" POR ESO NI ENCONTRABA LA LETRA EN EL ARRAY NI LA PASABA ENCRIPTADA A NINGUN LADO

Ejemplo de como es la forma correcta:

Noncompliant Code Example
const arr = [4, 3, 2, 1];

for (let i = 0; i < arr.length; i++) {  // Noncompliant
  console.log(arr[i]);
}
Compliant Solution
const arr = [4, 3, 2, 1];

for (let value of arr) {
  console.log(value);
}


 */