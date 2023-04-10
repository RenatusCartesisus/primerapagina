document.getElementById('boton').addEventListener('click', ()=>{

let nombre = document.getElementById('nombre').value;
let edad = document.getElementById('edad').value;

document.getElementById('i').innerHTML=`Nombre: ${nombre}`;
document.getElementById('i2').innerHTML=`Edad: ${edad}`;

});