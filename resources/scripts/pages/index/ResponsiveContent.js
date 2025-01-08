window.addEventListener("resize", function() {
    const content = document.getElementsByClassName("content");
    const products = document.getElementsByClassName("products")
    if (window.innerWidth <= 600) {
        console.log("estoy en el ifffff de content <400");

        for (let i = 0; i < content.length; i++) {
            content[i].style.display = "grid";
        }
    } else if (window.innerWidth <= 1000) {
        for (let i = 0; i < products.length; i++) {
            products[i].style.width  = "140px";           
            products[i].style.height = "180px";            
        }
    }else{
        for (let i = 0; i < content.length; i++) {
            content[i].style.display = "";
        }
        for (let i = 0; i < products.length; i++) {
            products[i].style.width  = "280px";            
            products[i].style.height = "250px"; 
        }
            
    }
});
