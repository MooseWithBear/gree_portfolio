<template>
    <header>
        <h1 class="logo">{{plogo}}</h1>
        <nav>
          <router-link to="/main" class="link">메인 페이지</router-link>
          <router-link to="/sub1" class="link"> 서브 페이지1</router-link>
          <router-link to="/sub2" class="link"> 서브 페이지2</router-link>
          <router-link to="/sub3" class="link"> 서브 페이지3</router-link>
        </nav>
    </header>
</template>
  
<style>
      .link{color:orange; padding: 10px; display: inline-block; font-weight: bold;}
      .logo{color: red; font-size: 30px;}
      header{display: flex; justify-content: space-between; align-items: center;}
</style>
  
<script>
  export default {
       props:['plogo']
  }
</script>