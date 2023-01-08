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
          <form id="form">
            <div class="field">
              <input
                type="text"
                placeholder="Email Address"
                v-model="email"
                required
              />
            </div>
            <div class="field">
              <input
                type="password"
                placeholder="Password"
                v-model="password"
                required
              />
            </div>
            <div class="field">
              <input
                class="buttonSubmitLogin"
                type="button"
                value="Login"
                @click="login()"
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
//leeooooo
import router from "../router";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const user = {
        email: this.email,
        password: this.password,
      };

      const resultado = await this.postUser(user);
      const { accessToken } = JSON.parse(resultado.response);
      localStorage.setItem("token", accessToken);

      if (resultado.success) {
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
