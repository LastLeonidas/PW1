<template>
  <section class="body">
    <section class="seccionIzquierda">
      <div class="nombreEvento">
        <p class="textoNombreEvento">Nombre Evento:</p>
        <input
          class="nombreEventoInput"
          type="text"
          placeholder="Texto"
          required
        />
      </div>
      <div class="localizacion">
        <p class="textoLocalizacion">Localización:</p>
        <input
          class="localizacionInput"
          type="text"
          placeholder="Texto"
          required
        />
      </div>
      <div class="descripcion">
        <p class="textoDescripcion">Descripción:</p>
        <input
          class="descripcionInput"
          type="text"
          placeholder="Texto"
          required
        />
      </div>
      <div class="fechaEvento">
        <p class="textoFecha">Fecha Evento:</p>
        <input
          class="fechaEventoInput"
          type="date"
          placeholder="Texto"
          required
        />
      </div>
      <div class="url">
        <p class="textoUrl">URL Imagen:</p>
        <input class="urlInput" type="url" placeholder="Texto" required />
      </div>
      <div class="boton">
        <button class="botonCrearEvento">Crear Evento</button>
      </div>
    </section>
    <section class="seccionDerecha">
      <img
        class="imagenAddEvent"
        src="src/assets/media/imagenes/crearEvento.png"
        alt="Imagen del Evento"
      />
    </section>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@600&display=swap");

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
  padding-top: 10px;
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

.textoLocalizacion,
.textoDescripcion,
.textoFecha,
.textoUrl,
.textoNombreEvento {
  padding-left: 25px;
  padding-top: 10px;
  font-size: 20px;
  font-family: "Oswald", sans-serif;
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
  background-color: #bb1c3c;
  border-radius: 15px;
  width: 10vw;
  height: 5vh;
  border-style: hidden;
  font-size: 15px;
  font-family: "Oswald", sans-serif;
}

@media screen and (max-width: 700px) {
  .imagenAddEvent {
    visibility: hidden;
  }

  .botonCrearEvento {
    background-color: #bb1c3c;
    border-radius: 15px;
    width: 20vw;
    height: 5vh;
    border-style: hidden;
    font-size: 15px;
    font-family: "Oswald", sans-serif;
  }
}
</style>
