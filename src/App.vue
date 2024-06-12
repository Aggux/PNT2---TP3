<template class="fondo">
  <!-- <div class="container mt-3"> -->
    <div class="">
      <Navbar />
      <RouterView />

    </div>
  <!-- </div> -->
</template>

<script>
import Navbar from './componentes/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
  .jumbotron {
    background-color: white;
    color: black;
  }

  h2 {
    color: black;
    text-align: center;
  }

  hr {
    background-color: black;
  }

  label {
    text-transform: capitalize;
  }
  #app{
    background-color: black;
  }
</style>
