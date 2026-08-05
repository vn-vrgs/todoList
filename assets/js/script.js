/**
 * Desafío 5: Todo List - JavaScript ES6+
 * Academia Desafío Latam - Módulo 3: Métodos de los arreglos
 * 
 * Requerimientos cubiertos:
 * 1. Agregar tareas al arreglo y actualizar la lista en el DOM (2 pts)
 * 2. Borrar tarea usando findIndex() y splice() (2 pts)
 * 3. Contar total de tareas mantenido dinámicamente (2 pts)
 * 4. Marcar tarea completada cambiando el estado 'realizada' y aplicando estilos (2 pts)
 * 5. Contar tareas realizadas filtrando con filter() (1 pt)
 * 6. Arreglo inicial con al menos 3 tareas cargadas automáticamente (1 pt)
 */

// ==========================================
// 1. Estado Inicial (Requerimiento 6 - 1 pt)
// ==========================================
const tareas = [
  { id: 16, descripcion: "Hacer mercado", realizada: true },
  { id: 60, descripcion: "Estudiar para la prueba", realizada: false },
  { id: 24, descripcion: "Sacar a pasear a Tobby", realizada: false }
];

// ==========================================
// 2. Referencias a Elementos del DOM
// ==========================================
const listaTareasEl = document.querySelector("#listaTareas");
const totalTareasEl = document.querySelector("#totalTareas");
const realizadasTareasEl = document.querySelector("#realizadasTareas");
const nuevaTareaInput = document.querySelector("#nuevaTareaInput");
const btnAgregarTarea = document.querySelector("#btnAgregarTarea");
const errorFeedbackEl = document.querySelector("#errorFeedback");

// ==========================================
// 3. Función Principal de Renderizado (Render)
// ==========================================
/**
 * Actualiza la lista de tareas en el HTML y refresca los contadores globales.
 * Recorre el arreglo mediante forEach() (Requerimiento 6).
 */
const renderTareas = () => {
  // Limpiar el contenido actual del DOM
  listaTareasEl.innerHTML = "";

  // Si no hay tareas, mostrar mensaje de lista vacía
  if (tareas.length === 0) {
    listaTareasEl.innerHTML = `
      <tr>
        <td colspan="4" class="empty-state">
          <i class="fa-regular fa-clipboard"></i>
          <p class="mb-0 fw-medium">No hay tareas registradas. ¡Agrega una nueva tarea arriba!</p>
        </td>
      </tr>
    `;
  } else {
    // Recorrer el arreglo de tareas e insertar filas dinámicamente
    tareas.forEach((tarea) => {
      const isChecked = tarea.realizada ? "checked" : "";
      const textClass = tarea.realizada ? "tarea-completada" : "";
      const rowClass = tarea.realizada ? "row-completada" : "";

      const rowHtml = `
        <tr class="${rowClass}">
          <td class="ps-3">
            <span class="id-badge">${tarea.id}</span>
          </td>
          <td>
            <span class="fw-medium text-dark ${textClass}">${escapeHtml(tarea.descripcion)}</span>
          </td>
          <td class="text-center">
            <div class="form-check d-flex justify-content-center m-0">
              <input 
                class="form-check-input" 
                type="checkbox" 
                ${isChecked}
                onchange="toggleEstadoTarea(${tarea.id})"
                title="Marcar como ${tarea.realizada ? 'pendiente' : 'completada'}"
                aria-label="Estado de la tarea ${escapeHtml(tarea.descripcion)}"
              >
            </div>
          </td>
          <td class="text-center">
            <button 
              class="btn-borrar" 
              onclick="borrarTarea(${tarea.id})" 
              title="Eliminar tarea"
              aria-label="Eliminar tarea ${escapeHtml(tarea.descripcion)}"
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </td>
        </tr>
      `;

      listaTareasEl.innerHTML += rowHtml;
    });
  }

  // Actualizar los contadores en el DOM
  actualizarContadores();
};

// ==========================================
// 4. Actualización de Contadores Globales
// ==========================================
/**
 * Mantiene actualizados los contadores en el resumen (Requerimientos 3 y 5).
 */
