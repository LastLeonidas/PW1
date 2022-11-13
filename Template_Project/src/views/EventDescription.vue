<template>
  <div class="container">
    <div class="background-event">
      <img
        class="background"
        src="https://imagenes.elpais.com/resizer/3GXN2nbQWqBh8zdIrzne4Ih67PE=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/DWKOFUG3LVCLXJLULKJ4YDACSM.jpg"
        alt=""
      />
    </div>
    <div class="owner-photo"></div>
    <div class="main-event">
      <h1>TITULO EVENT</h1>
      <div class="descriptionDiv">
        <p>Created by&nbsp;</p>
        <p class="owner">Name Owner</p>
        <p>.</p>
      </div>
      <div class="descriptionDiv">
        <p class="city">Barcelona</p>
        <p>,&nbsp;(</p>
        <p class="latitude">46.020</p>
        <p>&nbsp;,&nbsp;</p>
        <p class="longuitude">46.020</p>
        <p>)</p>
      </div>
      <p>Description:</p>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt  sagittis diam finibus bibendum. Mauris ornare justo imperdiet nunc eleifend, eget aliquet lectus aliquam. Proin nulla metus, tempus vitae  arcu pellentesque, mollis tristique metus. Nam sodales molestie  molestie. Praesent porta hendrerit ligula a iaculis. Pellentesque urna  velit, eleifend et massa sed, aliquet bibendum lectus. Vestibulum eget varius libero.<br /><br />
        Nam augue nisl, pellentesque ac tincidunt sed, rhoncus at arcu. Praesent  dapibus, odio at eleifend laoreet, velit risus convallis ligula, sit  amet consequat velit orci bibendum lorem. Proin lacinia dui ac tempus  aliquam. Vestibulum sagittis nibh sit amet nunc imperdiet, ac finibus ligula vulputate. Praesent auctor viverra volutpat. Vivamus fermentum justo est, vitae pharetra nisl porttitor et. Vivamus at neque vel lacus fringilla ultricies. Vestibulum lacinia tellus orci, et ultrices ante volutpat vitae. Praesent id nibh eu mauris fermentum luctus vel vestibulum ipsum. Nam sit amet euismod turpis. Vestibulum luctus arcu leo, a porta neque tristique ut. Mauris ut diam at turpis sodales cursus. Quisque ultricies odio at elit mattis faucibus.
      </p>
      <div class="datesDescription">
        <div class="descriptionDiv">
          <p>Start Date:&nbsp;</p>
          <p class="start">20 noviembre 2022</p>
        </div>
        <div class="descriptionDiv">
          <p>End Date:&nbsp;</p>
          <p class="start">21 noviembre 2022</p>
        </div>
      </div>
      <div class="descriptionDiv">
        <p>Participantes:&nbsp;</p>
        <p class="num">100</p>
      </div>
      <div class="descriptionDiv">
        <p>Tipo:&nbsp;</p>
        <p class="tipo">Music</p>
      </div>
      <button>JOIN</button>
    </div>
    <div class="comment-section">
      <h2>Comments</h2>
      <div class="comment-card">
        <div class="descriptionDiv">
          <h3 class="name_comment">Lucyna Kushinada &nbsp;&nbsp;</h3>
          <h4 class="puntuación">10</h4>
        </div>
        <p class="comment">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra
          ex est. Proin tempus lacus a augue feugiat, interdum pellentesque.
        </p>
      </div>
      <div class="comment-card">
        <div class="descriptionDiv">
          <h3 class="name_comment">Lucyna Kushinada &nbsp;&nbsp;</h3>
          <h4 class="puntuación">10</h4>
        </div>
        <p class="comment">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra
          ex est. Proin tempus lacus a augue feugiat, interdum pellentesque.
        </p>
      </div>
      <div class="make-comment">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDesciption",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@600&display=swap');

p,h2,h4 {
  margin: 5px;
}
.container {
  width: 800px;
  height: auto;
  margin: auto;
  margin-top: 20px;
}

.main-event {
  background: white;
}

.background {
  height: 400px;
  width: 800px;
  border-radius: 20px 20px 0 0;
}

.background-event {
  text-align: center;
}

.main-event h1 {
  font-size: 30px;
  margin-top: 30px;
  text-align: center;
}

.main-event button {
  width: 10vw;
  height: 5vh;
  display: block;
  color: white;
  font-size: 3vh;
  border-radius: 20vh;
  background: #bb1c3c;
  border-color: #bb1c3c;
  margin: auto;
}

.descriptionDiv {
  display: flex;
}
.comment {
  margin-top: 0;
}
.comment-section {
  width: min(90%, 1140px);
  margin: 3rem auto;
}
.comment-card {
  padding: 10px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  min-width: 100%;
  margin-top: 10px;
}

.comment-card h3, .comment-card h4,
.comment-card p {
  margin-bottom: 1rem;
  font-size: 20px;
  text-align: justify;
}
.comment-card h2 {
  margin-left: 0;
  margin-right: auto;
  font-size: 20px;
}

@media screen and (max-width: 420px) {
  .container {
    width: 300px;
    margin-top: 20px;
  }
  .background {
    height: 200px;
    width: 300px;
    border-radius: 20px 20px 0 0;
  }
  .main-event button {
    width: 100px;
    height: 40px;
    color: white;
    border-radius: 3vh;
    font-size: 15px;
  }
}
</style>
