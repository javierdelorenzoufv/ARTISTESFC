// Seleccionamos todas las imágenes clicables
const clickableImages = document.querySelectorAll('.clickable-image');

// Seleccionamos el overlay y la imagen en el overlay
const overlay = document.querySelector('.overlay');
const overlayImage = document.getElementById('overlay-image');

// Añadimos un evento a cada imagen para abrir el overlay y cambiar la imagen
clickableImages.forEach(image => {
    image.addEventListener('click', (event) => {
        // Obtener la ruta de la imagen ampliada (almacenada en el atributo "data-expanded")
        const expandedImageSrc = event.target.getAttribute('data-expanded');
        
        // Cambiar la imagen del overlay a la imagen ampliada
        overlayImage.src = expandedImageSrc;

        // Mostrar el overlay
        overlay.classList.add('visible');
    });
});

// Añadimos un evento al overlay para cerrarlo cuando se haga clic
overlay.addEventListener('click', () => {
    overlay.classList.remove('visible'); // Ocultar el overlay
});
