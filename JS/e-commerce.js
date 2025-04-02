document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const clearCartButton = document.getElementById("clear-cart");
    const emptyCartMessage = document.getElementById("empty-cart-message");
    
    function updateCartDisplay() {
        if (cartContainer) {
            cartContainer.innerHTML = "";
            cart.forEach((item, index) => {
                let cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                cartItem.innerHTML = `
                    <p>${item.name} - $${item.price}</p>
                    <button class="remove-item" data-index="${index}">Remove</button>
                `;
                cartContainer.appendChild(cartItem);
            });

            // Toggle empty cart message
            if (emptyCartMessage) {
                emptyCartMessage.style.display = cart.length === 0 ? 'block' : 'none';
            }

            // Calculate and display total
            if (cartContainer) {
                const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);
                const totalElement = document.createElement("div");
                totalElement.classList.add("cart-total");
                totalElement.innerHTML = `<strong>Total: $${totalPrice.toFixed(2)}</strong>`;
                cartContainer.appendChild(totalElement);
            }
        }

        // Update cart count in header and localStorage
        if (cartCount) {
            cartCount.textContent = cart.length;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function addToCart(event) {
        const productCard = event.target.closest(".product-card");
        const name = productCard.querySelector("h3").textContent;
        const price = productCard.querySelector(".price").textContent.replace("$", "");
        
        cart.push({ name, price });
        updateCartDisplay();
    }

    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", addToCart);
    });

    // Remove item from cart
    if (cartContainer) {
        cartContainer.addEventListener("click", (event) => {
            if (event.target.classList.contains("remove-item")) {
                const index = event.target.dataset.index;
                cart.splice(index, 1);
                updateCartDisplay();
            }
        });
    }

    // Clear entire cart
    if (clearCartButton) {
        clearCartButton.addEventListener("click", () => {
            cart = [];
            updateCartDisplay();
        });
    }

    // Initial display update
    updateCartDisplay();
});