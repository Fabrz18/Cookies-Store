document.addEventListener("DOMContentLoaded", function () {
    const main = document.getElementById("main")
    const products = ['GalletasGrandes','GalletasPequeñas','Frappuccino'];
    var cont = 0;
    for (let i = 0; i < 10; i++) {
        uniqueId = uniqueID()
        if (i % 5 === 0 && i > 0) {
            
            let namec = 'content-'+uniqueId; 
            main.innerHTML += 
               `
               <div id="${namec}" class="content" 5>
               
               </div>
               `;
            for (let j = 0; j < 5; j++) {
                const DivProducts = document.getElementById(namec)
                const product = products[Math.floor(Math.random() * products.length)];

                DivProducts.innerHTML += 
                `
                <div class="products" id="${uniqueId}+${product}">
                            <a href="#" class="products-button">
                            <img src="resources/images/icon/${product}.jpg" alt="${product}">
                            <div class="description">
                                <h3>${product}</h3>
                            </div>
                            </a>
                        </div>
                `;
                    
            }
        }
        if (i === 0) {
            
            let namec = 'content-'+uniqueId; 
            main.innerHTML += 
               `
               <div id="${namec}" class="content">
               
               </div>
               `;
               for (let j = 0; j < 5; j++) {
                const DivProducts = document.getElementById(namec)
                const product = products[Math.floor(Math.random() * products.length)];

                DivProducts.innerHTML += 
                `
                <div class="products" id="${uniqueId}+${product}">
                            <a href="#" class="products-button">
                            <img src="resources/images/icon/${product}.jpg" alt="${product}">
                            <div class="description">
                                <h3>${product}</h3>
                            </div>
                            </a>
                        </div>
                `;
                    
            }
        }
    }
    
});

function uniqueID(){
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-=<>?";
    let uniqueId = '';
    
    for (let i = 0; i < 12; i++) {
        const aleatorio = Math.floor(Math.random() * caracteres.length);
        uniqueId += caracteres.charAt(aleatorio);
    }

    return uniqueId;
}
