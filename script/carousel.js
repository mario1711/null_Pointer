window.onload = function () {
    // Variables
    
    const IMAGENES = [
        'img/img4.png',
        'img/img5.png',
        'img/img6.png',
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 5000;
    let posicionActual = 0;
    let $imagen = document.querySelector('#imagen');
    let $etiqueta = document.getElementById('etiqueta');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        if (posicionActual == 0) {
            $etiqueta.innerHTML = `Ven y conocenos`;    
        } else if(posicionActual == 1){
            $etiqueta.innerHTML = `Nuestro equipo de trabajo`; 
        } else if(posicionActual == 2){
            $etiqueta.innerHTML = `Conoce nuestros proyectos`
        }
        
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        
    }

    // Eventos
    renderizarImagen();
    playIntervalo();
}