<template>
  <main>
    <header>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Profile</title>
      <link rel="stylesheet" href="src/assets/styleProfile.css">
    </header>
    <body>
      <div class="container">
        <div class="profile-box">
          <div class="rowSettings">
            <img src="../images/Settings_Icon.png" class="setting-icon" alt="" width="35" height="35" style="border-radius: 50%; margin-bottom: 20px">
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
              <p>Netrunner and Deuteragonist</p>
            </div>
            <img src="../images/FFFFFF.png" class="setting-icon" alt="" width="35" height="35" style="margin-left: 50px">
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
    </body>
  </main>
</template>

<script>
export default {
  name: "ProfileUser"
}
</script>