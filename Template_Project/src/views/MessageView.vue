<template>
  <div class="msg-container">
    <div class="msg-header">
      <div class="msg-header-img">
        <img
          src="https://i.blogs.es/8f5cd5/lucy-edgerunners-cyberpunk-2077/450_1000.webp"
          alt=""
        />
      </div>
      <div class="active">
        <h4>Lucyna Kushinada</h4>
      </div>
    </div>
    <div class="chat-page">
      <div class="msg-inbox">
        <div class="chats">
          <div class="msg-page">
            <div class="received-chats">
              <div class="received-msg">
                <div class="received-msg-inbox">
                  <p>Hola, este es un mensaje.</p>
                </div>
              </div>
            </div>
            <div class="outgoing-chats">
              <div class="outgoing-msg">
                <div class="outgoing-msg-inbox">
                  <p>
                    Hola, este es un mensaje. Sobretodo es importante porque lo
                    he enviado yo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="send-msg">
      <div class="input-msg">
        <input
          type="text"
          class="form-control"
          placeholder="write message..."
        />
        <div class="input-group">
          <span class="input-group-text">
            <img
              class="send-icon"
              src="../../assets/media/imagenes/send-msg-icon.webp"
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@600&display=swap");
.msg-container {
  margin: auto;
  font-family: sans-serif;
  letter-spacing: 0.5px;
}

img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.msg-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  border: 5px none #bb1c3c;
  border-top-style: solid;
  background-color: rgba(245, 7, 77, 1);
}

.msg-header-img {
  border-radius: 50%;
  width: 30px;
  margin-left: 5%;
  margin-top: 12px;
  padding: 10px;
}

.active {
  margin-top: 10px;
  margin-left: 80px;
}

.active h4 {
  font-size: 25px;
  margin-left: 10px;
  line-height: 2px;
  color: #fff;
}

.chat-page {
  padding: 0 0 0 0;
}

.msg-inbox {
  border: 1px solid #ccc;
  overflow: hidden;
  padding-bottom: 20px;
}

.chats {
  padding: 30px 15px 0 25px;
  max-height: 350px;
  overflow-y: scroll;
}

.msg-page {
  min-height: 350px;
  overflow-y: auto;
}

.received-msg {
  display: inline-block;
  padding: 0 0 10px 10px;
  vertical-align: top;
  width: 92%;
}

.received-msg-inbox {
  width: 57%;
}

.received-msg-inbox p {
  background: #efefef none repeat scroll 0 0;
  border-radius: 10px;
  color: black;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}

.outgoing-chats {
  overflow: hidden;
  margin-top: 10px;
}

.outgoing-msg p {
  background: rgba(245, 7, 77, 1) none repeat scroll 0 0;
  color: white;
  border-radius: 10px;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}

.outgoing-msg {
  float: left;
  width: 46%;
  margin-left: 50%;
}

.input-msg {
  padding: 10px;
  position: relative;
  height: 10%;
  background-color: #efefef;
}

.input-group {
  float: right;
  border-radius: 20px;
}

.form-control {
  border: none !important;
  width: 700px;
  margin-left: 10px;
  font-size: 20px;
}

.form-control:focus {
  border-color: transparent !important;
  box-shadow: none;
}

.input-group-text {
  background: transparent !important;
  border: none !important;
}

.input-group .send-icon {
  color: rgba(245, 7, 77, 1);
  float: right;
  width: 25px;
  height: 25px;
  border-radius: 0;
  margin-right: 15px;
}
@media screen and (max-width: 420px) {
  .msg-container {
    max-width: 100vw;
  }
  .active h4 {
    font-size: 5vw;
  }
  .active {
    margin-left: 10vw;
  }
  img {
    width: 60px;
    height: 60px;
  }

  .form-control {
    border: none !important;
    width: 250px;
    margin-left: 10px;
    font-size: 20px;
  }
}
</style>
