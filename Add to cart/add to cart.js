// document.addEventListener('DOMContentLoaded', () => {
//     let cartCount = 0;

//     const addToCartButton = document.getElementById('add-to-cart');
//     const cartCountElement = document.getElementById('cart-count');

//     addToCartButton.addEventListener('click', () => {
//         cartCount++;
//         cartCountElement.textContent = cartCount;
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart count
    let cartCount = 0;

    // Select the button and cart count elements
    const addToCartButton = document.getElementById('add-to-cart');
    const cartCountElement = document.getElementById('cart-count');

    // Check if elements are found
    if (!addToCartButton) {
        console.error('Add to Cart button not found');
        return;
    }
    if (!cartCountElement) {
        console.error('Cart count element not found');
        return;
    }

    // Add click event listener to the button
    addToCartButton.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
    });
});
