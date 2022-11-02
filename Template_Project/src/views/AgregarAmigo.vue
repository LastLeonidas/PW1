<template>
  <link rel="stylesheet" href="src/assets/styles/styleAgregarAmigo.css" />

  <section class="body">
    <section class="seccionIzquierda">
      <section class="searchBar">
        <section><h2>Find your next event companion</h2></section>
        <section class="box">
          <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input type="text" placeholder="Username" />
        </section>
      </section>
    </section>
    <section class="seccionDerecha">
      <img src="src/assets/images/imagenAmigos.jpeg" alt="" width="480" />
    </section>
  </section>
</template>

<script>
export default {
  name: "AgregarAmigo",
};
</script>

<style scoped></style>