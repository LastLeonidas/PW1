<template>
  <link rel="stylesheet" href="src/assets/styles/styleUsuarioHome.css" />

  <section class="body">
    <section class="arriba">
      <section class="opcionesArriba">
        <img src="src/assets/images/charla.png" width="150px" alt="Logo Charla">
        <h2>Chat</h2>
      </section>
      <section class="opcionesArriba">
        <img src="src/assets/images/usuario-de-perfil.png" width="150px" alt="Logo Perfil Usuario">
        <h2>Profile</h2>
      </section>
      <section class="opcionesArriba">
        <img src="src/assets/images/amigos.png" width="150px" alt="Logo Amigos">
        <h2>Friends</h2>
      </section>
    </section>
    <section class="abajo">
      <section class="opcionesAbajo">
        <img src="src/assets/images/cerrar-sesion.png" width="150px" alt="Logo Cerrar Sesion">
        <h2>Close Session</h2>
      </section>
      <section class="opcionesAbajo">
        <img src="src/assets/images/eliminar-cuenta.png" width="150px" alt="Logo Eliminar Cuenta">
        <h2>Delete Account</h2>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: "UsuarioHome",
};
</script>

<style scoped></style>
