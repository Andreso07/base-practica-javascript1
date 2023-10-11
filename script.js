
import { barcelona, roma, paris, londres } from './ciudades.js';

// Obtener elementos del DOM - document object model
let enlaces = document.querySelectorAll('a');
let tituloElement = document.getElementById('titulo');
let subtituloElement = document.getElementById('subtitulo');
let parrafoElement = document.getElementById('parrafo');
let precioElement = document.getElementById('precio');

enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        //Remover active element
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
            //Agregar clase "active" element al enlace actual
    this.classList.add('active');

    //Obtener el contenido correspondiente segun el enlace actual
    let contenido = obtenerContenido(this.textContent);

    // Mostrar el contenido en el DOM
    tituloElement.innerHTML = contenido.titulo;
    subtituloElement.innerHTML = contenido.subtitulo; //
    parrafoElement.innerHTML = contenido.parrafo;
    precioElement.innerHTML = contenido.precio;
    });

});

// funcion para traer la informacion correctamente de las ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres,
    }
    return contenido[enlace];
}