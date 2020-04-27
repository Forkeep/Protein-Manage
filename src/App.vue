<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
