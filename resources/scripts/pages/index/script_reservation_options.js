window.addEventListener("resize", function() {
    const logo_ico = document.getElementById("time-div-clock-id")
    const reservation_items = document.getElementById("reservation-options-id")
    const truest_saver = document.getElementById("emergency-reservation")
    if (window.innerWidth <= 400) {
        

        logo_ico.style.fontSize = "10px"
        reservation_items.style.display = "none"
        truest_saver.style.display = "flex"
        } else {
        

        logo_ico.style.fontSize = "20px"
        reservation_items.style.display = "flex"
        truest_saver.style.display = "none"
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const logo_ico = document.getElementById("time-div-clock-id")
    const reservation_items = document.getElementById("reservation-options-id")
    const truest_saver = document.getElementById("emergency-reservation")
    if (window.innerWidth <= 400) {
        
        
        logo_ico.style.fontSize = "10px"
        reservation_items.style.display = "none"
        truest_saver.style.display = "flex"
        } else {
        
        logo_ico.style.fontSize = "20px"
        reservation_items.style.display = "flex"
        truest_saver.style.display = "none"
    }
});