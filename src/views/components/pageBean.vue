<template>
  <div class="pageBean">
    <component :is="currentComponent"></component>
    <button @click="changeHandler">change</button>
  </div>
</template>

<script>
import test1 from './test1';
import test2 from './test2';

export default {
  data() {
    return {
        currentComponent:'test2'
    };
  },
  components: {
    test1,
    test2
  },
  methods: {
    changeHandler() {
      if(this.currentComponent == 'test2'){
        this.currentComponent = 'test1'
      }else {
        this.currentComponent = 'test2'
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
