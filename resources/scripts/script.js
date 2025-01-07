window.addEventListener("resize", function() {
    const variable1 =  this.document.getElementById("options")
    const variable2 = this.document.getElementById("icon")
    const variable3 = this.document.getElementById("emergency-options")
    if (window.innerWidth <= 450) { // Cambia 600 por el ancho deseado
        console.log("El ancho de la ventana es menor o igual a 450px.");
        variable1.style.display  = "none";
        variable2.style.display  = "none";
        variable3.style.display  = "flex";
        
    } else {
        console.log("El ancho de la ventana es mayor a 600px.");
        variable1.style.display = "flex"
        variable2.style.display = "flex"
        variable3.style.display = "none"
    }
});
