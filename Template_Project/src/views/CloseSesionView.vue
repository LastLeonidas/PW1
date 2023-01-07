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
          <RouterLink to="/login"
            ><button class="btnReturnHome">
              Return to login page
            </button></RouterLink
          >>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
localStorage.setItem("token", null);
console.log(localStorage.getItem("token"));

window.addEventListener("popstate", function () {
  if (localStorage.getItem("token") === null) {
    this.$route.push({ path: "/login" });
  }
});
</script>
