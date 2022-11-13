<template>
    <div class="container">
      <div class="crearEvento">
        <button>Create Event</button>
      </div>
      <hr>
      <div class="event">
        <img src="https://highxtar.com/wp-content/uploads/2022/02/thumb-dua-lipa-balenciaga.jpg" alt="">
        <div class="infoEvent">
          <h2>Dua Lipa Concert</h2>
          <p>Place: Palau Sant Jordi</p>
          <p>Dates: Tuesday 4th October</p>
        </div>
        <a href="/eventsdescription">
          <button>Enter</button>
        </a>
      </div>
      <div class="event">
        <img src="https://highxtar.com/wp-content/uploads/2022/02/thumb-dua-lipa-balenciaga.jpg" alt="">
        <div class="infoEvent">
          <h2>Dua Lipa Concert</h2>
          <p>Place: Palau Sant Jordi</p>
          <p>Dates: Tuesday 4th October</p>
        </div>
        <a href="/eventsdescription">
          <button>Enter</button>
        </a>
      </div>
      <div class="event">
        <img src="https://highxtar.com/wp-content/uploads/2022/02/thumb-dua-lipa-balenciaga.jpg" alt="">
        <div class="infoEvent">
          <h2>Dua Lipa Concert</h2>
          <p>Place: Palau Sant Jordi</p>
          <p>Dates: Tuesday 4th October</p>
        </div>
        <a href="/eventsdescription">
          <button>Enter</button>
        </a>
      </div>
    </div>
    <!-- -->
</template>

<script>
export default {
  name: "EventsList.vue"
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@600&display=swap');

  p{
    margin: 0;
    font-style: italic;
    font-size: 3vh;
  }

  h2{
    margin-top: 5vh;
    margin-bottom: 2.5vh;
    font-size: 5vh;
  }

  img{
    width: 30vw;
    height: 40vh;
    border-radius: 5vh;
  }

  button{
    width: 10vw;
    height: 8vh;
    color: white;
    font-size: 3vh;
    border-radius: 20vh;
    background: #BB1C3C;
    border-color: #BB1C3C;
    margin-left: 7.8125vw;
    margin-top: 17.331vh;
  }
  hr {
    height:2px;
    border-width:0;
    color:#BB1C3C;
    background-color:#BB1C3C;
    margin-top: 10vh;
    margin-bottom: 5vh;
    visibility: hidden;
  }
  .crearEvento {
    margin-top: 10vh;
    margin-bottom: 5vh;
    text-align: right;
  }
  .crearEvento button {
    width: 20vw;
    align-content: center;
  }

  .event{
    align-content: center;
    display: flex;
    border: 5vh;
    border-radius: 5vh;
    padding: 5vh;
  }
  .infoEvent{
    display: inline-block;
    margin-left: 5vw;
    margin-top: 5vh;
    margin-bottom: auto;
  }

  @media screen and (max-width: 420px) {
    img{
      width: 160px;
      height: 130px;
      margin: 30px 0 0;
    }
    p {
      font-size: 10px;
    }
    h2 {
      font-size: 15px;
    }
    button{
      width: 80px;
      height: 20px;
      font-size: 10px;
      margin-left: 20px;
      margin-right: 10px;
      text-align: center;
    }
    .event {
      margin: 0;
      padding: 5px 0 0;
      align-items: center;
      text-align: center;
    }
    .infoEvent {
      margin-left: 20px;
      margin-top: 0;
    }
    .crearEvento {
      margin: 15px 0;
      text-align: center;
    }
    .crearEvento button {
      width: 40vw;
    }
    hr {
      visibility: visible;
      margin-top: 20px;
      margin-bottom: 0;
      display: none;
    }
  }
</style>