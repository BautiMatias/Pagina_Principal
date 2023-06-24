var carrito = [];
var agregarCarritoButtons = document.getElementsByClassName('agregar-carrito');
var productos = [
    {nombre:'Coca-cola original 2.25lts', precio: 1200},
    {nombre:'Coca-cola light 2.25lts', precio: 1201},
    {nombre:'Coca-cola zero 2.25lts', precio: 1202},
    {nombre:'Sprite original 2.25lts', precio: 1203},
    {nombre:'Schweppes Tonica 1.5lts', precio: 1202},
    {nombre:'Schweppes Pomelo 1.5lts', precio: 1202},
    {nombre:'Cepita Naranja 1L', precio: 1202},
    {nombre:'Speed XL', precio: 1202},
    {nombre:'Speed 260ml', precio: 1202},
    {nombre:'Fernet Branca 750ml', precio: 1202},
    {nombre:'Fernet Branca 1L', precio: 1202},
    {nombre:'Smirnoff Regular', precio: 1202},
    {nombre:'Smirnoff Raspberry', precio: 1202},
    {nombre:'Smirnoff Sandia/Manzana', precio: 1202},
    {nombre:'Smirnoff Citric/Orange', precio: 1202},
    {nombre:'Gin Bombay', precio: 1202},
    {nombre:'Gin Beefeater', precio: 1202},
    {nombre:'Gin Gordons', precio: 1202},
    {nombre:'Campari', precio: 1202},
    {nombre:'Aperol', precio: 1202},
    {nombre:'Lata Andes (todo tipo)', precio: 1202},
    {nombre:'Lata Budweiser', precio: 1202},
    {nombre:'Lata Brahma', precio: 1202},
    {nombre:'Lata Quilmes', precio: 1202},
    {nombre:'Porron Corona', precio: 1202},

];

for (var i = 0; i < agregarCarritoButtons.length; i++) {
    agregarCarritoButtons[i].addEventListener('click', agregarProductoAlCarrito);
}

function agregarProductoAlCarrito(evento) {
    var button = evento.target;
    var producto = button.parentElement.parentElement;
    var titulo = producto.getElementsByClassName('card-title')[0].innerText;
    var precio = producto.getElementsByClassName('card-text')[0].innerText;
    var productoAgregado = {
        titulo: titulo,
        precio: precio,
    };
    carrito.push(productoAgregado);
    actualizarCarrito();
}

function actualizarCarrito() {
    var carritoContainer = document.getElementById('carrito');
    carritoContainer.innerHTML = '';
    for (var i = 0; i < carrito.length; i++) {
        var producto = carrito[i];
        var carritoElemento = document.createElement('li');
        carritoElemento.classList.add('list-group-item');
        var contenido = `
            <span>${producto.titulo}</span>
            <span>${producto.precio}</span>
        `;
        carritoElemento.innerHTML = contenido;
        carritoContainer.appendChild(carritoElemento);
    }
    calcularTotal();
}

function calcularTotal() {
    var total = 0;
    for (var i = 0; i < carrito.length; i++) {
        total += parseInt(carrito[i].precio);
    }
    var totalElemento = document.getElementById('total');
    totalElemento.innerText = total;
}

var botonVaciar = document.getElementById('boton-vaciar');
botonVaciar.addEventListener('click', vaciarCarrito);

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}
