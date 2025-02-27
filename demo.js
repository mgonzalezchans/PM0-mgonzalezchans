
function checkLongitud(longitud) {

//si la longitud no existe:
if(!longitud) return "debe ingresar longitud"

if(typeof longitud !== "string") return "la longitud recibida no es valida"
if(longitud < 3) return "la longitud debe ser mayor o igual a 3"
if(longitud > 10) return "la longitud debe ser menor o igual a 10"
return longitud
}

function generarContrasena(longitud, incluirEspeciales, incluirNumeros, incluirMayusculas)
/*TU CODIGO*/
var letras = "abcdefghijklmnopqrstuvwxyz"
var numeros = "0123456789"
var especiales = "!@#$%^&*()_-=+{}[]?"
var letrasMayusculas = letras.toUpperCase()
var caracteresDisponibles = letras;

if (incluirEspeciales) {
    caracteresDisponibles + especiales
}

if (incluirNumeros) caracteresDisponibles += numeros
if (incluirMayusculas) caracteresDisponibles += letrasMayusculas

var contrasena = ""

if (longitud >=3) {
    Math.random () * caracteresDisponibles.length
}

console.log ()


//contador de letras

var texto = "hola mundo como estan todos";
var contadorDeO = 0 //inicializa el contador rn 0 

for (var i = 0; i < texto.length; i++) {
    if (texto.charAt(i) === "o") {  //metodo de js que permite obtener un caracter en una posicion especifica dentro de una cadena de texto: cadena.charAt(posicion). CADENA: ES LA CADENA DE TEXTO DE LA QUE SE QUIERE OBTENER EL CARACTER; POSICION: INDICE DEL CARACTER QUE QUIERES OBTENER (COMINEZA EN 0)
        //o tambien-> if (texto[i] === "o") funciona de la misma manera.
//         var texto = "Hola";
// console.log(texto.charAt(0)); // "H"
// console.log(texto.charAt(1)); // "o"
// console.log(texto.charAt(2)); // "l"
// console.log(texto.charAt(3)); // "a"
        contadorDeO++;
    }
}

console.log("cantidad de 'o':", contadorDeO(texto));

