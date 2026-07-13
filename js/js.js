// 1. Select DOM elements
const precioBase = Number(document.querySelector("#precio-base").textContent);
const cantidadSpan = document.querySelector("#cantidad");
const totalPagarSpan = document.querySelector("#total-pagar");
const btnSumar = document.querySelector("#btn-sumar");
const btnRestar = document.querySelector("#btn-restar");

// Initialize local tracking variable
let cantidad = 1;

// 2. Define calculation function
function actualizarTotal() {
    cantidadSpan.textContent = cantidad;
    const total = cantidad * precioBase;
    totalPagarSpan.textContent = total;
}

// 3. Add event listeners
btnSumar.addEventListener("click", () => {
    cantidad++;
    actualizarTotal();
});

btnRestar.addEventListener("click", () => {
    if (cantidad > 0) { // Prevents negative quantities
        cantidad--;
        actualizarTotal();
    }
});