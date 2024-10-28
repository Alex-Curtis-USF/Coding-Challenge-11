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

