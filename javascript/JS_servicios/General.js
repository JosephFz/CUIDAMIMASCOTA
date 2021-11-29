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
body = document.getElementById("conteiner_all")
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