const actualizarContadores = () => {
  // Requerimiento 3: Total de tareas (2 pts)
  totalTareasEl.textContent = tareas.length;

  // Requerimiento 5: Contar total de tareas realizadas filtrando el arreglo (1 pt)
  const realizadasCount = tareas.filter(tarea => tarea.realizada).length;
  realizadasTareasEl.textContent = realizadasCount;
};

// ==========================================
// 5. Agregar Nueva Tarea (Requerimiento 1 - 2 pts)
// ==========================================
/**
 * Obtiene la descripción del input, crea un objeto tarea con ID único y lo agrega al arreglo.
 */
const agregarTarea = () => {
  const descripcion = nuevaTareaInput.value.trim();

  // Validación: Evitar descripciones vacías
  if (descripcion === "") {
    errorFeedbackEl.classList.remove("d-none");
    nuevaTareaInput.classList.add("is-invalid");
    nuevaTareaInput.focus();
    return;
  }

  // Ocultar mensaje de error si era visible
  errorFeedbackEl.classList.add("d-none");
  nuevaTareaInput.classList.remove("is-invalid");

  // Crear nuevo objeto de tarea con ID único generado por tiempo
  // Para IDs cortos legibles tipo la maqueta (16, 60, 24) o timestamp simplificado
  const nuevoId = Math.floor(Math.random() * 90) + 10; // Genera ID de 2 dígitos o Date.now() % 1000

  const nuevaTarea = {
    id: nuevoId,
    descripcion: descripcion,
    realizada: false
  };

  // Agregar al arreglo (push)
  tareas.push(nuevaTarea);

  // Limpiar input
  nuevaTareaInput.value = "";

  // Re-renderizar lista y actualizar contadores
  renderTareas();
};

// ==========================================
// 6. Eliminar Tarea (Requerimiento 2 - 2 pts)
// ==========================================
/**
 * Busca el índice de la tarea mediante findIndex() y la remueve del arreglo con splice().
 * @param {number} id - Identificador único de la tarea a eliminar.
 */
const borrarTarea = (id) => {
  // Buscar índice en el arreglo usando findIndex
  const index = tareas.findIndex(tarea => tarea.id === id);

  if (index !== -1) {
    // Eliminar la tarea con splice
    tareas.splice(index, 1);

    // Re-renderizar lista y actualizar contadores
    renderTareas();
  }
};

// ==========================================
// 7. Cambiar Estado Completado (Requerimiento 4 - 2 pts)
// ==========================================
/**
 * Busca la tarea por su ID y conmuta el estado de la propiedad 'realizada'.
 * @param {number} id - Identificador único de la tarea.
 */
const toggleEstadoTarea = (id) => {
  // Buscar el objeto tarea en el arreglo mediante find()
  const tareaEncontrada = tareas.find(tarea => tarea.id === id);

  if (tareaEncontrada) {
    // Alternar el booleano realizada
    tareaEncontrada.realizada = !tareaEncontrada.realizada;

    // Re-renderizar para aplicar estilos y actualizar contador de realizadas
    renderTareas();
  }
};

// ==========================================
// 8. Utilidad de Seguridad (Escapar HTML)
// ==========================================
/**
 * Escapa caracteres HTML especiales para prevenir inyecciones XSS.
 * @param {string} str 
 * @returns {string} Texto sanitizado.
 */
const escapeHtml = (str) => {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
};

// ==========================================
// 9. Event Listeners e Invocación Inicial
// ==========================================

// Click en el botón Agregar
btnAgregarTarea.addEventListener("click", agregarTarea);

// Presionar tecla 'Enter' en el input
nuevaTareaInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    agregarTarea();
  }
});

// Limpiar mensaje de error cuando el usuario vuelva a escribir
nuevaTareaInput.addEventListener("input", () => {
  if (nuevaTareaInput.value.trim() !== "") {
    errorFeedbackEl.classList.add("d-none");
    nuevaTareaInput.classList.remove("is-invalid");
  }
});

// Renderizar la lista inicial al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  renderTareas();
});
