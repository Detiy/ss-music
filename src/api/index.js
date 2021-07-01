import axios from 'axios'

axios.defaults.baseURL = "/api";

export const httpGet = (url,para) =>{
    return new Promise((resolve,reject)=>{
        axios.get(url,{params:para || ''})
          .then(res=>{
              resolve(res.data)
          })
    })
}
export const httpPost = (url,params) =>{
    return new Promise((resolve,reject)=>{
        axios.post(url,params,{headers: {'Content-Type': 'application/json'}})
          .then(res=>{
              resolve(res.data)
          })
    })
}

export default {
    //登陆
    getLogin(params){
      return httpPost('/user/setCookie',params)
    },
    //轮播图
    getBannerList(params){
        return httpGet('/recommend/banner',params)
  },
    //播放歌曲链接
    getSongsPlay(params){
      return httpGet('/song/urls',params)
    },
    //获取歌词
    getSongsLyric(params){
      return httpGet('/lyric',params)
    },
    //MV
    getNewMV(params){
      return httpGet('/new/mv',params)
    },
     //MV分类
     getNewMvCategory(params){
      return httpGet('/mv/category',params)
    },
    //MV列表
    getNewMVList(params){
      return httpGet('/mv/list',params)
    },
    //MV播放链接 必填id
    getNewMVUrl(params){
      return httpGet('/mv/url',params)
    },
    //排行榜
    getRank(params){
      return httpGet('/top/category',params)
    },
    //排行榜详情
    getRankDetail(params){
      return httpGet('/top',params)
    },
    //用户创建的歌单
    getUserSongList(params){
      return httpGet('/user/songlist',params)
    },
    //用户收藏的专辑
    getCollectAlbum(params){
      return httpGet('/user/collect/album',params)
    },
    //专辑信息
    getAlbum(params){
      return httpGet('/album/songs',params)
    },
    //评论
    getComment(params){
      return httpGet('/comment',params)
    },
    //删除评论
    delComment(params){
      return httpGet('/comment/del',params)
    },
    //用户创建的歌单
    getSongList(params){
      return httpGet('/songlist',params)
    },
    //电台分类
    getRadio(params){
      return httpGet('/radio/category',params)
    },
    //电台歌曲
    getRadioSong(params){
      return httpGet('/radio',params)
    },
    go(params){
      return httpGet('/user/follow/singers',params)
    }
   
}