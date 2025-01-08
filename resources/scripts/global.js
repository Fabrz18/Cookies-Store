document.addEventListener("DOMContentLoaded", function () {
    // Definir la ruta que quieres establecer
    const route = '/'; // Esta puede ser cualquier ruta que desees

    // Cambiar la URL sin recargar la página
    window.history.pushState({}, '', route);

    // Aquí puedes agregar el código que cambia el contenido según la ruta

});
// Función para cargar el contenido dinámicamente basado en la ruta


