<template>
  <div>
    <el-container>
        <el-header>
            <el-input
                type="text"
                placeholder="歌曲 歌手 创作人 专辑"
                prefix-icon="el-icon-search"
                v-model="input"
            ></el-input>
        </el-header>
        <el-main>
          <h3>为你推荐</h3>
          <el-carousel :interval="4000" type="card" height="110px">
            <el-carousel-item v-for="item in images" :key="item.id">
            <img style="width:100%;height:100%" :src="item.picUrl" @click="toDetail">
            </el-carousel-item>
          </el-carousel>
          <el-row class="middle">
           <el-col :span="6"> <div @click="toUrl"><i class="iconfont icon-xihuan"></i><span>我喜欢的</span></div></el-col>
           <el-col :span="6" > <div @click="toUrl1"><i class="iconfont icon-yinlefenggecccccc"></i><span>音乐风格</span></div></el-col>
           <el-col :span="6" > <div @click="toUrl2"><i class="iconfont icon-songbook_musicradio"></i><span>音乐电台</span></div></el-col>
           <el-col :span="6" > <div @click="toUrl3"><i class="iconfont icon-paihangbang"></i><span>我的歌曲</span></div></el-col>
          </el-row>
          <h3>新MV推荐</h3>
          <el-row class="mv" :gutter="20">
            <el-col :span="8" v-for="o in mv" :key="o.id" class="mvBox" >
              <el-card :body-style="{ padding: '10px'}" shadow="hover" >
                <img :src="o.imgUrl" class="image" @click="toMv(o.id)">
                <div style="padding-top:10px" @click="toMv(o.id)">
                  <p>{{o.name}}</p>
                  <p class="name">{{o.English}}</p>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <div class="title">
            <h3>排行榜</h3>
            <h5 @click="toRank">more></h5>
          </div>
           <el-row class="rank">
            <el-col :span="24" class="rankBox">
              <el-card :body-style="{ padding: '10px', display:'flex'}" shadow="hover">
                <img :src="rank.picUrl" class="image" style="height:100px;width:100px;">
                <div style="padding-top:10px;margin-left:20px;">
                  <p><span>排行榜名：</span>{{rank.label}}</p>
                  <p><span>歌曲数量：</span>{{rank.value}}</p>
                  <p><span>更新时间：</span>{{rank.updateTime}}</p>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
   </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      images: [],
      mv:[
        {id:15,name:'精选',imgUrl:'http://y.gtimg.cn/music/photo_new/T015R640x360M101004NYW1C1X41tQ.jpg',English:'choiceness'},
        {id:16,name:'内地',imgUrl:'http://y.gtimg.cn/music/photo_new/T015R640x360M102004KYy4P46HNjt.jpg',English:'hinterland'},
        {id:17,name:'港台',imgUrl:'http://y.gtimg.cn/music/photo_new/T015R640x360M101002ELs9E28DIXM.jpg',English:'Hongkong'},
        {id:18,name:'欧美',imgUrl:'http://y.gtimg.cn/music/photo_new/T015R640x360M0000040205v2HwB6O.jpg',English:'Europe'},
        {id:19,name:'韩国',imgUrl:'http://y.gtimg.cn/music/photo_new/T015R640x360M101003vF9ul4FBlH2.jpg',English:'Korea'},
        {id:20,name:'日本',imgUrl:'http://y.gtimg.cn/music/photo_new/T015R640x360M000003JPC4C2f248l.jpg',English:'Japanese'}
      ],
      rank:""
    };
  },
  mounted(){
    this.$http.getBannerList().then(res=>{
        this.images = res.data;
    });
    this.$http.getNewMV({type:5}).then(res=>{
    });
    this.$http.getRank().then(res=>{
      this.rank = res.data[0].list[0];
    })
  },
  //实现各种方法 如搜索
  computed: {},
  methods: {
    // onSearch(val) {
    //   console.log(val);
      //     let { delicacy } = this;
      //     let arr = [...delicacy];
      //     if (val) {
      //         arr = delicacy.filter(item => item.title.indexOf(val) !== -1);
      //     }
      //     return arr;
    // },
    toUrl(){
      // this.$router.push('/rank');
    },
    toUrl1(){
      // this.$router.push('/songDetail');
    },
    toUrl2(){
      this.$router.push('/radio');
    },
    toUrl3(){
      this.$router.push('/songDetail');
    },
    toDetail(){
        this.$router.push('/songDetail');
    },
    toRank(){
      this.$router.push('/rank');
    },
    toMv(id){
      console.log(1);
      this.$router.push({
        name:'mv',
        params:{area:id}
      })
    }
  },
};
</script>

<style lang="less">

.title{
  width:100%;
  display: flex;
  justify-content: space-between;
}

.middle{
    height:70px;
    margin-top:30px;
    font-size: 14px;
    .iconfont{
        height:20px;
        width:20px;
    }
}
.middle .el-col div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.mv{
font-size: 10px;
margin-bottom: 20px;
  .mvBox{
    margin:10px 0 0 0;
  }
 .image {
    width: 100%;
    display: block;
  }
  .name{
    color:#D44C49;
  }
}
.rank{
font-size: 10px;
p{
  margin-top:10px;
  span{
    text-align: left;
    display: inline-block;
    font-weight: 600;
    width:70px;
  }
}
}
</style>
