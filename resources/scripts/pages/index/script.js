
window.addEventListener("resize", function() {
    const variable1 =  this.document.getElementById("options")
    const variable2 = this.document.getElementById("icon")
    const variable3 = this.document.getElementById("emergency-options")
    const logo = this.document.getElementById("logo")
    const logo_ico = this.document.getElementById("logo-ico")
    if (window.innerWidth <= 500) {
        
        variable1.style.display  = "none";
        variable2.style.display  = "none";
        variable3.style.display  = "flex";
        logo.style.width = "38px"
        logo.style.height = "38px"
        
        logo_ico.style.width = "38px"
        logo_ico.style.height = "38px"

        } else {
        
        variable1.style.display = "flex"
        variable2.style.display = "flex"
        variable3.style.display = "none"
        logo.style.width =  "69px"
        logo.style.height = "69px"
   
        logo_ico.style.width =  "69px"
        logo_ico.style.height = "69px"
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const variable1 =  this.document.getElementById("options")
    const variable2 = this.document.getElementById("icon")
    const variable3 = this.document.getElementById("emergency-options")
    const logo = this.document.getElementById("logo")
    const logo_ico = this.document.getElementById("logo-ico")
    if (window.innerWidth <= 500) {
        
        variable1.style.display  = "none";
        variable2.style.display  = "none";
        variable3.style.display  = "flex";
        logo.style.width = "38px"
        logo.style.height = "38px"
        
        logo_ico.style.width = "38px"
        logo_ico.style.height = "38px"

        } else {
        
        variable1.style.display = "flex"
        variable2.style.display = "flex"
        variable3.style.display = "none"
        logo.style.width =  "69px"
        logo.style.height = "69px"
   
        logo_ico.style.width =  "69px"
        logo_ico.style.height = "69px"
    }
});
