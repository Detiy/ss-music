<template>
  <div>
    <el-container class="_container">
      <i class="el-icon-arrow-left" @click="back"></i>
      <el-header> 我的歌曲 </el-header>
    </el-container>
    <ul>
      <li
        v-for="item in songs"
        :key="item.id"
        class="songDetailList"
        @click="play(item.songmid)"
      >
        <div>
          <span>{{ item.songname }}</span>
          <p>
            <span>{{ size }}MB</span>
            <span>{{ item.singer[0].name }}</span>
          </p>
        </div>
        <div class="fu">
          <!-- <i class="iconfont icon-kaishi"></i> -->
          >
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
    };
  },
  mounted() {
    this.$http.getSongList({ id: 1240628554 }).then((res) => {
      this.songs = res.data.songlist;
      this.size = (Math.random() * 100).toFixed(2);
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    play(songmid) {
      this.$http.getSongsPlay({ id: songmid }).then((res) => {
        this.$router.push({ name: "play", params: { songmid: songmid,audiourl:res.data[songmid] } });
      });
    },
  },
};
</script>

<style scoped lang="less">
._container {
  background: #333;
  color: #fff;
}
.songDetailList {
  height: 50px;
  width: 100%;
  margin-top: 5px;
  border-bottom: 1px solid #f3ecec;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    margin-left: 10px;
  }
  p{
    span{
      font-size: 12px;
      color:#dbd7d7;
    }
  }
  .icon-kaishi {
    margin-right: 20px;
  }
  .fu{
    margin-right: 20px;

  }
}
</style>