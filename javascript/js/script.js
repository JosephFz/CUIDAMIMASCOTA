
/*Carrito Inicio*/ 
const carrito = document.getElementById('carrito');
const catalogos = document.getElementById('lista-catalogo');
const listaCatalogos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
     catalogos.addEventListener('click', comprarCatalogo);
     carrito.addEventListener('click', eliminarCatalogo);
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
     document.addEventListener('DOMContentLoaded', leerLocalStorage);
}

/*Funcion Comprar Productos */
function comprarCatalogo(e) {
     e.preventDefault();

     if(e.target.classList.contains('agregar-carrito')){
          const catalogo = e.target.parentElement.parentElement;
          leerDatosCatalogo(catalogo);
     }
}

/*Funcion leer datos de los productos */
function leerDatosCatalogo(catalogo) {
     const infoCatalogo = {
          imagen: catalogo.querySelector('img').src,
          titulo: catalogo.querySelector('h4').textContent,
          precio: catalogo.querySelector('.precio span').textContent,
          id: catalogo.querySelector('a').getAttribute('data-id')
     }
     insertarCarrito(infoCatalogo);
}

function insertarCarrito(catalogo) {
     const row = document.createElement('tr');
     row.innerHTML = `
          <td>
               <img src="${catalogo.imagen}" width=100>
          </td>
          <td>${catalogo.titulo}</td>
          <td>${catalogo.precio}</td>
          <td>
               <a href="#" class="borrar-catalogo" data-id="${catalogo.id}">X</a>
          </td>
     `; 
     listaCatalogos.appendChild(row);
     guardarCatalogoLocalStorage(catalogo);
}

/*Funcion eliminar catalogo*/
function eliminarCatalogo(e) {
     e.preventDefault();

     let catalogo,
          catalogoId;

     if(e.target.classList.contains('borrar-catalogo')){
          e.target.parentElement.parentElement.remove();
          catalogo = e.target.parentElement.parentElement;
          catalogoId = catalogo.querySelector('a').getAttribute('data-id');
     }

     eliminarCatalogoLocalStorage(catalogoId);
}

/*Funcion Vaciar Carrito */

function vaciarCarrito() {
     while(listaCatalogos.firstChild) {
          listaCatalogos.removeChild(listaCatalogos.firstChild);
     }

     vaciarLocalStorage();

     return false;
}

/*Funcion Guardar Carrito */

function guardarCatalogoLocalStorage(catalogo) {
     let catalogos;

     catalogos = obtenerCatalogosLocalStorage();

     catalogos.push(catalogo);

     localStorage.setItem('catalogos', JSON.stringify(catalogos));
}


function obtenerCatalogosLocalStorage() {
     let catalogosLS;

     if(localStorage.getItem('catalogos') === null){
          catalogosLS = [];
     }else {
          catalogosLS = JSON.parse(localStorage.getItem('catalogos'));
     }
     return catalogosLS
}


function leerLocalStorage() {
     let catalogosLS;

     catalogosLS = obtenerCatalogosLocalStorage();

     catalogosLS.forEach(function(catalogo){

          const row = document.createElement('tr');
          row.innerHTML = `
               <td>
                    <img src="${catalogo.imagen}" width=100>
               </td>
               <td>${catalogo.titulo}</td>
               <td>${catalogo.precio}</td>
               <td>
                    <a href="#" class="borrar-catalogo" data-id="${catalogo.id}">X</a>
               </td>
          `;
          listaCatalogos.appendChild(row);

     });
}


/*Funcion Eliminar Producto */

function eliminarCatalogoLocalStorage(catalogo) {
     let catalogosLS;

     catalogosLS = obtenerCatalogosLocalStorage();

     catalogosLS.forEach(function(catalogosLS, index){
          if(catalogosLS.id === catalogo) {
               catalogosLS.splice(index, 1);
          }
     });

     localStorage.setItem('catalogos', JSON.stringify(catalogosLS));

}

/*Funcion Vaciar Carrito */
function vaciarLocalStorage() {
     localStorage.clear();
}




/* Slider Inicio */
var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked =true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);
/* Slider Fin */
/*EQUIZ*/ 
window.onscroll = function(){
     scroll = document.scrollingElement.scrollTop;
 
     header= document.getElementById("header");
 
     if(scroll> 20){
         header.classList.add('nav_mod')
     }
     else if(scroll<20){
         header.classList.remove('nav_mod')
     }
 
 }
 
 menu = document.getElementById("header");
 body = document.getElementById("conteiner__all")
 nav = document.getElementById("nav");
 
 document.getElementById("btn_menu").addEventListener("click",mostrar_menu);
 
 function mostrar_menu(){
 
     menu.classList.toggle('move_content');
     body.classList.toggle('move_content');
     nav.classList.toggle('move_nav');
 }
 
 window.addEventListener("resize", function(){
     if(window.innerHeight>760){
         menu.classList.remove('move_content');
         body.classList.remove('move_content');
         nav.classList.remove('move_nav');
     }
 })

