# CORTE · Biblioteca de películas

Lista personal de películas hecha con React y CSS. Permite agregar títulos, marcarlos como vistos, eliminarlos y consultar cuántos quedan por ver.

Este proyecto forma parte de mi práctica de React. La idea es reforzar cómo agregar, actualizar y eliminar objetos dentro de un array en el estado, y cómo calcular información a partir de esa lista sin crear estados adicionales.

## Funcionalidades

- Agregar una película con un id generado mediante `crypto.randomUUID()`.
- Limpiar el input después de agregar un título.
- Marcar y desmarcar películas como vistas.
- Cambiar el estilo y la etiqueta de las películas vistas.
- Eliminar películas por su id.
- Calcular automáticamente cuántas películas faltan por ver.
- Mostrar un mensaje cuando la lista está vacía.

La lista se mantiene en el estado de React y se pierde al recargar la página. No utiliza una base de datos ni almacenamiento local.

## Cómo funciona el contador

El contador se calcula con `filter` y `length`, tomando únicamente las películas con `estado: 0`. No tiene un estado propio.

- Marcar una película como vista reduce los pendientes.
- Desmarcarla vuelve a incluirla en el conteo.
- Eliminar una pendiente reduce el conteo.
- Eliminar una vista no cambia los pendientes.

## Qué practiqué

- Estado con `useState` e inputs controlados con `value` y `onChange`.
- Envío de formularios con `onSubmit` y `preventDefault()`.
- Spread para agregar un objeto a una lista nueva.
- `map` para actualizar una película conservando las demás.
- `filter` para eliminar películas y calcular pendientes.
- Lectura de `evento.target.checked` para actualizar el estado de una película.
- Funciones flecha en eventos para pasar un id sin ejecutar la función durante el renderizado.
- Renderizado de listas con `map` y claves `key` basadas en ids.
- Clases CSS y textos que cambian según el estado.

## Estructura

- `src/App.jsx`: contiene la interfaz, los estados y las funciones para agregar, marcar y eliminar películas.
- `src/index.css`: contiene los estilos.
- `src/main.jsx`: monta la aplicación.

Cada película tiene un `id`, un `nombre` y un `estado`: `0` para pendiente y `1` para vista.

## Detalles por mejorar

- Validar el título después de aplicar `trim()`. Actualmente se rechaza el campo vacío, pero una entrada hecha solo de espacios pasa la validación y se guarda como un título vacío.
- Conectar la prop `checked` del checkbox al estado de la película para que sea un campo controlado.

## Tecnologías

React, JavaScript, JSX, CSS y Vite. El proyecto también incluye ESLint para revisar el código.

## Ejecutar en local

Necesitas Node.js y npm instalados. Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abre la dirección que Vite muestre en la terminal.

## Otros comandos

```bash
npm run build    # Genera la versión de producción en dist
npm run preview  # Sirve localmente la versión generada
npm run lint     # Revisa el código con ESLint
```

Antes de usar `npm run preview`, ejecuta `npm run build`.
