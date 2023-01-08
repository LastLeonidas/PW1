<template>
  <head>
    <link rel="stylesheet" href="src/assets/styles/styleCloseSesion.css" />
    <title>Close Sesion</title>
  </head>
  <section class="sectionCloseSesion">
    <div class="wrapper">
      <div class="logo-title">
        <div class="titleFarewell">
          <h1 class="farewellMessageOne">BYE</h1>
          <h2 class="farewellMessageSecond">SEE YOU SOON !</h2>
        </div>

        <div class="buttonReturnHome">
          <button class="btnReturnHome" @click="cerrarSesion">
            Return to login page
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import router from "../router";
export default {
  methods: {
    cerrarSesion() {
      localStorage.setItem("token", null);
      router.push("/login");
    },
  },
};
</script>
