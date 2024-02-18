const canciones = document.getElementById('canciones');
const reproducir = document.getElementById('reproducir');
const video = document.getElementById('video');

reproducir.addEventListener('click', () => {
    const url = canciones.value;
    if (url) {
        video.src = url;
        video.style.display = 'block';
    }
});

//rosa
