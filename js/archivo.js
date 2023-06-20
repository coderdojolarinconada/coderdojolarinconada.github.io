const activo = window.location.pathname;

if (activo == document.getElementById('inicio').getAttribute('href')){
  
    document.getElementById('inicio').classList.add('active');
}

if (activo == document.getElementById('reservar').getAttribute('href')){
   
    document.getElementById('reservar').classList.add('active');
}

if (activo == document.getElementById('noticias').getAttribute('href')){
    
    document.getElementById('noticias').classList.add('active');
}

if (activo == document.getElementById('videos').getAttribute('href')){
    
    document.getElementById('videos').classList.add('active');
}

if (activo == document.getElementById('about').getAttribute('href')){
  
    document.getElementById('about').classList.add('active');
}

if (activo == document.getElementById('recursos').getAttribute('href')){
 
    document.getElementById('recursos').classList.add('active');
}


const boton = document.getElementById('boton');
const menu = document.getElementById('down');

boton.addEventListener('click', function(){
    menu.classList.toggle('mostrar');
})