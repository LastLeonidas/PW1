<template>
  <Link rel="stylesheet" href="src/assets/styles/amigos.css"/>
  <!-- cuando se entre a esta view (botón) se hará una petición a la API -> name attribute
  id is used to uniquely identify an HTML element. Ideally, an id should only identify one (and only one) HTML element across your entire document.

  class is (mostly) used to specify what CSS class(es) an element should have.

  name is (mostly) used to identify elements in a form.
  -->
  <section class="body">
    <section class="top">
      <section class="search">
        <h2>Friends: </h2>
        <div class="searchBox">
          <input type="text">
        </div>
      </section>
        <div class="buttonDiv">
          <button type="button">Add friend</button>
        </div>
    </section>

    <section class="recyclerView">
        <ul class="friendsList">
          <li><div class="amigo">
            <router-link to="/about">
              <button class="amigo1" type="button">
                <img src="../assets/media/imagenes/darder.png">
                <h2>amigo1</h2>
              </button>
            </router-link>
          </div></li>
          <li><div class="amigo">
            <router-link to="/about">
              <button class="amigo1" type="button">
                <img src="../assets/media/imagenes/puado.jpg">
                <h2>amigo1</h2>
              </button>
            </router-link>
          </div></li>
          <li><div class="amigo">
            <router-link to="/about">
              <button class="amigo1" type="button">
                <img src="../assets/media/imagenes/melamed.jpg">
                <h2>amigo1</h2>
              </button>
            </router-link>
          </div></li>
          <li><div class="amigo">
            <router-link to="/about">
              <button class="amigo1" type="button">
                <img src="../assets/media/imagenes/souza.png">
                <h2>amigo1</h2>
              </button>
            </router-link>
          </div></li>
          <li><div class="amigo">
            <router-link to="/about">
              <button class="amigo1" type="button">
                <img src="../assets/media/imagenes/cabrera.png">
                <h2>amigo1</h2>
              </button>
            </router-link>
          </div></li>
          <li><div class="amigo">
            <router-link to="/about">
              <button class="amigo1" type="button">
                <img src="../assets/media/imagenes/keidibarepng.png">
                <h2>amigo1</h2>
              </button>
            </router-link>
          </div></li>
          <li><div class="amigo">
            <router-link to="/about">
              <button class="amigo1" type="button">
                <img src="../assets/media/imagenes/joselu.png">
                <h2>amigo1</h2>
              </button>
            </router-link>
          </div></li>
          <li><div class="amigo">
            <router-link to="/about">
              <button class="amigo1" type="button">
                <img src="../assets/media/imagenes/calero.png">
                <h2>amigo1</h2>
              </button>
            </router-link>
          </div></li>
          <li><div class="amigo">
            <router-link to="/about">
              <button class="amigo1" type="button">
                <img src="../assets/media/imagenes/oscarGil.png">
                <h2>amigo1</h2>
              </button>
            </router-link>
          </div></li>
        </ul>
    </section>
  </section>
</template>


<script>
export default {
  name: "AmigosView"
}
</script>

<style scoped></style>