<template>
  <section class="sectionAbout">
    <div class="wrapper">
      <div class="container">
        <div class="contentAbout">

          <div class="box-description">
            <h1 class="tituloAbout">ABOUT US</h1>
            <p class="descripcionAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum, ex at maximus euismod, tellus mauris bibendum eros, ac maximus metus enim id mauris. Duis mattis dictum sollicitudin. Vestibulum a ultrices magna, id scelerisque orci. Cras sollicitudin luctus quam at ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam euismod, nibh a porta malesuada, nunc massa ultrices leo, sit amet elementum nisl libero et enim. Nulla sed odio et nunc aliquam vestibulum vitae non magna.
            </p>
          </div>

          <div class="members-list">
            <h2>Team Members:</h2>
            <ul>
              <li>Alba Mayol</li>
              <li>Kevin Eljarrat</li>
              <li>Sandra Corral</li>
              <li>Leonard Sangrà</li>
            </ul>
          </div>
        </div>

        <div class="imageAbout">
          <img src="src/assets/media/imagenes/FotoAbout.png" alt="Imagen Sección About">
        </div>

      </div>
    </div>

  </section>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@600&display=swap');

.sectionAbout {
  width: 100%;
  min-height: 70vh;
  background-color: white;
}

.container {
  width: 80%;
  display: block;
  margin: auto;
  padding-top: 100px;
}

.contentAbout {
  float: left;
  width: 55%;
}

.imageAbout {
  float: right;
  width: 40%;
  padding-top: 50px;
}

.imageAbout img {
  width: 100%;
  height: auto;
}

.tituloAbout, .members-list {
  font-family: 'Oswald', sans-serif;
  padding-bottom: 15px;
  color: rgba(190,1,69,1);
}

.descripcionAbout {
  font-family: 'Montserrat', sans-serif;
  padding-bottom: 15px;
  text-align: justify;
}

.members-list ul {
  padding-top: 15px;
  font-family: 'Montserrat', sans-serif;
  color:black;
}

@media screen and (max-width: 800px) {
  .container {
    width: 80%;
    display: block;
    margin: auto;
    padding-top: 50px;
  }

  .contentAbout {
    float: none;
    width: 100%;
    display: block;
    margin: auto;
  }

  .imageAbout {
    float: none;
    width: 100%;
    display: block;
    margin: auto;
  }
}
</style>
