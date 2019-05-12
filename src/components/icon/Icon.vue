<template>
  <svg class="icon" :style="styles" aria-hidden="true">
    <use :xlink:href="`#icon-${type}`"></use>
  </svg>
</template>
<script>
import "./iconfont/iconfont";
export default {
  name: "iconfont",
  props: {
    type: {
      type: String,
      default: "smile"
    },
    size: {
      type: Number,
      default: 20
    },
    color: {
        type: String,
        default: '#666'
    }
  },
  computed:{
      styles(){
          return {
              width: this.size + 'px',
              height: this.size + 'px',
              color: this.color
          }
      }
  }
};
</script>

<style lang="scss">
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>