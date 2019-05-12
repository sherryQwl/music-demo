<template>
  <div class="title">
    <div class="title-left">
      <i class="title-left-icon"></i>
      <div class="title-left-name">
        <span>{{titleName}}</span>
      </div>
      <slot></slot>
    </div>
    <div class="title-right">更多</div>
    <!-- <icon></icon> -->
  </div>
</template>
<script>
import Icon from "../../components/icon/Icon";

export default {
  name: "CommonTitle",
  data() {
    return {};
  },
  components: {
    Icon
  },
  props: ["titleName"]
};
</script>
<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #C10D0C;
  &-left {
    text-align: left;
    display: flex;
    align-items: center;
    &-icon {
      display: inline-block;
      height: 33px;
      width: 33px;
      background: url("../../assets/image/background-icon.png");
      background-position: 193px -157px;
    }
    &-name {
      display: inline-block;
      font-size: 20px;
    }
  }
  &-right {
    text-align: right;
  }
}
</style>
