<template>
  <div>
    <el-container class="_container">
      <i class="el-icon-arrow-left" @click="back"></i>
      <el-header> 我的歌曲 </el-header>
    </el-container>
    <ul>
      <li
        v-for="(item, index) in songs"
        :key="item.id"
        class="songDetailList"
        @click="play(item.songmid, item.songid)"
      >
        <div style="width: 200px; text-align: left;display:flex;margin-left:10px;align-items:center;">
          <div class="fu fu1">
            {{ index+1 }}
            <!-- <i class="iconfont icon-kaishi"></i> -->
          </div>
          <div class="songTips">
            <p>
              <span class="songDetailName">{{ item.songname }}</span>
            </p>
            <p>
              <span>{{ size }}MB</span>
              <span>{{ item.singer[0].name }}</span>
            </p>
          </div>
        </div>
        <div class="fu fu2">
          >
          <!-- <i class="iconfont icon-kaishi"></i> -->
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SongDetail",
  data() {
    return {
      songs: [],
      size: "",
      logo: "",
    };
  },
  created() {
    this.$http.getSongList({ id: 1240628554 }).then((res) => {
      this.songs = res.data.songlist;
      this.logo = res.data.logo;
      this.size = (Math.random() * 100).toFixed(2);
      // console.log(res);
    });
  },
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    play(songmid, songid) {
      this.$http.getSongsPlay({ id: songmid }).then((res) => {
        this.$router.push({
          name: "play",
          params: {
            songmid: songmid,
            audiourl: res.data[songmid],
            logo: this.logo,
            songid: songid,
          },
        });
      });
    },
  },
};
</script>

<style scoped lang="less">
._container {
  background: linear-gradient(#e6c50c, #dbdfcc);
  color: #fff;
}
ul{
  background:linear-gradient(#dbdfcc, #e6c50c);
}
.songDetailList {
  height: 70px;
  width: 100%;
  margin-top: 5px;
  // border-bottom: 1px solid #6d446b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  
  .songTips{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  p {
    width: 100%;
    span {
      font-size: 10px;
      color: rgb(150, 144, 144);
      margin-left: 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .songDetailName {
    color: #333;
    font-size: 14px;
  }

  .icon-kaishi {
    margin-right: 20px;
  }
  .fu {
    color: rgb(194, 170, 170);
    font-size: 18px;
    &.fu1{
      margin-right: 5px;
    }
    &.fu2{
      margin-right: 30px;

    }
  }
}
li:nth-child(1){
    margin-top:0;
  }
</style>