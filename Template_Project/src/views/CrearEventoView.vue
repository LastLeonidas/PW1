<template>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@600&display=swap');

.body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 95vh;
}

.seccionDerecha {
  width: 50vw;
  height: 95vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.imagenAddEvent {
  width: 45vw;
  height: 90vh;
  object-fit: cover;
}

.seccionIzquierda {
  width: 50vw;
  display: flex;
  flex-direction: column;
}

.nombreEvento {
  display: flex;
  flex-direction: row;
}

.nombreEventoInput {
  margin: 20px;
}

.localizacion {
  display: flex;
  flex-direction: row;
}

.textoLocalizacion, .textoDescripcion, .textoFecha, .textoUrl, .textoBoton, .textoNombreEvento {
  padding-left: 25px;
  font-size: 20px;
  font-family: 'Oswald', sans-serif;
}

.localizacionInput {
  margin: 20px;
  width: 20vh;
}

.descripcion {
  display: flex;
  flex-direction: row;
}

.descripcionInput {
  height: 8vh;
  margin: 20px;
  width: 25vh;
}

.fechaEvento {
  display: flex;
  flex-direction: row;
}

.fechaEventoInput {
  margin: 20px;
  width: 20vh;
}

.url {
  display: flex;
  flex-direction: row;
}

.urlInput {
  margin: 20px;
  width: 20vh;
}

.boton {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
}

.botonCrearEvento {
  background-color: #BB1C3C;
  border-radius: 15px;
  width: 10vw;
  height: 5vh;
  border-style: hidden;
  font-size: 15px;
  font-family: 'Oswald', sans-serif;
}

@media screen and (max-width: 700px) {
  .imagenAddEvent {
    visibility: hidden;
  }

  .botonCrearEvento {
    background-color: #BB1C3C;
    border-radius: 15px;
    width: 20vw;
    height: 5vh;
    border-style: hidden;
    font-size: 15px;
    font-family: 'Oswald', sans-serif;
  }
}
</style>