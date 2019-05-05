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
    <div class="header-second"></div>
  </div>
</template>

<script>
export default {
  name: "CommonHeader",
  data() {
    return {
      titleList: [
        { name: "发现音乐", flag: '/' },
        { name: "我的音乐", flag: '/my' },
        { name: "朋友", flag: '/friend' },
        { name: "商城", flag: '/store' },
        { name: "音乐人", flag: '/nmusician' },
        { name: "下载客户端", flag: '/download' }
      ], // 标题数组
      currentFlag: '/'
    };
  },
  methods: {
    clickTitle(val) {
      this.currentFlag = val;
      this.$router.push(val)
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
    align-content: center;
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
        }
      }
      .hoverStyle {
        background-color: black;
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
    background-color: red;
  }
}
</style>
