<template>
  <div id="app">
    <HeaderArea plogo="그린컴퓨터" />
    <MainVisual />
    <router-view></router-view>
    <FooterArea />
  </div>
</template>

<style>
body{font-size: 16px; color: #333;}
a{color: #333; text-decoration: none;}
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.head{color: red;}
   .rimg{width: 90%; margin: 15px auto;}
   h4{font-size: 24px;margin: 15px 0;}
   p{font-size: 18px; margin: 15px 0;}
</style>

<script>
import HeaderArea from './components/HeaderArea.vue'
import MainVisual from './components/MainVisual.vue'
import FooterArea from './components/FooterArea.vue'


export default {
  name : 'app',
  data(){
    return{
      
    }
  },
  methods: {
   
  },
  components:{
       HeaderArea,
       MainVisual,
       FooterArea
  }
}

</script>
