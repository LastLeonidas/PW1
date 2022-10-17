<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="src/assets/styles/styleRegister.css">
    <title>Sign Up</title>
  </head>
  <body>
  <header>
  </header>
  <main>
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
            <div class="button">
              <input type="submit" value="Register">
            </div>

            <div class="signIn-link">Already a member? <a href="/login">Login Now</a></div>

          </form>
        </div>
      </div>
    </div>
  </main>
  <footer>
  </footer>
  </body>
</template>