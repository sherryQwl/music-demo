<template>
  <div id="app">
    <div class="nav">
      <CommonHeader></CommonHeader>
    </div>
    <div class="app_contain">
      <router-view/>
    </div>
  </div>
</template>

<script>
import CommonHeader from './components/CommonHeader';
export default {
  mounted() {
  },
  created() {},
  components: {
    CommonHeader,
  },
};
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
}
.nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.app_contain{
  width: 980px;
  margin: 0 auto;
}
</style>
