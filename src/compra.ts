//Declaraciones globales
const cProductos = document.getElementById("productos");
const botonCompra = document.getElementById("botCompra");
let divProd;
let prodName;
let prodPrice = 0;
let amountSelect: number = 0;

//Arreglo Productos, Stock y Precio
let productos: string[] = ["Gaseosa", "Cerveza", "Harina", "Fideos"];
let stock: number[] = [8, 20, 18, 12];
let precio: number[] = [150, 180, 100, 90];

//Carga compra
function cargarProductos() {
  for (let i = 0; i < stock.length; i++) {
    divProd = document.createElement("div");
    divProd.classList.add("Nombre_Producto");
    divProd.id = `producto-${i}`;
    prodName = document.createElement("p");
    prodName.innerHTML = productos[i];
    prodPrice = document.createElement("p");
    prodPrice.innerHTML = `$${precio[i]}`;
    amountSelect = document.createElement("input");
    amountSelect.id = `amountSelect${i}`;
    amountSelect.type = "number";
    amountSelect.max = String(stock[i]);
    amountSelect.min = "0";
    divProd.appendChild(prodName);
    divProd.appendChild(prodPrice);
    divProd.appendChild(amountSelect);
    cProductos?.appendChild(divProd);
    divProd.appendChild(prodName);
    divProd.appendChild(prodPrice);
    console.log(prodPrice);
    console.log(amountSelect);
  }
}

let comprar = () => {
  document.getElementById("compras").innerHTML = "";
  let valorTotal = 0;
  for (let i = 0; i < stock.length; i++) {
    let selectorCantidad = document.getElementById(`amountSelect${i}`);
    let cantidadSeleccionada = Number(selectorCantidad.value);
    if (cantidadSeleccionada > 0) {
      let cantidadItems = document.createElement("p");
      cantidadItems.innerHTML = cantidadSeleccionada;
      compras.appendChild(cantidadItems);
      let productoTotal = document.createElement("p");
      productoTotal.innerHTML = productos[i];
      compras.appendChild(productoTotal);
      let precioTotal = document.createElement("p");
      precioTotal.innerHTML = `$${precio[i]}`;
      compras.appendChild(precioTotal);

      console.log(
        `Compraste ${cantidadSeleccionada} unidades de ${productos[i]}`
      );
      valorTotal += precio[i] * cantidadSeleccionada;
    }
  }
  if (valorTotal > 0) {
    let compraTotal = document.createElement("h3");
    compraTotal.innerHTML = `  Su compra Total es de $ ${valorTotal}`;
    compras.appendChild(compraTotal);
    console.log(`El costo total de su compra es $${valorTotal}`);
  } else {
    let seleccionarProd = document.createElement("h3");
    seleccionarProd.innerHTML = `Debe seleccionar al menos un producto`;
    compras.appendChild(seleccionarProd);
    console.log(`Debe seleccionar al menos un producto`);
  }
};

window.onload = cargarProductos();

botonCompra?.addEventListener("click", comprar);
