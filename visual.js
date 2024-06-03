
// Función para calcular el factorial de un número
function factorial(n) {
    if (n < 0) return -1; // El factorial de un número negativo no está definido
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    return result;
}

// Función que se ejecuta al enviar el formulario
function calculateFactorial(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    const numberInput = document.getElementById('numberInput');
    const number = parseInt(numberInput.value);
    const result = factorial(number);
    const resultDisplay = document.getElementById('result');
    resultDisplay.textContent = number + "! = " + result;
}

// Asignar la función al evento submit del formulario
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('factorialForm');
    form.addEventListener('submit', calculateFactorial);
});