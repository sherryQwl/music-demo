import axios from '../utils/request';

// 歌单分类
export const getCatList = () => {
    return axios.get('/playlist/catlist');
}

// 手机登录  
export const loginIn = () => {
    return axios.get('/login/cellphone');
}
