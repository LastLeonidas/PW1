<template>
  <Link rel="stylesheet" href="src/assets/styles/styleAmigos.css" />
  <!-- cuando se entre a esta view (botón) se hará una petición a la API -> name attribute
  id is used to uniquely identify an HTML element. Ideally, an id should only identify one (and only one) HTML element across your entire document.

  class is (mostly) used to specify what CSS class(es) an element should have.

  name is (mostly) used to identify elements in a form.
  -->
  <section class="body">
    <section class="top">
      <section class="search">
        <h2 class="tituloAddFriends">Friends:</h2>
        <div class="searchBox">
          <input type="text" />
        </div>
      </section>
      <div class="buttonDiv">
        <button class="buttonFriendsRequestSectionFriends" type="button" >Friends Request</button>
      </div>
      <div class="buttonDiv">
        <button class="buttonAddFriendsSectionFriends" type="button">Add friend</button>
      </div>
    </section>

    <section class="recyclerView">
      <ul class="friendsList">
        <li class="listUser">
          <div class="amigo">
            <router-link to="#">
              <button class="amigo1" type="button">
                <img class="imageUser" src="../assets/media/imagenes/darder.png" alt="Foto Jugador"/>
                <h2 class="nameUser">Amigo 1</h2>
              </button>
            </router-link>
          </div>
        </li>
        <li class="listUser">
          <div class="amigo">
            <router-link to="/#">
              <button class="amigo1" type="button">
                <img class="imageUser" src="../assets/media/imagenes/puado.jpg" alt="Foto Jugador"/>
                <h2 class="nameUser">Amigo 2</h2>
              </button>
            </router-link>
          </div>
        </li>
        <li class="listUser">
          <div class="amigo">
            <router-link to="/#">
              <button class="amigo1" type="button">
                <img class="imageUser" src="../assets/media/imagenes/melamed.jpg" alt="Foto Jugador"/>
                <h2 class="nameUser">Amigo 3</h2>
              </button>
            </router-link>
          </div>
        </li>
        <li class="listUser">
          <div class="amigo">
            <router-link to="/#">
              <button class="amigo1" type="button">
                <img class="imageUser" src="../assets/media/imagenes/souza.png" alt="Foto Jugador"/>
                <h2 class="nameUser">Amigo 4</h2>
              </button>
            </router-link>
          </div>
        </li>
        <li class="listUser">
          <div class="amigo">
            <router-link to="/#">
              <button class="amigo1" type="button">
                <img class="imageUser" src="../assets/media/imagenes/cabrera.png" alt="Foto Jugador"/>
                <h2 class="nameUser">Amigo 5</h2>
              </button>
            </router-link>
          </div>
        </li>
        <li class="listUser">
          <div class="amigo">
            <router-link to="/#">
              <button class="amigo1" type="button">
                <img class="imageUser" src="../assets/media/imagenes/keidibarepng.png" alt="Foto Jugador"/>
                <h2 class="nameUser">Amigo 6</h2>
              </button>
            </router-link>
          </div>
        </li>
        <li class="listUser">
          <div class="amigo">
            <router-link to="/#">
              <button class="amigo1" type="button">
                <img class="imageUser" src="../assets/media/imagenes/joselu.png" alt="Foto Jugador"/>
                <h2 class="nameUser">Amigo 7</h2>
              </button>
            </router-link>
          </div>
        </li>
        <li class="listUser">
          <div class="amigo">
            <router-link to="/#">
              <button class="amigo1" type="button">
                <img class="imageUser" src="../assets/media/imagenes/calero.png" alt="Foto Jugador"/>
                <h2 class="nameUser">Amigo 8</h2>
              </button>
            </router-link>
          </div>
        </li>
        <li class="listUser">
          <div class="amigo">
            <router-link to="/#">
              <button class="amigo1" type="button">
                <img
                  class="imageUser"
                  src="../assets/media/imagenes/oscarGil.png"
                  alt="Foto Jugador"
                />
                <h2 class="nameUser">Amigo 9</h2>
              </button>
            </router-link>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>
