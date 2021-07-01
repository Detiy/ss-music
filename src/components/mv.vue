<template>
  <div class="mvList">
    <el-container class="_container">
      <i class="el-icon-arrow-left" @click="back"></i>
      <el-header>
        Music
      </el-header>
    </el-container>
    <ul class="list">
      <li v-for="item in mvList" :key="item.id" @click="toMvUrl(item.vid)">
        <div><i class="iconfont icon-zuijinbofang"></i></div>
        <div>
          <p style="font-size:16px;color:#c6c6c6">{{ item.singers[0].name }}</p>
          <br>
          <p style="font-size:12px;color:#c6c6c6">{{ item.singers[0].mid }}</p>
        </div>
        <img :src="item.singers[0].picurl" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "mv",
  data() {
    return {
      mvList: [],
    };
  },
  mounted() {
    this.$http.getNewMVList({area:this.$route.params.area,pageSize:20}).then((res) => {
      this.mvList = res.data.list;
    });
    this.$http.getNewMvCategory().then((res) => {
      console.log(res);
    });
  },
  methods:{
    toMvUrl(id){
      this.$http.getNewMVUrl({id:id}).then((res) => {
        window.location.href = res.data[id][0];
      });
    },
    back(){
        this.$router.go(-1);
      }
  }
};
</script>
<style lang="less">
.mvList {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  ._container,.el-icon-arrow-left{
    // background:#333;
    color:#333;
  }
  .el-container {
    margin-bottom: 0;
  } 
  .list {
    display: inline-block;
    width: 100%;
    margin-bottom: 70px;
    li {
      display: block;
      height: 80px;
      width: 100%;
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      // background: linear-gradient(90deg, #8b593e 0%, #521919 100%);
      color: #333;
      align-items: center;
      border-bottom:1px solid rgb(240, 236, 236);
      div {
        display: flex;
        justify-content: space-around;
        // align-items: center;
        flex-direction: column;
      }
      img{
        height:60px;
        width:60px;
        border-radius:50%;
      }
    }
  }
}
</style>