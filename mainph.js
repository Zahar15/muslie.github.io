document.addEventListener("DOMContentLoaded", function() {
    const panel = document.getElementById("panel");
    const toggleButton = document.querySelector(".toggle-button");
    const cartCount = document.querySelector(".cart-count");
    const addToCartButtons = document.querySelectorAll(".nutsb, .tropicb");

    toggleButton.addEventListener("click", function() {
        panel.classList.toggle("show");
    });

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            cartCount.textContent = parseInt(cartCount.textContent) + 1;
        });
    });
});