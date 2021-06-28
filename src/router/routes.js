//登陆
import Login from '../page/login'
//首页
import Home from '../page/home'
//主要页面
import Main from '../components/main'
//我的
import User from '../components/user'
//排行
import Rank from '../components/rank'
//电台
import Radio from '../components/radio'
//视频
import Mv from '../components/mv'
//排行详情页
import RankDetail from '../page/rank/rankDetail'
//电台详情页
import Radiodetail from '../page/radio/radiodetail'
//歌曲详情页
import SongDetail from '../page/song/songDetail'
//播放界面
import Play from '../page/global/play'

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
    redirect: '/main',
    children: [{
        path: '/main',
        name: 'main',
        component: Main
      },
      {
        path: '/mv',
        name: 'mv',
        component: Mv
      },
      {
        path: '/rank',
        name: 'rank',
        component: Rank,
      },
      {
        path: '/user',
        name: 'user',
        component: User
      }
    ]
  },
  {
    path: '/rankDetail',
    name:'rankDetail',
    component: RankDetail
  },
  {
    path: '/songDetail',
    name:'songDetail',
    component: SongDetail
  },
  {
    path: '/radio',
    name:'radio',
    component: Radio,
  },
  {
    path: '/radiodetail',
    name:'radiodetail',
    component: Radiodetail
  },
  {
    path: '/play',
    name:'play',
    component: Play
  },

]

export default routes;
