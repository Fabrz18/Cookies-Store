document.addEventListener("DOMContentLoaded", function () {
    const main = document.getElementById("main");
    const products = ['GalletasGrandes', 'GalletasPequeñas', 'Frappuccino'];
    let currentRow;

    for (let i = 0; i < 8; i++) {
        // Crear nueva fila si es la primera o cada 5 productos
        const uniqueId = uniqueID();
        if (i % 5 === 0) {
            
            currentRow = document.createElement("div");
            currentRow.id = `content-${uniqueId}`;
            currentRow.className = "content";
            main.appendChild(currentRow);
        }

        // Seleccionar producto aleatorio
        const product = products[Math.floor(Math.random() * products.length)];

        // Agregar producto a la fila actual
        currentRow.innerHTML += `
            <div class="products" id="${product}-${uniqueId}">
                <a href="#" class="products-button">
                    <img src="resources/images/icon/${product}.jpg" alt="${product}">
                    <div class="description">
                        <h3>${product}</h3>
                    </div>
                </a>
            </div>
        `;
    }
});

// Función para generar ID único
function uniqueID() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-=<>?";
    let uniqueId = '';
    for (let i = 0; i < 12; i++) {
        const aleatorio = Math.floor(Math.random() * caracteres.length);
        uniqueId += caracteres.charAt(aleatorio);
    }
    return uniqueId;
}
