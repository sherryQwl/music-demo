export default {
  // 过滤万
  filters: {
    formatCount(num) {
      if (num > 10000) {
        return num / 10000 + "万";
      }
      return num;
    }
  }
};