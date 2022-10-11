<template>
  <main>
    <header>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Profile</title>
      <link rel="stylesheet" href="../assets/styleProfile.css">
    </header>
    <body>
      <div class="container">
        <div class="profile-box">
          <div class="row" style="display: flex; align-items: center; justify-content: right; margin-right: 50px" >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/640px-Windows_Settings_app_icon.png" class="setting-icon" alt="" width="35" height="35" style="border-radius: 50%; margin-bottom: 20px">
          </div>
          <div class="row" style="display: flex; align-items: center; justify-content: center">
            <div class="column">
              <img src="https://images2.alphacoders.com/127/1273323.jpg" class="profile-pic" sizes="200dp" width="170" height="170" style="border-radius: 50%" alt="">
            </div>
            <div class="column" style="margin-left: 50px">
              <div class="row" style="font-size: 30px; display: inline-flex; margin-bottom: -40px">
                <h3>Lucyna</h3>
                <h3>&nbsp</h3>
                <h3>Kushinada</h3>
              </div>
              <p style="font-size: 20px">Netrunner and Deuteragonist</p>
            </div>
          </div>
        </div>
        <div class="profile-info" style="display: flex; align-items: center; justify-content: center;text-align: center; margin-top: 30px; font-size: 20px">
          <div class="row" style="display: flex; align-items: center; background: #f4f4f4; border: 5px; border-radius: 40px; padding: 20px">
            <div class="column" style="margin-left:60px; margin-right: 20px">
              <h3>Score</h3>
              <p>10</p>
            </div>
            <div class="column" style="margin-right: 20px">
              <h3>Commments</h3>
              <p>420</p>
            </div>
            <div class="column" style="margin-right: 80px">
              <h3>Rank</h3>
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