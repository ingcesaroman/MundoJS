console.log("script listo");
var nombreUsuario = prompt("Cual es tu nombre? ")
var apellidoUsiario = prompt("Cual es tu apellido? ")
var edadUsuario = prompt("Cual es tu edad?")
console.log("Tu nombre es " + nombreUsuario);
console.log('Tu nombre completo es ' + nombreUsuario + " " + apellidoUsiario);
console.log("Tienes " + edadUsuario + " de edad");
/*alert('Tu nombre completo es ' + nombreUsuario + " " + apellidoUsiario + " y tienes " + edadUsuario + " de edad");*/
if (edadUsuario < 18){
alert("Aun no eres mayor de edad.");
}
else if (edadUsuario < 21){
alert("Puedes entrar pero no puedes tomar.");
}
else {
 alert("Venga! Ya puedes tomar.")
}