<template>
  <div>
    <el-container>
      <i class="el-icon-arrow-left" @click="back"></i>
      <el-header> Music </el-header>
    </el-container>
    <div class="pic"></div>
    <div class="head">
      <div class="photo"></div>
      <div class="intro">
        <p><span>名字</span>：{{ name }}</p>
        <p><span>qq号</span>：{{ number }}</p>
      </div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="歌单" name="first">
        <el-row class="rank" v-for="item in songList" :key="item.tid">
          <el-col :span="24" class="rankBox">
            <el-card
              :body-style="{ padding: '10px', display: 'flex' }"
              shadow="hover"
            >
              <img
                :src="item.diss_cover"
                class="image"
                style="height: 50px; width: 50px"
              />
              <div style="margin-left: 20px">
                <p><span>diss_name：</span>{{ item.diss_name }}</p>
                <p><span>listen_num：</span>{{ item.listen_num }}</p>
                <p><span>song_cnt：</span>{{ item.song_cnt }}</p>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="评论" name="second">
        <el-row class="rank" v-for="item in commentList" :key="item.time">
          <el-col :span="24" class="rankBox">
            <el-card
              :body-style="{ padding: '10px', display: 'flex' }"
              shadow="hover"
            >
              <img
                :src="item.avatarurl"
                class="image"
                style="height: 50px; width: 50px; border-radius: 50%"
              />
              <div style="margin-left: 20px; text-align: left">
                <div>
                  <img
                    :src="item.vipicon"
                    style="height: 20px; width: 20px"
                    v-show="item.vipicon"
                  /><span class="nick">{{ item.nick }}: </span>
                  <p>{{ item.rootcommentcontent }}</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="专辑" name="third">
        <div style="margin-top:40px;color:rgb(91, 175, 108);">还没有收藏的专辑哦～</div>
      </el-tab-pane>
      <el-tab-pane label="分享" name="fourth">
        <div style="margin-top:40px;color:rgb(91, 175, 108);">还没有歌曲分享哦～</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: "user",
  data() {
    return {
      name: "",
      number: "",
      activeName: "first",
      songList: [],
      commentList: [],
      albumList: [],
    };
  },
  mounted() {
    this.$http.getCollectAlbum({ id: 1240628554 }).then((res) => {
      this.albumList = res.data.list;
    }),
      this.$http.getComment({ id: 97773 }).then((res) => {
        this.commentList = res.data.comment.commentlist;
      }),
      this.$http.getUserSongList({ id: 1240628554 }).then((res) => {
        this.name = res.data.creator.hostname;
        this.number = res.data.creator.hostuin;
        this.songList = res.data.list;
      });
      this.$http.go({ id: 1240628554 }).then((res) => {
        console.log(res);
      });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style lang="less" scope>
.pic {
  height: 300px;
  width: 100%;
  background: url("../assets/image/ourBg.jpeg") center / 100% no-repeat;
  position: absolute;
  top: 0;
  z-index: -1;
}
.el-icon-arrow-left {
  color: #fff;
}
.head {
  height: 70px;
  width: 100%;
  position: absolute;
  top: 220px;
  display: flex;
  font-size: 13px;
  .photo {
    height: 70px;
    width: 70px;
    background: url("../assets/image/defaultHead.png") center / 100% no-repeat;
  }
  .intro {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: left;
    margin-left: 20px;
    color: #fff;
    opacity: 0.5;
  }
}
.el-tabs {
  position: absolute;
  top: 300px;
  width: 100%;
  text-align: center;
  .el-tabs__header {
    margin-bottom: 0px;
  }
  .el-tabs__item {
    width: 90px;
    padding: 0;
  }
  .el-tabs__content {
    margin-bottom: 40px;
  }
}
.el-card {
  font-size: 12px;
  .el-card__body {
    align-items: center;
  }
  .nick {
    color: red;
  }
  p {
    text-align: left;
  }
}
</style>