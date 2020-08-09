<template>
    <div v-bind:class="{'box':use}" id="app">
    123
      <button @click="visible++">dianwo</button>
      <p>{{visible}}</p>
      <p :class="{'te':isHe}">123</p>
    </div>
</template>

<script>

    export default {
        name: "test",
        data(){
          return {use: true,
          visible: 123,
            counter:1,
            isHe:true
          }
      },
      methods:{
        Sayhello: function () {
          return alert("hi");
        }
      },
      watch:{
        kilometers:function(val) {
          this.kilometers = val;
          this.meters = this.kilometers * 1000
        },
        meters : function (val) {
          this.kilometers = val/ 1000;
          this.meters = val;
        }
      }
    }

</script>


<style scoped>
  .box{
    width: 50px;
    height: 50px;
    background-color: blue;
  }
  .te{
    font-size: 80px;
  }
</style>
