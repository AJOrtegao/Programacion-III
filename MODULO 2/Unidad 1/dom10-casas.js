// Referencias
const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorCasas');
const direccionInput = document.getElementById('direccion');
const descripcionInput = document.getElementById('descripcion');
const precioInput = document.getElementById('precio');

let casas = [];
let modoEditar = false;
let idEditar = null;

// Manejo del formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const direccion = direccionInput.value.trim();
    const descripcion = descripcionInput.value.trim();
    const precio = parseFloat(precioInput.value.trim());

    if (direccion && descripcion && !isNaN(precio)) {
        if (modoEditar) {
            casas = casas.map(casa => {
                if (casa.id === idEditar) {
                    return { ...casa, direccion, descripcion, precio };
                }
                return casa;
            });
            actualizarVista();
            formulario.reset();
            modoEditar = false;
            idEditar = null;
            formulario.querySelector('button[type="submit"]').textContent = 'Agregar Casa';
        } else {
            const nuevaCasa = {
                id: Date.now(),
                direccion,
                descripcion,
                precio
            };
            casas.push(nuevaCasa);
            renderizarCasa(nuevaCasa);
            formulario.reset();
        }
    }
});

// Renderizar una tarjeta de casa
function renderizarCasa({ id, direccion, descripcion, precio }) {
    const div = document.createElement('div');
    div.className = 'casa';
    div.setAttribute('data-id', id);

    div.innerHTML = `
        <h3>${direccion}</h3>
        <p>${descripcion}</p>
        <p><strong>Precio: $${precio.toFixed(2)}</strong></p>
        <div class="acciones">
            <button class="editar">Editar</button>
            <button class="eliminar">Eliminar</button>
        </div>
    `;
    contenedor.appendChild(div);
}

// Actualizar toda la vista
function actualizarVista() {
    contenedor.innerHTML = '';
    casas.forEach(casa => renderizarCasa(casa));
}

// Manejo de botones (editar y eliminar)
contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('eliminar')) {
        const tarjeta = e.target.closest('.casa');
        const id = parseInt(tarjeta.getAttribute('data-id'));
        casas = casas.filter(c => c.id !== id);
        tarjeta.remove();
    }

    if (e.target.classList.contains('editar')) {
        const tarjeta = e.target.closest('.casa');
        const id = parseInt(tarjeta.getAttribute('data-id'));
        const casa = casas.find(c => c.id === id);

        if (casa) {
            direccionInput.value = casa.direccion;
            descripcionInput.value = casa.descripcion;
            precioInput.value = casa.precio;
            modoEditar = true;
            idEditar = id;
            formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';
        }
    }
});