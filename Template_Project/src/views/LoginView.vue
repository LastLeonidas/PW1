<template>
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="src/assets/Styles/styleLogin.css" />
    <title>Login</title>
  </head>
  <body>
    <header></header>
    <main>
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
                <input type="submit" value="Login" id="buttonlogin" />
              </div>
              <div class="signup-link">
                Not a Member?
                <a href="/register">Signup Now</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    <footer></footer>
  </body>
</template>
