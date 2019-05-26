import axios from "../utils/request";

// 手机登录
export const loginIn = () => {
  return axios.get("/login/cellphone");
};

// 获取网友精选碟歌单
export const getHotPlaylist = param => {
  return axios.get(`/top/playlist?limit=${param.limit}&order=${param.order}`);
};

// 可获取歌单分类,包含 category 信息
export const getCatList = () => {
  return axios.get("/playlist/hot");
};
