<template>
  <link rel="stylesheet" href="src/assets/styles/styleCrearEvento.css" />

  <section class="body">
    <section class="seccionIzquierda">
      <section class="nombreEvento">
        <h2 class="textoNombreEvento">Nombre Evento:</h2>
        <input class="nombreEventoInput" type="text" placeholder="Texto" required />
      </section>
      <section class="localizacion">
        <h2 class="textoLocalizacion">Localización:</h2>
        <input class="localizacionInput" type="text" placeholder="Texto" required />
      </section>
      <section class="descripcion">
        <h2 class="textoDescripcion">Descripción:</h2>
        <input class="descripcionInput" type="text" placeholder="Texto" required />
      </section>
      <section class="fechaEvento">
        <h2 class="textoFecha">Fecha Evento:</h2>
        <input class="fechaEventoInput" type="date" placeholder="Texto" required />
      </section>
      <section class="url">
        <h2 class="textoUrl">URL Imagen:</h2>
        <input class="urlInput" type="url" placeholder="Texto" required />
      </section>
      <section class="boton">
        <button class="botonCrearEvento">Crear Evento</button>
      </section>
    </section>
    <section class="seccionDerecha">
      <img class="imagenAddEvent" src="src/assets/media/imagenes/crearEvento.png" alt="Imagen del Evento">
    </section>
  </section>
</template>