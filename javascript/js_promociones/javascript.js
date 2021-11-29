const nav = document.querySelector('.busqueda');

//Registrar el evento

nav.addEventListener('mouseenter',()=>{
    console.log('Entrando al elemento de navegación');
});
nav.addEventListener('mouseout',()=>{
    console.log('Saliendo del elemento de navegación');
});

//eventos
nav.addEventListener('mousedown',()=>{
    console.log('se ejecuto el evento mousedown');
});
nav.addEventListener('mouseup',()=>{
    console.log('hice click y solte el boton del mouse');
});
nav.addEventListener('dblclick',()=>{
    console.log('hice doble click');
});
nav.addEventListener('keydown',()=>{
    console.log('estas escribiendo...');
});
nav.addEventListener('blur',()=>{
    console.log('diste click fuera del input');
});
nav.addEventListener('copy',()=>{
    console.log('vas a copiar');
});
nav.addEventListener('paste',()=>{
    console.log('has pegado contenido');
});
nav.addEventListener('cut',()=>{
    console.log('has cortado contenido');
});
nav.addEventListener('input',()=>{
    console.log('se esta cubriendo muchos eventos ...');
});
nav.addEventListener('input',(e)=>{
    console.log(e);
});
nav.addEventListener('input',(e)=>{
    console.log(e.type);
});
nav.addEventListener('input',(e)=>{
    console.log(e.target);
});
nav.addEventListener('input',(e)=>{
    console.log(e.target.value);
});
nav.addEventListener('input',(e)=>{
    if(e.target.value=="")
    console.log('fallo la validacion');
});
