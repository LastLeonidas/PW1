<template>
  <head>
    <link rel="stylesheet" href="src/assets/styles/styleRegister.css" />
    <title>Sign Up</title>
  </head>

  <section class="sectionRegister">
    <div class="wrapper">
      <div class="logo-title">
        <div class="title">REGISTER</div>
      </div>

      <div class="form-container">
        <div class="form-inner">
          <form class="register" id="form2">
            <div class="user-details">
              <div class="input-box">
                <span class="details">Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  v-model="name"
                />
              </div>

              <div class="input-box">
                <span class="details">Surname</span>
                <input
                  type="text"
                  placeholder="Enter your surname"
                  required
                  v-model="surname"
                />
              </div>

              <div class="input-box">
                <span class="details">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  v-model="email"
                />
              </div>

              <div class="input-box">
                <span class="details">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  v-model="password"
                />
              </div>

              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  required
                  v-model="confirmPassword"
                />
              </div>

              <div class="input-box">
                <span class="details">Profile Picture</span>
                <input
                  type="url"
                  placeholder="Enter the url"
                  required
                  v-model="profilePicture"
                />
              </div>
            </div>
            <div class="buttonSubmitRegister">
              <input type="button" value="Register" @:click="register()" />
            </div>

            <div class="signIn-link">
              Already a member? <a href="/login">Login Now</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
      profilePicture: "",
    };
  },
  methods: {
    async register() {
      const newUser = {
        name: this.name,
        last_name: this.surname,
        email: this.email,
        password: this.password,
        image: this.profilePicture,
      };

      if (this.name === "" || this.surname === "" || this.email === "" || this.password === "" || this.profilePicture === "") {
        alert("Please complete all fields.");
      } else if (!this.isEmailValid(this.email)) {
        alert("Please enter a valid email.");
      } else if (this.password !== this.confirmPassword) {
        alert("Please the passwords must be the same.");
      } else if (this.password.length < 8) {
        alert("The email field must have at least 8 characters.");
      } else if (!this.isUrlValid(this.profilePicture)) {
        alert("Please enter a valid url.");
      } else {
        const resultado = await this.postUser(newUser);

        if (resultado) {
          this.$router.replace({ name: "login" });
        } else {
          alert("Failed to register with the API as the email entered already exists in the system. Please enter a different one.");
        }
      }
    },
    async postUser(newUser) {
      try {
        const token = sessionStorage.getItem("token");
        console.log(token);
        const response = await fetch(
          "http://puigmal.salle.url.edu/api/v2/users",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          }
        );
        return response.status !== 400;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    isEmailValid(email) {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return emailRegex.test(email);
    },
    isUrlValid(url) {
      const urlRegex =
        /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
      return urlRegex.test(url);
    },
  },
};
</script>
