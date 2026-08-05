# 📋 Desafío 5: Todo List - Control de Tareas Pendientes

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg)
![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3-7952B3.svg)
![Estado](https://img.shields.io/badge/Estado-Completado-success.svg)

Bienvenido a la solución profesional del **Desafío 5: Todo List**, desarrollado para la academia **Desafío Latam** en el módulo de **Métodos de los Arreglos en JavaScript**.

Esta aplicación web interactiva permite gestionar tareas pendientes y realizadas en tiempo real mediante manipulación avanzada del DOM y métodos integrados de arreglos (`push`, `splice`, `findIndex`, `find`, `filter`, `forEach`).

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Maquetación semántica y accesible.
- **CSS3 / Vanilla CSS**: Customización estética, estados visuales (tareas tachadas), animaciones y feedback al usuario.
- **Bootstrap 5.3 (CDN)**: Sistema de rejilla responsive (`grid`), componentes de tarjetas (`card`), tablas e inputs integrados.
- **JavaScript (ES6+)**: Lógica funcional con arreglos de objetos, funciones flecha, interpolación de cadenas y renderizado reactivo del DOM.
- **FontAwesome 6 (CDN)**: Iconografía moderna e intuitiva para los botones de acción.

---

## 📂 Estructura del Proyecto

```text
todolist/
├── index.html            # Maquetación HTML5 principal con componentes Bootstrap 5
├── assets/
│   ├── css/
│   │   └── style.css     # Estilos visuales personalizados y feedback de tareas
│   └── js/
│       └── script.js     # Lógica JavaScript (Arreglos, Eventos y Renderizado DOM)
└── README.md             # Documentación técnica del proyecto
```

---


## 🔗 Enlaces

- Repositorio
  - https://github.com/vn-vrgs/todoList.git

- Desplegar
  - https://vn-vrgs.github.io/todoList/


---


## 📋 Lista de Requerimientos y Cumplimiento

A continuación se detalla el cumplimiento exacto de los requerimientos evaluados en la pauta del desafío:

### 1. Agregar Nuevas Tareas (2 Puntos)
- **Implementación**: La función `agregarTarea()` valida que el input no esté vacío, crea un nuevo objeto tarea con estructura `{ id, descripcion, realizada: false }` y lo inserta al final del arreglo mediante el método **`.push()`**.


### 2. Borrar una Tarea (2 Puntos)
- **Implementación**: La función `borrarTarea(id)` recibe el identificador de la tarea, busca su ubicación exacta dentro del arreglo utilizando **`.findIndex()`** y la remueve permanentemente con **`.splice(index, 1)`**, refrescando la interfaz inmediatamente.


### 3. Contar el Total de Tareas (2 Puntos)
- **Implementación**: El contador de "Total de Tareas" en el panel izquierdo de resumen se mantiene sincronizado leyendo la propiedad **`tareas.length`** tras cualquier inserción o eliminación.


### 4. Marcar Tarea como Completada (2 Puntos)
- **Implementación**: Al interactuar con el checkbox de cada fila, se ejecuta `toggleEstadoTarea(id)`, la cual localiza el objeto en el arreglo mediante **`.find()`** e invierte su propiedad booleana `realizada`. Visualmente, la tarea aplica la clase CSS `.tarea-completada` (`text-decoration: line-through`) y un fondo tenuemente resaltado.


### 5. Contar Total de Tareas Realizadas (1 Punto)
- **Implementación**: El contador de "Realizadas" se calcula dinámicamente utilizando el método **`.filter()`** para obtener las tareas cuyo estado `realizada` sea `true` y midiendo la longitud del subarreglo resultante.


### 6. Carga Inicial de al menos 3 Tareas (1 Punto)
- **Implementación**: El script incluye un estado inicial con 3 tareas por defecto. Al cargar la página, se ejecuta `renderTareas()`, el cual recorre el arreglo con **`.forEach()`** e inserta las filas en el elemento `<tbody>`.
  

---

## 🚀 Instalación y Ejecución Local

No se requieren dependencias externas ni compiladores para ejecutar la aplicación.

1. Clona o descarga la carpeta del proyecto en tu equipo local.
2. Abre el archivo [`index.html`](file:///c:/App/Latam/FullStack-Js/Modulo3/sem05-Metodos/codigos/index.html) directamente en cualquier navegador web moderno (Google Chrome, Firefox, Microsoft Edge, Safari).
3. Alternativamente, utiliza extensiones como **Live Server** de VS Code para servir la aplicación en un entorno de desarrollo local.

---

## 👨‍💻 Autor

- **Desarrollado para**: Academia Desafío Latam
- **Módulo**: Módulo 3 - Métodos de los Arreglos
- **Desafío**: Desafío 5 - Todo List
