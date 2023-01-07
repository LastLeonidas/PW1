<template>
  <section class="body">
    <section class="arriba">
      <div class="opcionesArriba">
        <a href="/messageUsers">
          <img
            class="imagenesIconos"
            src="../assets/media/imagenes/charla.png"
            alt="Logo Charla"
          />
        </a>
        <p class="nombreSecciones">Chat</p>
      </div>
      <div class="opcionesArriba">
        <a href="/profileuser">
          <img
            class="imagenesIconos"
            src="../assets/media/imagenes/usuario-de-perfil.png"
            alt="Logo Perfil Usuario"
          />
        </a>
        <p class="nombreSecciones">Profile</p>
      </div>
      <div class="opcionesArriba">
        <a href="/friends">
          <img
            class="imagenesIconos"
            src="../assets/media/imagenes/amigos.png"
            alt="Logo Amigos"
          />
        </a>
        <p class="nombreSecciones">Friends</p>
      </div>
    </section>
    <section class="abajo">
      <div class="opcionesAbajo">
        <a href="/closesesion">
          <img
            class="imagenesIconos"
            src="../assets/media/imagenes/cerrar-sesion.png"
            alt="Logo Cerrar Sesion"
          />
        </a>
        <p class="nombreSecciones">Close Session</p>
      </div>
      <div class="opcionesAbajo">
        <a href="/deleteaccount">
          <img
            class="imagenesIconos"
            src="../assets/media/imagenes/eliminar-cuenta.png"
            alt="Logo Eliminar Cuenta"
          />
        </a>
        <p class="nombreSecciones">Delete Account</p>
      </div>
    </section>
  </section>
</template>

<style scoped>
@import url("https://fonts.gooleapis.com/css2?family=League+Gothic&family=Oswald:wght@600&display=swap");

* {
  padding: 0;
  margin: 0;
}

.body {
  display: flex;
  flex-direction: column;
  height: 94vh;
}

.arriba {
  height: 47vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.opcionesArriba {
  background-color: #d9d9d9;
  height: 200px;
  width: 250px;
  border-radius: 15px;
  margin: 80px;
}

.abajo {
  height: 47vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.opcionesAbajo {
  background-color: #d9d9d9;
  height: 200px;
  width: 250px;
  border-radius: 15px;
  margin: 80px;
}

.imagenesIconos {
  margin: 20px;
  padding-left: 25px;
  width: 150px;
}

.nombreSecciones {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
}

@media screen and (max-width: 700px) {
  .body {
    display: flex;
    flex-direction: row;
    height: 96vh;
  }
  .arriba {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .opcionesArriba {
    background-color: #d9d9d9;
    height: 100px;
    width: 150px;
    border-radius: 15px;
  }

  .abajo {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .opcionesAbajo {
    background-color: #d9d9d9;
    height: 100px;
    width: 150px;
    border-radius: 15px;
  }

  .imagenesIconos {
    width: 50px;
    padding-left: 25px;
  }
}
</style>
