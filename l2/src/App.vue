<template>
  <div id="app">
    <calcComp/>
  </div>
</template>

<script>
import calcComp from './components/calcComp.vue'

export default {
  name: 'App',
  components: {
    calcComp
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
