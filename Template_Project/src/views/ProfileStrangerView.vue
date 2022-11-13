<template>
  <div class="container">
    <div class="profile-box">
      <div class="rowSettings">
        <img class = "icon" src="../assets/media/imagenes/FFFFFF.png" alt="">
      </div>
      <div class="rowProfile">
        <div class="column">
          <img src="https://images2.alphacoders.com/127/1273323.jpg" class="imageProfile" sizes="200dp" width="170" height="170" alt="">
        </div>
        <div class="columnName">
          <div class="rowName">
            <h3>Lucyna</h3>
            <h3>&nbsp</h3>
            <h3>Kushinada</h3>
          </div>
        </div>
        <img src="../assets/media/imagenes/Add_friends_icon.png" class="iconAdd" alt="">
      </div>
    </div>
    <div class="profile-info">
      <div class="rowInfo">
        <div class="columnScore">
          <h4>Score</h4>
          <p>10</p>
        </div>
        <div class="columnComments">
          <h4>Commments</h4>
          <p>420</p>
        </div>
        <div class="columnRank">
          <h4>Rank</h4>
          <p>69%</p>
        </div>
      </div>
    </div>
  </div>
    <!-- -->
</template>

<script>
export default {
  name: "ProfileStrangerView"
}
</script>

<style>
  @import "../assets/styleProfile.css";
</style>