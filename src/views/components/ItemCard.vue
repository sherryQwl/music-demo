<template>
  <div class="card">
    <template v-for="(item,index) in cardList">
      <div :key="index" class="card-container">
        <div class="card-header">
          <img :src="item.url" alt>
          <div class="card-header-shadow">
            <i class="el-icon-service card-header-icon"></i>
            <div class="card-header-num">{{item.num}}</div>
            <i class="card-header-play"></i>
          </div>
        </div>
        <div class="card-title">
          <a href>{{item.title}}</a>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  data() {
    return {
      cardList: [
        {
          url: require("../../assets/image/img1.jpeg"),
          num: "123",
          title: "红酒与玫瑰的邂逅"
        },
        {
          url: require("../../assets/image/img2.jpeg"),
          num: "456",
          title: "评论过十万的英文歌"
        },
        {
          url: require("../../assets/image/img3.jpeg"),
          num: "678",
          title: "白噪音，看书静心写作业用"
        },
        {
          url: require("../../assets/image/img4.jpeg"),
          num: "3432",
          title: "蒸气波＆采样：少女の忘忧乐园"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-around;
  &-header,
  &-container {
    display: inline-block;
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
  }
}
</style>