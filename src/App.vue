<template>
  <div id="app">
      <router-view/>
      <!--<router-link to="/home" tag="span" activity-class="on"></router-link>-->
  </div>
</template>

<script>


  export default {
    name: 'App',
    components: {

    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
