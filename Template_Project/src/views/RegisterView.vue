<template>
  <head>
    <link rel="stylesheet" href="src/assets/styles/styleRegister.css">
    <title>Sign Up</title>
  </head>

  <section class="sectionRegister">
    <div class="wrapper">
      <div class="logo-title">
        <div class="title">REGISTER</div>
      </div>

      <div class="form-container">

        <div class="form-inner">

          <form action="#" class="register">
            <div class="user-details">

              <div class="input-box">
                <span class="details">Name</span>
                <input type="text" placeholder="Enter your name" required>
              </div>

              <div class="input-box">
                <span class="details">Surname</span>
                <input type="text" placeholder="Enter your surname" required>
              </div>

              <div class="input-box">
                <span class="details">Date of Birth</span>
                <input type="date" required>
              </div>

              <div class="input-box">
                <span class="details">Password</span>
                <input type="text" placeholder="Enter your password" required>
              </div>

              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input type="text" placeholder="Confirm your password" required>
              </div>

              <div class="input-box">
                <span class="details">Profile Picture</span>
                <input type="url" placeholder="Enter the url" required>
              </div>
            </div>
            <div class="buttonSubmitRegister">
              <a href="/usuarioHome">
                <input type="button" value="Register" />
              </a>
            </div>

            <div class="signIn-link">Already a member? <a href="/login">Login Now</a></div>

          </form>
        </div>
      </div>
    </div>
</section>
</template>