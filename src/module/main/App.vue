<template>
  <div id="app">
  <header>
    <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link to="./home">Home</router-link>
      <router-link to="./about">About</router-link>
    </header>
    <img src="../../assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
