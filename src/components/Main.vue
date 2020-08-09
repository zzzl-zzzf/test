<template>
  <div>
    <img src="../assets/logo.png">
    <HelloWorld/>
    <Test/>
  </div>

</template>

<script>
  import HelloWorld from './HelloWorld'
  import Test from './test'
    export default {
        name: "Main",
      components: {  Test,
        HelloWorld}
    }
</script>

<style scoped>

</style>
