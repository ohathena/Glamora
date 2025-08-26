let cart = [];

function addToCart(name, price) {
    cart.push({name, price});
    updateCartCount();
    showCartNotification(name);
}

function updateCartCount() {
    const cartIcon = document.querySelector('#cartToggle');
    if (cartIcon) {
        cartIcon.textContent = `🛒 (${cart.length})`;
    }
}

function showCartNotification(productName) {
    // Silent add - no alert
}

function showCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
        cartTotal.textContent = '$0';
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = cart.map(item => {
        total += parseInt(item.price);
        return `<div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee;">
            <span>${item.name}</span>
            <span>$${item.price}</span>
        </div>`;
    }).join('');
    
    cartTotal.textContent = `$${total}`;
}