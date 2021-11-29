var getDataa= function(){
    validar(()=>{
        var Nombres = document.getElementById('nomb').value;
        alert("Bienvenido a CuidaMiMascota"+" "+Nombres);
    });

}


function validar(){
    var nombs;
    var correo;
    nombs = document.getElementById("nomb").value;
    correo = document.getElementById("correo").value;  

    correo_er = /^[_a-z0-9-]+(  \.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/
    

    if(nombs=== ""|| correo===""){
        alert("Rellene todos los campos son obligatorios, arreglar porfavor")
        return false;
    } else if (nombs.length>30){
        alert("Los nombres y apellidos son muy largos, arreglar porfavor");
        return false;
    } else if(correo.length>35){
        alert("El correo es muy largo, arreglar porfavor"); 
        return false;
    }else if(!correo_er.test(correo)){
        alert("El correo ingresado no es válido, arreglar porfavor");
        return false;
    }
    return URL("..//Paginas/PaginaPrincipal.html")

}

