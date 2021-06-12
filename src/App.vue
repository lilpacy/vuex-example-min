<template>
  <div id="app">
    <Counter/>
    <DoubleCounter/>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import DoubleCounter from './components/DoubleCounter.vue'

export default {
  name: 'app',
  components: {
    Counter,
    DoubleCounter
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
