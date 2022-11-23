<template>
  <section class="body">
    <section class="seccionIzquierda">
      <div class="box">
        <div>
          <p class="TituloAddFriend">Find your next event companion</p>
        </div>
        <div class="searchBar">
          <input class="inputAddFriend" type="text" placeholder="Username" />
        </div>
      </div>
    </section>
    <div class="seccionDerecha">
      <img
        class="imagenAddFriend"
        src="../assets/media/imagenes/imagenAmigos.jpeg"
        alt="Imagen Fiesta"
        width="480"
      />
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.gooleapis.com/css2?family=League+Gothic&family=Oswald:wght@600&display=swap");

.body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 95vh;
}

.seccionDerecha {
  width: 50vw;
  height: 95vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.imagenAddFriend {
  width: 45vw;
  height: 90vh;
  object-fit: cover;
}

.seccionIzquierda {
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.box {
  height: 15vw;
  width: 22vw;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
}

.TituloAddFriend {
  color: #bb1c3c;
  font-size: 35px;
  font-weight: bold;
  font-family: "Oswald", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.searchBar {
  background-color: #d9d9d9;
  width: 280px;
  height: 25px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  margin-top: 35px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  background-position-y: center;
  padding: 9px 2px 9px 30px;
}

.searchBar > .inputAddFriend {
  flex: 1;
  height: 20px;
  padding-left: 10px;
  border: none;
  outline: none;
  font-size: 16px;
}

.inputAddFriend {
  background-color: #d9d9d9;
}

::placeholder {
  color: #f4f4f4;
}

@media screen and (max-width: 700px) {
  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 96vh;
  }

  .seccionDerecha {
    width: 55vw;
    height: 48vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .TituloAddFriend {
    color: #bb1c3c;
    font-size: 25px;
    font-weight: bold;
    font-family: "Oswald", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 55vw;
  }

  .imagenAddFriend {
    width: 55vw;
    height: 50vh;
    object-fit: cover;
  }

  .seccionIzquierda {
    width: 55vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .box {
    height: 15vw;
    width: 22vw;
    object-fit: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 700px) and (min-width: 600px) {
  .searchBar {
    background-color: #d9d9d9;
    width: 370px;
    height: 25px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .imagenAddFriend {
    width: 65vw;
    height: 50vh;
    object-fit: cover;
  }
}
</style>
