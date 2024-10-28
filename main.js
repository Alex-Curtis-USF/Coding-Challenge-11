// Task 2

const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');

// Here Im adding the ability to change the inputs
productSelector.addEventListener('change', function() {
    console.log('Product selected:', productSelector.value);
});

quantityInput.addEventListener('input', function() {
    console.log('Quantity changed:', quantityInput.value);
});

// Task 3

// This is to change the total price when the quanitity or the product is changed.
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity;
    
    totalPriceElement.textContent = totalPrice;
}

productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);

updateTotalPrice();

// Task 4

const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

// To be able to place the order.
placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    const quantity = quantityInput.value;
    const totalPrice = totalPriceElement.textContent;
    
    orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`;
});
