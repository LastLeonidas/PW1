<template>
  <Link rel="stylesheet" href="src/assets/styles/styleRequestFriends.css" />
  <!-- cuando se entre a esta view (botón) se hará una petición a la API -> name attribute
  id is used to uniquely identify an HTML element. Ideally, an id should only identify one (and only one) HTML element across your entire document.

  class is (mostly) used to specify what CSS class(es) an element should have.

  name is (mostly) used to identify elements in a form.
  -->
  <section class="body">
    <section class="top">
      <section class="search">
        <h2 class="tituloSearchRequest">Search Request:</h2>
        <div class="searchBox">
          <input type="text" />
        </div>
      </section>
      <div class="buttonDiv">
        <button class="buttonAddFriendsSectionFriends" type="button">
          Add friend
        </button>
      </div>
    </section>

    <section class="recyclerView">
      <ul class="friendsList">
        <li class="listUser">
          <div class="amigo">
            <router-link to="#">
              <button class="amigo1" type="button">
                <img
                  class="imageUser"
                  src="../assets/media/imagenes/darder.png"
                  alt="Foto Jugador"
                />
                <h2 class="nameUser">Request 1</h2>
                <button class="buttonAcceptRequest" type="button">Accept</button>
                <button class="buttonDenyRequest" type="button">Deny</button>
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
                  src="../assets/media/imagenes/puado.jpg"
                  alt="Foto Jugador"
                />
                <h2 class="nameUser">Request 2</h2>
                <button class="buttonAcceptRequest" type="button">Accept</button>
                <button class="buttonDenyRequest" type="button">Deny</button>
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
                  src="../assets/media/imagenes/melamed.jpg"
                  alt="Foto Jugador"
                />
                <h2 class="nameUser">Request 3</h2>
                <button class="buttonAcceptRequest" type="button">Accept</button>
                <button class="buttonDenyRequest" type="button">Deny</button>
              </button>
            </router-link>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>
