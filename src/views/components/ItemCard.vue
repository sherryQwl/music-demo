<template>
  <div class="card">
    <template v-for="(item,index) in chineseList">
      <div :key="index" class="card-container">
        <div class="card-header">
          <img class="card-header-img" :src="item.coverImgUrl" alt>
          <div class="card-header-shadow">
            <i class="el-icon-service card-header-icon"></i>
            <div class="card-header-num">{{item.commentCount | formatCount}}</div>
            <i class="card-header-play"></i>
          </div>
        </div>
        <div class="card-title">
          <a href>{{item.name}}</a>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import filter from "utils/filters";

export default {
  name: "ItemCard",
  mixins: [
    filter
  ],
  data() {
    return {
      cardList: []
    };
  },
  props: {
    chineseList: {
      type: Array,
      default: () => []
    },
    personalizedList:{
      type:Array,
      default:() => []
    }
  },
  
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  flex-wrap: wrap;
  margin-left: -20px;
  &-header,
  &-container {
    display: inline-block;
    height: 100%;
  }
  &-header {
    position: relative;
    color: #ccc;
    &-icon {
      position: absolute;
      left: 4%;
      bottom: 4px;
    }
    &-play {
      position: absolute;
      right: 10px;
      bottom: 5px;
      width: 16px;
      height: 17px;
      background: url("../../assets/image/iconall.png");
      background-position: 0 0;
    }
    &-img {
      width: 140px;
      height: 140px;
    }
    &-shadow {
      position: absolute;
      width: 140px;
      height: 27px;
      background: url("../../assets/image/coverall.png") no-repeat;
      background-position: 0 -537px;
      left: 0;
      bottom: 0;
    }
    &-num {
      position: absolute;
      bottom: 0;
      left: 18%;
    }
  }
  &-container {
    width: 140px;
    padding: 0 0 30px 42px;
  }
}
</style>