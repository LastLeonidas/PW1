<template>
  <head>
    <link rel="stylesheet" href="src/assets/styles/styleDeletedAccount.css" />
    <title>Delete Account</title>
  </head>
  <section class="sectionCloseSesion">
    <div class="wrapper">
      <div class="logo-title">
        <div class="titleFarewell">
          <h1 class="farewellMessageOne">ACCOUNT DELETED</h1>
          <h2 class="farewellMessageSecond">SEE YOU AGAIN</h2>
        </div>

        <div class="buttonReturnHome">
          <button class="btnReturnHome" @:click="deleteUser()">
            Return to login page
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    async deleteUser() {
      await this.deleteUserAPI();

      this.$router.push({ name: "login" });
    },
    async deleteUserAPI() {
      const token = localStorage.getItem("token");
      try {
        await fetch("http://puigmal.salle.url.edu/api/v2/users/", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token + "",
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};

localStorage.setItem("token", null);
</script>
