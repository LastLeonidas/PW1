<template>
  <Link rel="stylesheet" href="src/assets/styles/amigos.css"/>
  <!-- cuando se entre a esta view (botón) se hará una petición a la API -> name attribute
  id is used to uniquely identify an HTML element. Ideally, an id should only identify one (and only one) HTML element across your entire document.

  class is (mostly) used to specify what CSS class(es) an element should have.

  name is (mostly) used to identify elements in a form.
  -->
  <section class="body">
    <section style="background: darkslateblue" class="top">
      <section class="search">
        <h2 style="background: darkcyan">Friends: </h2>
        <div class="searchBox" style="background: darkgoldenrod">
          <input type="text">
        </div>
      </section>
        <div class="buttonDiv">
          <button type="button">Add friend</button>
        </div>
    </section>

    <section style="background: coral" class="recyclerView">
        <!--<ul id="friendsList">-->
        <ul class="list">
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
          <li>Link 5</li>
          <li>Link 6</li>
          <li>Link 7</li>
          <li>Link 8</li>
          <li>Link 9</li>
          <li>Link 10</li>
          <li>Link 11</li>
          <li>Link 13</li>
          <li>Link 13</li>
        </ul>
    </section>
  </section>
</template>


<script>
export default {
  name: "AmigosView"
}
</script>

<style scoped></style>