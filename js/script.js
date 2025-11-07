// Arrays para almacenar cursos y aulas
let cursos = [];
let aulas = [];

// Referencias a elementos del DOM
const cursoForm = document.getElementById('cursoForm');
const tablaCurso = document.getElementById('tablaCurso').querySelector('tbody');
const aulaForm = document.getElementById('aulaForm');
const matrizAula = document.getElementById('matrizAula');

// Función para renderizar la matriz de aulas
function renderizarMatrizAulas() {
    // Limpia la matriz antes de volver a renderizar
    matrizAula.innerHTML = '';
    aulas.forEach(aula => {
        const bloque = document.createElement('div');
        bloque.className = 'bloque-aula';

        bloque.innerHTML = `
            <div><strong>Aula: ${aula.numero}</strong></div>
            <div>Capacidad: ${aula.capacidad}</div>
            <div>Piso: ${aula.piso}</div>
            <div>Tipo: ${aula.tipo}</div>
        `;

        // Crea el selector de cursos
        const select = document.createElement('select');
        select.innerHTML = `<option value="">-- Asignar curso --</option>` +
            cursos.map(curso => `<option value="${curso}">${curso}</option>`).join('');
        bloque.appendChild(select);

        matrizAula.appendChild(bloque);
    });
}

// Evento para agregar cursos
cursoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombreCurso').value;
    const cantidad = document.getElementById('cantidadEstudiantes').value;

    // Agrega a la tabla
    const fila = document.createElement('tr');
    fila.innerHTML = `<td>${nombre}</td><td>${cantidad}</td>`;
    tablaCurso.appendChild(fila);

    // Guarda el curso
    cursos.push(nombre);

    // Vuelve a renderizar la matriz de aulas para actualizar los selectores
    renderizarMatrizAulas();

    cursoForm.reset();
});

// Evento para agregar aulas
aulaForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const numero = document.getElementById('numeroAula').value;
    const capacidad = document.getElementById('capacidadEstudiantes').value;
    const piso = document.getElementById('pisoAula').value;
    const tipo = document.getElementById('tipoAula').value;
    
    // Guarda el aula
    aulas.push({ numero, capacidad, piso, tipo });

    // Vuelve a renderizar la matriz de aulas
    renderizarMatrizAulas();

    aulaForm.reset();
});

const offcanvas = document.getElementById('offcanvas');
const toggleBtn = document.getElementById('toggleOffcanvas');

toggleBtn.addEventListener('click', () => {
    offcanvas.classList.toggle('activo');
    // Cambia la flecha según el estado
    if (offcanvas.classList.contains('activo')) {
        toggleBtn.innerHTML = '&#x25C0;'; // Flecha hacia la izquierda
    } else {
        toggleBtn.innerHTML = '&#x25B6;'; // Flecha hacia la derecha
    }
});

const panelCurso = document.querySelector('.panelOffcanvas');
btnCurso.addEventListener('click', () => {
    panelCurso.classList.toggle('curso-activo');
    btnCurso.classList.toggle('activo');
    interiorCurso.classList.toggle('activo');

    // Si el panel de cursos se activa, desactiva el de aulas
    if (panelCurso.classList.contains('curso-activo')) {
        panelAula.classList.remove('aula-activo');
        btnAula.classList.remove('activo');
        interiorAula.classList.remove('activo');
    }
});

const panelAula = document.querySelector('.panelOffcanvas');
btnAula.addEventListener('click', () => {
    panelAula.classList.toggle('aula-activo');
    btnAula.classList.toggle('activo');
    interiorAula.classList.toggle('activo');

    // Si el panel de cursos se activa, desactiva el de aulas
    if (panelAula.classList.contains('aula-activo')) {
        panelCurso.classList.remove('curso-activo');
        btnCurso.classList.remove('activo');
        interiorCurso.classList.remove('activo');
    }
});