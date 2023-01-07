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
          <!-- <form action="#" class="register" id="form"> -->
          <form class="register" id="form2">
            <div class="user-details">
              <div class="input-box">
                <span class="details">Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  id="name"
                />
              </div>

              <div class="input-box">
                <span class="details">Surname</span>
                <input
                  type="text"
                  placeholder="Enter your surname"
                  required
                  id="surname"
                />
              </div>

              <div class="input-box">
                <span class="details">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  id="email"
                />
              </div>

              <div class="input-box">
                <span class="details">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  id="password"
                />
              </div>

              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  required
                  id="confirmPassword"
                />
              </div>

              <div class="input-box">
                <span class="details">Profile Picture</span>
                <input
                  type="url"
                  placeholder="Enter the url"
                  required
                  id="profilePicture"
                />
              </div>
            </div>
            <div class="buttonSubmitRegister">
              <input type="button" value="Register" @:click="mostrarInputs()" />
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
  methods: {
    async mostrarInputs() {
      let name = document.getElementById("name").value;
      let surname = document.getElementById("surname").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let confirmPassword = document.getElementById("confirmPassword").value;
      let profilePicture = document.getElementById("profilePicture").value;

      const newUser = {
        name: name,
        last_name: surname,
        email: email,
        password: password,
        image: profilePicture,
      };

      if (name === "" || surname === "" || email === "" || password === "" || profilePicture === "") {
        alert("Please complete all fields.");
      } else if (!this.isEmailValid(email)) {
        alert("Please enter a valid email.");
      } else if (password !== confirmPassword) {
        alert("Please the passwords must be the same.");
      } else if (password.length < 8) {
        alert("The email field must have at least 8 characters.");
      } else if (!this.isUrlValid(profilePicture)) {
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
