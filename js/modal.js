// Abrir el modal. Variables
var modal = document.getElementById("videoModal");
var myvideo = document.getElementById("boton-modal");


// Funcion de apertura
myvideo.addEventListener('click', function () {
    modal.style.display = "block";
})

// Cuando hacemos clic en la X
var span = document.getElementsByClassName("close")[0];
span.addEventListener('click', function () {
    modal.style.display = "none";
    var iframeVideo = document.getElementById("video-iframe");
    iframeVideo.setAttribute('src', iframeVideo.setAttribute('src', ''));
    iframeVideo.setAttribute('src', 'https://www.youtube.com/embed/7XQOVKd-vVI');


})