var carrito = pickearCarritoGuardado();
actualizarCarrito()
var agregarCarritoButtons = document.getElementsByClassName('agregar-carrito');
for (var i = 0; i < agregarCarritoButtons.length; i++) {
    agregarCarritoButtons[i].addEventListener('click', agregarProductoAlCarrito);
}

var botonVaciar = document.getElementById('boton-vaciar');
botonVaciar.addEventListener('click', vaciarCarrito);


function agregarProductoAlCarrito(evento) {
    var button = evento.target;
    var producto = button.parentElement.parentElement;
    var titulo = producto.getElementsByClassName('card-title')[0].innerText;
    var precio = producto.getElementsByClassName('card-text')[0].innerText;
    var precio = precio.substring(1) 
    var productoAgregado = {
        titulo: titulo,
        precio: precio,
    };
    carrito.push(productoAgregado);
    actualizarCarrito();
    guardarCarritoEnLocalStorage();
    
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
            <span>$${producto.precio}</span>
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

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
    guardarCarritoEnLocalStorage()
}

function pickearCarritoGuardado() {
    var carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        return JSON.parse(carritoGuardado); 
    } else {
        return [];
    }
    
}

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

/* esto es lo del sidenav */

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* boton a otra pag para pagar */
var botonpagar = document.getElementById('boton-pagar');
botonpagar.addEventListener('click',abrirMP)

var botonpagar = document.getElementById('boton-pagar2');
botonpagar.addEventListener('click',abrirMP)

function abrirMP () {
    var tot = document.getElementById('total')
    if(carrito.length === 0 ) {
        alert("No ha seleccionado nada para comprar")
    }else {
        alert("Tranferir al siguiente CBU: 0000003100083273193220")
    }
}

/* aca la idea era linkear con mercado pago pero no se puede si no figuras como negocio en la app */
