<template>
  <section class="body">
    <section class="seccionIzquierda">
      <form onsubmit="return false;">
        <div class="nombre">
          <p class="textoNombre">Name:</p>
          <input
            v-model="nombre"
            class="nombreInput"
            type="text"
            placeholder="Add here"
            required
          />
        </div>
        <div class="localizacion">
          <p class="textoLocalizacion">Location:</p>
          <input
            v-model="localizacion"
            class="localizacionInput"
            type="text"
            placeholder="Add here"
            required
          />
        </div>
        <div class="latitud">
          <p class="textoLatitud">Latitude:</p>
          <input
            v-model="latitud"
            class="latitudInput"
            type="text"
            placeholder="Add here"
          />
        </div>
        <div class="longitud">
          <p class="textoLongitud">Longitude:</p>
          <input
            v-model="longitud"
            class="longitudInput"
            type="text"
            placeholder="Add here"
          />
        </div>
        <div class="descripcion">
          <p class="textoDescripcion">Description:</p>
          <textarea
            v-model="descripcion"
            class="descripcionInput"
            placeholder="Add here"
            required
          />
        </div>
        <div class="fechaInicio">
          <p class="textoInicioFecha">Start Date:</p>
          <input
            v-model="fechaInicio"
            class="fechaInicioInput"
            type="date"
            placeholder="Add here"
            required
          />
        </div>
        <div class="fechaFinal">
          <p class="textoFinalFecha">End Date:</p>
          <input
            v-model="fechaFinal"
            class="fechaFinalInput"
            type="date"
            placeholder="Add here"
            required
          />
        </div>
        <div class="participantes">
          <p class="textoParticipantes">Participants:</p>
          <input
            v-model="numParticipantes"
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
            v-model="tipo"
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
            v-model="imagen"
          />
        </div>
        <div class="boton">
          <button class="botonCrearEvento" @:click="crearDatosEvento()">
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
  data() {
    return {
      nombre: "",
      imagen: "",
      descripcion: "",
      localizacion: "",
      latitud: "",
      longitud: "",
      fechaInicio: "",
      fechaFinal: "",
      numParticipantes: "",
      tipo: "",
      flagLatitud: false,
      flagLongitud: false,
    };
  },
  methods: {
    crearDatosEvento() {
      let evento = {
        name: this.nombre,
        image: this.imagen,
        location: this.localizacion,
        latitude: null,
        longitude: null,
        description: this.descripcion,
        eventStart_date: this.fechaInicio,
        eventEnd_date: this.fechaFinal,
        n_participators: this.numParticipantes,
        type: this.tipo,
      };

      if (this.latitud !== "") {
        evento.latitude = this.latitud;
        this.flagLatitud = true;
      }

      if (this.longitud !== "") {
        evento.longitude = this.longitud;
        this.flagLongitud = true;
      }
      this.checkData(evento);
    },
    async postEvent(event) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://puigmal.salle.url.edu/api/v2/events",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token + "",
            },
            body: JSON.stringify(event),
          }
        );
        return response.status !== 400;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async checkData(event) {
      if (this.flagLatitud && this.flagLongitud) {
        if (this.nombre === "" || this.imagen === "" || this.description === "" || this.localizacion === "" || this.longitud === "" || this.latitud === "" || this.fechaInicio === "" || this.fechaFinal === "" || this.numParticipantes === "" || this.tipo === "") {
          alert("Please complete all fields.");
        } else {
          if (!this.isFloat(event.latitude)) {
            alert("The entered latitude value is invalid. Must be a float.");
          } else if (!this.isFloat(event.longitude)) {
            alert("The entered longitud value is invalid. must be a float.");
          } else if (
            !this.isDateAfter(event.eventEnd_date, event.eventStart_date)
          ) {
            alert("Error: The end date is earlier than the start date.");
          } else if (!this.isUrlValid(event.image)) {
            alert("Please enter a valid url.");
          } else {
            const response = await this.postEvent(event);

            if (response) {
              this.$router.replace({ name: "eventslist" });
            }
          }
        }
      } else {
        if (this.nombre === "" || this.imagen === "" || this.description === "" || this.localizacion === "" || this.fechaInicio === "" || this.fechaFinal === "" || this.numParticipantes === "" || this.tipo === "") {
          alert("Please complete all fields.");
        } else {
          if (!this.isDateAfter(event.eventEnd_date, event.eventStart_date)) {
            alert("Error: The end date is earlier than the start date.");
          } else if (!this.isUrlValid(event.image)) {
            alert("Please enter a valid url.");
          } else {
            const response = await this.postEvent(event);

            if (response) {
              this.$router.replace({ name: "eventslist" });
            }
          }
        }
      }
    },
    isFloat(value) {
      //Usa una expresión regular para comprobar si la cadena es un número flotante con un punto
      return /^[+-]?\d+(\.\d+)?$/.test(value);
    },
    isDateAfter(date1, date2) {
      return Date.parse(date1) > Date.parse(date2);
    },
    isUrlValid(url) {
      const urlRegex =
        /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
      return urlRegex.test(url);
    },
  },
};
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
