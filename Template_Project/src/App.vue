<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>

  <header>
    <section class="navbar">
      <a href="/"><img src="src/assets/media/imagenes/logoOpenEventsBlanco.svg" alt="Logo Open Events"></a>
      <nav>
        <ul class="nav_links">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/events">Events</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
        </ul>
      </nav>
      <RouterLink to="/login"><button class="btnHeader">LOGIN</button></RouterLink>
    </section>
  </header>

  <main>
    <RouterView></RouterView>
  </main>

  <footer class="footer">
    <section class="section-boxes">
      <div class="box-logo">
        <figure>
          <a href="/"><img src="src/assets/media/imagenes/logoOpenEventsBlanco.svg" alt="Logo Open Events"></a>
        </figure>
      </div>

      <div class="box-description">
        <h2>SOBRE NOSOTROS</h2>
        <p>Somos el grupo PWIA4, formado por: </p>
        <div class="members-list">
          <ul>
            <li>Alba Mayol</li>
            <li>Kevin Eljarrat</li>
            <li>Sandra Corral</li>
            <li>Leonard Sangrà</li>
          </ul>
        </div>
      </div>

      <div class="box-social-apps">
        <h2> SÍGUENOS</h2>
        <div class="socialApps-logos">

          <a href="https://twitter.com/lasallebcn?lang=es"> <font-awesome-icon icon="fa-brands fa-square-twitter" size="3x"/></a>
          <a href="https://www.facebook.com/LaSalleBCN"> <font-awesome-icon icon="fa-brands fa-square-facebook" size="3x"/></a>
          <a href="https://www.instagram.com/lasallebcn/"> <font-awesome-icon icon="fa-brands fa-square-instagram" size="3x"/></a>
          <a href="https://www.youtube.com/user/BesLaSalle"> <font-awesome-icon icon="fa-brands fa-square-youtube" size="3x"/></a>
        </div>
      </div>
    </section>

    <section>
      <div class="copyright">
        <small>&copy; 2022 <b>Open Events.</b> - All Rights Reserved.</small>
      </div>
    </section>

  </footer>

</template>