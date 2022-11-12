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
          <form action="#" class="login">
            <div class="field">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div class="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div class="pass-link"><a href="#">Forgot password?</a></div>
            <div class="field">
              <a href="/usuarioHome">
                <input type="submit" value="Login" id="buttonlogin" />
              </a>
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
