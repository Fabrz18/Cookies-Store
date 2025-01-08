

    document.addEventListener("DOMContentLoaded", function () {
        const pageName = window.location.pathname.split('/').pop().split('.')[0];
        console.log("Nombre de la página actual:", pageName);
        const navopt = document.getElementById(pageName)
        if (navopt.id === pageName) {
            navopt.style.color = "#744141";  
        }
        
        console.log(navopt.id)
    });

    // Si necesitas solo el nombre sin extensión (por ejemplo, "recipes")

