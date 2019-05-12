<template>
  <div class="header">
    <div class="header-first">
      <div class="header-container">
        <div class="header-first-left">
          <i class="header-first-left-icon"></i>
        </div>
        <div class="header-first-center">
          <template v-for="item in titleList">
            <div
              @click="clickTitle(item.flag)"
              :key="item.flag"
              :class="['header-first-center-title', item.flag==currentFlag?'hoverStyle':'']"
            >
              <span>{{item.name}}</span>
            </div>
          </template>
        </div>
        <div class="header-first-right"></div>
      </div>
    </div>
    <div :class="{'show-border':currentFlag!='/'}" class="header-second">
      <div class="header-container header-second-main" v-if="currentFlag=='/'">
        <template v-for="(itm, idx) in secondTitle">
          <div :key="idx" class="header-second-main-name" @click="changeSecondTitle(itm.index)">
            <span :class="{'show-search':showSecondFlag == itm.index}">{{itm.name}}</span>
          </div>
        </template>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "CommonHeader",
  data() {
    return {
      titleList: [
        { name: "发现音乐", flag: "/" },
        { name: "我的音乐", flag: "/my" },
        { name: "朋友", flag: "/friend" },
        { name: "商城", flag: "/store" },
        { name: "音乐人", flag: "/nmusician" },
        { name: "下载客户端", flag: "/download" }
      ], // 标题数组
      currentFlag: "/", //hover时的样式
      secondTitle: [
        { name: "推荐", index: 1 },
        { name: "排行榜", index: 2 },
        { name: "歌单", index: 3 },
        { name: "主播电台", index: 4 },
        { name: "歌手", index: 5 },
        { name: "新碟上架", index: 6 }
      ], // 第二层的头部
      showSecondFlag: 1 // 第二部分显示的信息
    };
  },
  methods: {
    // 切换第一层的头部标题
    clickTitle(val) {
      this.currentFlag = val;
      this.$router.push(val);
    },
    // 切换第二层的头部标题
    changeSecondTitle(val) {
      this.showSecondFlag = val;
    }
  }
};
</script>


<style lang="scss" scoped>
.header {
  width: 100%;
  &-first {
    width: 100%;
    height: 70px;
    background-color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    &-left {
      line-height: 70px;
      display: flex;
      align-items: center;
      &-icon {
        display: inline-block;
        width: 156px;
        height: 34px;
        background: url("../assets/image/topbar.png");
        background-position: 0 -19px;
        cursor: pointer;
      }
    }
    &-center {
      width: 508px;
      line-height: 70px;
      &-title {
        display: inline-block;
        width: 16%;
        &:hover {
          background-color: black;
          cursor: pointer;
        }
      }
      .hoverStyle {
        background-color: black;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-top-color: transparent;
          border-top-style: solid;
          border-top-width: 6px;
          border-right-color: transparent;
          border-right-style: solid;
          border-right-width: 6px;
          border-bottom-color: #c10b0b;
          border-bottom-style: solid;
          border-bottom-width: 6px;
          border-left-color: transparent;
          border-left-style: solid;
          border-left-width: 6px;
        }
      }
    }
    &-right {
    }
  }
  &-container {
    display: flex;
    width: 1100px;
    height: 100%;
  }
  &-second {
    width: 100%;
    height: 34px;
    background-color: #c10b0b;
    box-shadow: 1px 0 5px black;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    &-main {
      padding-left: 180px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      &-name {
        width: 84px;
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          &:hover {
            display: inline-block;
            height: 20px;
            padding: 0 10px;
            border-radius: 20px;
            background-color: #9b0909;
          }
        }
      }
    }
    .show-search {
      display: inline-block;
      height: 20px;
      padding: 0 10px;
      border-radius: 20px;
      background-color: #9b0909;
    }
  }
  .show-border {
    height: 0;
    border: 4px solid #c10b0b;
  }
}
</style>
