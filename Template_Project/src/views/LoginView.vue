<template>
  <head>
    <link rel="stylesheet" href="src/assets/styles/styleLogin.css" />
    <title>Login</title>
  </head>
  <section class="sectionLogin">
    <div class="wrapper">
      <div class="logo-title">
        <div class="title login">LOGIN</div>
      </div>
      <div class="form-container">
        <div class="form-inner">
          <!-- <form action="#" class="login" onsubmit="return false;"> -->
          <form id="form">
            <div class="field">
              <input
                type="text"
                placeholder="Email Address"
                id="email"
                required
              />
            </div>
            <div class="field">
              <input
                type="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>
            <div class="field">
              <input
                v-if="!this.sucess"
                class="buttonSubmitLogin"
                type="button"
                value="Login"
                id="buttonlogin"
                @click="getInputs()"
              />
            </div>
            <div class="signup-link">
              Not a Member?
              <a href="/register">Signup Now</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
console.log(localStorage.getItem("token"));
import router from "../router";

export default {
  data() {
    return {
      sucess: null,
      response: null,
    };
  },
  methods: {
    async getInputs() {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const user = {
        email,
        password,
      };

      const resultado = await this.postUser(user);
      this.sucess = resultado.success;
      this.response = JSON.parse(resultado.response);
      this.response = this.response.accessToken;
      console.log(this.response);

      localStorage.setItem("token", this.response);

      if (this.sucess) {
        await router.push({
          name: "usuarioHome",
        });
      } else {
        alert("The email and/or password field are incorrect.");
      }
    },
    async postUser(user) {
      try {
        const response = await fetch(
          "http://puigmal.salle.url.edu/api/v2/users/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );
        const responseText = await response.text();
        console.log(responseText);
        if (response.status === 200 || response.status === 201) {
          return { success: true, response: responseText };
        } else {
          return { success: false, response: responseText };
        }
      } catch (error) {
        console.log(error);
        return { success: false, error: error };
      }
    },
  },
};
</script>
