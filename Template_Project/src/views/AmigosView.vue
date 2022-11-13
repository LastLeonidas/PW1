<template>
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

<style scoped>
@import url('https://fonts.gooleapis.com/css2?family=League+Gothic&family=Oswald:wght@600&display=swap');

.body {
  background: #FBFBFB;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.top {
  height: 10vh;
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.search {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.search > .nameUser, .tituloAddFriends{
  font-family: 'Oswald', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 45px;
}

.nameUser {
  font-family: 'Oswald', sans-serif;
}

.searchBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 10vh;
  width: 20vw;
  margin-left: 5vh;
}

.searchBox > input {
  background-color: #D9D9D9;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E");
  background-position: 10px 10px;
  background-repeat: no-repeat;

  width: 260px;
  padding: 9px 4px 9px 40px;
  border-radius: 12px;
  border: hidden;
  outline: none !important;
  /*  Border is created inside the element,
      Outline is created outside the element.*/
}

.buttonDiv, a .buttonFriendsRequest {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 10vh;
  width: 10vw;
  padding-right: 115px;
  font-family: 'Oswald', sans-serif;
}

.buttonDiv > button {
  border: none;
  background: #BB1C3C;
  border-radius: 10px;
  color: white; /*color text*/
  height: 5vh;
  width: 10vw;
  font-family: 'Oswald', sans-serif;
}

.recyclerView {
  width: 85vw;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.friendsList {
  list-style-type: none;
  margin-right: 5vh;
}

.friendsList > .listUser {
  padding-bottom: 20px;
}

.amigo1 {
  background: #F4F4F4;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  line-height: 15px;

  border: none;
  width: 80vw;
}

.amigo1 > h4{
  font-family: 'Oswald', sans-serif;
}

.amigo1 > .imageUser {
  width: 8%;
  height: auto;
  margin-block: 4px;
  margin: 10px 2vh;
  border-radius: 80px;
}


@media screen and (max-width: 740px){
  .searchBox > input {
    background-color: #D9D9D9;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E");
    background-position: 10px 10px;
    background-repeat: no-repeat;

    width: 100px;
    padding: 9px 4px 9px 40px;
    border-radius: 12px;
    border: hidden;
    outline: none !important;
    /*  Border is created inside the element,
        Outline is created outside the element.*/
  }

  .buttonDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 10vh;
    width: 20vw;
    padding-left: 90px;
    font-family: 'Oswald', sans-serif;
  }

  .buttonDiv > button {
    border: none;
    background: #BB1C3C;
    border-radius: 10px;
    color: white; /*color text*/
    height: 5vh;
    width: 15vw;
  }

  .search > .nameUser {
    font-family: "Lucida Sans Unicode", serif ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 55px;
  }

}
</style>
