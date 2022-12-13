<template>
  <section class="body">
    <section class="seccionIzquierda">
      <form onsubmit="return false;">
        <div class="nombre">
          <p class="textoNombre">Name:</p>
          <input
            id="nombre"
            class="nombreInput"
            type="text"
            placeholder="Add here"
            required
          />
        </div>
        <div class="localizacion">
          <p class="textoLocalizacion">Location:</p>
          <input
            id="localizacion"
            class="localizacionInput"
            type="text"
            placeholder="Add here"
            required
          />
        </div>
        <div class="latitud">
          <p class="textoLatitud">Latitude:</p>
          <input
            id="latitud"
            class="latitudInput"
            type="text"
            placeholder="Add here"
          />
        </div>
        <div class="longitud">
          <p class="textoLongitud">Longitude:</p>
          <input
            id="longitud"
            class="longitudInput"
            type="text"
            placeholder="Add here"
          />
        </div>
        <div class="descripcion">
          <p class="textoDescripcion">Description:</p>
          <textarea
            id="descripcion"
            class="descripcionInput"
            placeholder="Add here"
            required
          />
        </div>
        <div class="fechaInicio">
          <p class="textoInicioFecha">Start Date:</p>
          <input
            id="fechaInicio"
            class="fechaInicioInput"
            type="date"
            placeholder="Add here"
            required
          />
        </div>
        <div class="fechaFinal">
          <p class="textoFinalFecha">End Date:</p>
          <input
            id="fechaFinal"
            class="fechaFinalInput"
            type="date"
            placeholder="Add here"
            required
          />
        </div>
        <div class="participantes">
          <p class="textoParticipantes">Participants:</p>
          <input
            id="participantes"
            class="participantesInput"
            type="number"
            placeholder="Add here"
            min="1"
            required
          />
        </div>
        <div class="tipo">
          <p class="textoTipo">Type:</p>
          <input
            id="tipo"
            class="tipoInput"
            type="text"
            placeholder="Add here"
            required
          />
        </div>
        <div class="url">
          <p class="textoUrl">image:</p>
          <input
            class="urlInput"
            type="url"
            placeholder="Add here"
            required
            id="urlImagen"
          />
        </div>
        <div class="boton">
          <button class="botonCrearEvento" @:click="mostrarInputs">
            Create Event
          </button>
        </div>
      </form>
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

<script>
export default {
  methods: {
    mostrarInputs() {
      let nombre = document.getElementById("nombre").value;
      let imagen = document.getElementById("urlImagen").value;
      let localizacion = document.getElementById("localizacion").value;
      let latitud = document.getElementById("latitud").value;
      let longitud = document.getElementById("longitud").value;
      let descripcion = document.getElementById("descripcion").value;
      let fechaInicio = document.getElementById("fechaInicio").value;
      let fechaFinal = document.getElementById("fechaFinal").value;
      let numParticipantes = document.getElementById("participantes").value;
      let tipo = document.getElementById("tipo").value;

      if (latitud !== "" && longitud !== "") {
        let evento = {
          name: nombre,
          image: imagen,
          location: localizacion,
          latitude: latitud,
          longitude: longitud,
          description: descripcion,
          eventStart_date: fechaInicio,
          eventEnd_date: fechaFinal,
          n_participators: numParticipantes,
          type: tipo,
        };
        postEvent(evento);
      } else {
        if (latitud === "" && longitud === "") {
          let evento = {
            name: nombre,
            image: imagen,
            location: localizacion,
            description: descripcion,
            eventStart_date: fechaInicio,
            eventEnd_date: fechaFinal,
            n_participators: numParticipantes,
            type: tipo,
          };
          postEvent(evento);
        } else {
          if (latitud === "") {
            let evento = {
              name: nombre,
              image: imagen,
              location: localizacion,
              longitude: longitud,
              description: descripcion,
              eventStart_date: fechaInicio,
              eventEnd_date: fechaFinal,
              n_participators: numParticipantes,
              type: tipo,
            };
            postEvent(evento);
          } else {
            let evento = {
              name: nombre,
              image: imagen,
              location: localizacion,
              latitude: latitud,
              description: descripcion,
              eventStart_date: fechaInicio,
              eventEnd_date: fechaFinal,
              n_participators: numParticipantes,
              type: tipo,
            };
            postEvent(evento);
          }
        }
      }
    },
  },
};

async function postEvent(event) {
  const response = await fetch("http://puigmal.salle.url.edu/api/v2/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ODcwLCJuYW1lIjoiS2V2aW4iLCJsYXN0X25hbWUiOiJFbGphcnJhdCBPaGF5b24iLCJlbWFpbCI6ImtldmluLmVsamFycmF0QHN0dWRlbnRzLnNhbGxlLnVybC5lZHUiLCJpbWFnZSI6Imh0dHBzOi8vaS5pbWd1ci5jb20vRDc5dXVIUi5wbmclMjIifQ.1z-iQKwX22ukATnGU7I7hsZ1MWgAvvHmXmhn3I35rD4",
    },
    body: JSON.stringify(event),
  });
  const responseText = await response.text();
  console.log(responseText); // logs 'OK'
}
</script>

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

.nombre {
  display: flex;
  flex-direction: row;
}

.nombreInput {
  margin: 20px;
  width: 20vh;
}

.localizacion {
  display: flex;
  flex-direction: row;
}

.localizacionInput {
  margin: 20px;
  width: 20vh;
}

.latitud {
  display: flex;
  flex-direction: row;
}

.latitudInput {
  margin: 20px;
  width: 20vh;
}

.longitud {
  display: flex;
  flex-direction: row;
}

.longitudInput {
  margin: 20px;
  width: 20vh;
}

.textoLocalizacion,
.textoDescripcion,
.textoInicioFecha,
.textoFinalFecha,
.textoUrl,
.textoNombre,
.textoLongitud,
.textoLatitud,
.textoParticipantes,
.textoTipo {
  padding-left: 30px;
  padding-top: 10px;
  font-size: 20px;
  font-family: "Oswald", sans-serif;
}

.descripcion {
  display: flex;
  flex-direction: row;
}

.descripcionInput {
  margin: 20px;
  width: 25vh;
}

.fechaInicio {
  display: flex;
  flex-direction: row;
}

.fechaInicioInput {
  margin: 20px;
  width: 20vh;
}

.fechaFinal {
  display: flex;
  flex-direction: row;
}

.fechaFinalInput {
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

.participantes {
  display: flex;
  flex-direction: row;
}

.participantesInput {
  margin: 20px;
  width: 20vh;
}

.tipo {
  display: flex;
  flex-direction: row;
}

.tipoInput {
  margin: 20px;
  width: 20vh;
}

.boton {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
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
