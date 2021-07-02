<template>
  <div class="play" :style="{ background: activeColor }">
    <el-container class="_container">
      <i
        class="el-icon-arrow-left"
        @click="back"
        style="color: #fff; font-size: 30px"
      ></i>
    </el-container>
    <div class="lyric-wrapper" ref="lyricList" @click="hideCard">
      <div class="rotateCircle" v-show="!flag" @click="showLyric">
        <div class="title">{{ currentLyricTitle }}</div>
        <img
          :src="this.$route.params.logo ? this.$route.params.logo : logo"
          :class="[circleImgFlag ? 'circleImg' : 'noCircleImg']"
        />
      </div>
      <!-- <div>{{ currentTime }}</div> -->
      <div class="lyric" v-show="flag" @click="hideLyric">
        <ul :style="{ transform: trans }">
          <li
            v-for="(line, index) in lyric.lines"
            :class="{
              current:
                minArr[index] <= currentTime && currentTime < minArr[index + 1],
            }"
            class="text"
            :key="index"
            ref="lyricLine"
            :data-time="line.time"
            :data-index="index"
          >
            {{ line.txt }}
          </li>
        </ul>
      </div>
    </div>
    <div class="audioBtn">
      <audio
        ref="audioMedia"
        :src="playUrl"
        id="audioMedia"
        @timeupdate="updateTime"
      ></audio>
      <div class="action_btn">
        <div
          class="iconfont icon-icon-"
          v-show="danquFlag"
          @click="danqu"
        ></div>
        <div
          class="iconfont icon-liebiaoxunhuan"
          v-show="!danquFlag"
          @click="liebiao"
        ></div>
        <div class="iconfont icon-shangyishoushangyige" @click="pre"></div>
        <div
          class="iconfont icon-bofang"
          v-show="audioFlag"
          @click="pauseAudio()"
        ></div>
        <div
          class="iconfont icon-kaishi"
          v-show="!audioFlag"
          @click="playAudio()"
        ></div>
        <div class="iconfont icon-xiayigexiayishou" @click="next"></div>
        <div class="iconfont icon-caidan" @click="showCard"></div>
      </div>
    </div>

    <el-card
      :body-style="{ padding: '10px', display: 'flex' }"
      shadow="hover"
      class="playCard"
      v-show="cardFlag"
    >
      <el-row>
        <el-col
          v-for="item in commentList2"
          :key="item.time"
          style="display: flex; margin: 10px 0"
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
              /><span class="nick" style="color: red; font-size: 12px"
                >{{ item.nick }}:
              </span>
              <p
                style="
                  color: #c6c6c6;
                  font-size: 13px;
                  margin-top: 5px;
                  width: 230px;
                "
              >
                {{ item.rootcommentcontent }}
              </p>
            </div>
          </div>
        </el-col>
        <div
          style="
            font-size: 25px;
            color: #fff;
            opacity: 0.7;
            position: fixed;
            right: 20px;
            top: 0px;
          "
          @click="hideCard"
        >
          x
        </div>
      </el-row>
    </el-card>
  </div>
</template>
<script type="text/javascript">
import Lyric from "lyric-parser";
import logo from "../../assets/image/waisheng.jpeg";
// import Scroll from "./scroll.vue";
export default {
  data() {
    return {
      active: "",
      lyric: "",
      currentLyricTitle: "",
      audioFlag: true,
      danquFlag: false,
      audioMedia: "",
      flag: false,
      circleImgFlag: true,
      activeColor: "linear-gradient(#dbdfcc, #5f5f56)",
      cardFlag: false,
      commentList2: [],
      currentTime: 0,
      minArr: [],
      trans: "",
      ind: 0,
      logo,
      playSongs: [],
      playIndexNum: 0,
      playUrl:'',
    };
  },
  created() {
    this.playSongs = this.$route.params.songs;
    this.playIndexNum = this.$route.params.indexNum;
    this.playUrl = this.$route.params.audiourl;
    this.$http
      .getSongsLyric({ songmid: this.$route.params.songmid })
      .then((res) => {
        this.lyric = new Lyric(res.data.lyric);
        this.currentLyricTitle = this.lyric.lines[0].txt;
      });
    this.$http
      .getComment({ id: this.$route.params.songid, bizType: 1 })
      .then((res) => {
        this.commentList2 = res.data.comment.commentlist;
      });
  },
  mounted() {
    this.audioMedia = this.$refs.audioMedia; //获取所有audio对象
    this.audioMedia.autoplay = true;
    
  },
  beforeUpdate() {
    this.$refs.lyricLine.map((v) => {
      let num1 = parseInt(v.dataset.time / 1000);
      this.minArr.push(num1);
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    playAudio() {
      this.audioFlag = true;
      this.audioMedia.play();
      this.circleImgFlag = true;
    },
    pauseAudio() {
      this.audioFlag = false;
      this.audioMedia.pause();
      this.circleImgFlag = false;
    },
    danqu() {
      this.danquFlag = false;
      this.audioMedia.loop = true;
    },
    liebiao() {
      this.danquFlag = true;
    },
    showLyric() {
      if (this.cardFlag == true) return;
      this.flag = true;
      this.activeColor = "linear-gradient(#dbdfcc, #e6c50c)";
    },
    hideLyric() {
      this.flag = false;
      this.activeColor = "linear-gradient(#dbdfcc, #5f5f56)";
    },
    showCard() {
      this.cardFlag = true;
    },
    hideCard() {
      this.cardFlag = false;
    },
    updateTime(e) {
      this.currentTime = parseInt(e.target.currentTime);
      this.$nextTick(() => {
        for (let i = 0; i < this.$refs.lyricLine.length; i++) {
          if (
            this.$refs.lyricLine[i].getAttribute("class").includes("current")
          ) {
            this.ind = this.$refs.lyricLine[i].dataset.index;
            let instance = parseInt(-this.ind * 1.5);
            this.trans = `translateY(${instance}rem)`;
          }
        }
      });
      if (this.$refs.audioMedia.ended == true) {
        this.trans = `translateY(0px)`;
      }
    },
    pre() {
      if(this.playIndexNum == 0) return;
      this.playIndexNum = this.playIndexNum -1;
      this.$refs.audioMedia.load();
      this.trans = `translateY(0px)`;
      this.$http.getSongsPlay({ id: this.playSongs[this.playIndexNum - 1].songmid  }).then((res)=> {
       this.playUrl = res.data[this.playSongs[this.playIndexNum - 1].songmid]
      });
      this.$http
        .getSongsLyric({ songmid: this.playSongs[this.playIndexNum - 1].songmid })
        .then((res) => {
          this.lyric = new Lyric(res.data.lyric);
          this.currentLyricTitle = this.lyric.lines[0].txt;
        });
      this.$http
        .getComment({ id: this.playSongs[this.playIndexNum - 1].songid, bizType: 1 })
        .then((res) => {
          this.commentList2 = res.data.comment.commentlist;
        });
    },
    next() {
      if(this.playIndexNum == this.playSongs.length) return;
      this.playIndexNum  = this.playIndexNum + 1
      this.$refs.audioMedia.load();
      this.trans = `translateY(0px)`;
      this.$http.getSongsPlay({ id: this.playSongs[this.playIndexNum + 1].songmid  }).then((res)=> {
       this.playUrl = res.data[this.playSongs[this.playIndexNum + 1].songmid]
      });
      this.$http
        .getSongsLyric({ songmid: this.playSongs[this.playIndexNum + 1].songmid })
        .then((res) => {
          this.lyric = new Lyric(res.data.lyric);
          this.currentLyricTitle = this.lyric.lines[0].txt;
          console.log(this.lyric);
        });
      this.$http
        .getComment({ id: this.playSongs[this.playIndexNum + 1].songid, bizType: 1 })
        .then((res) => {
          this.commentList2 = res.data.comment.commentlist;
        });
    },
  },
};
</script>
<style lang="less">
.play {
  height: 100%;
  width: 100%;
  font-size: 14px;
}
.active {
  width: 100%;
  display: inline-block;
  background: #e9e5e5;
  color: red;
}
.lyric {
  margin-top: 50px;
  height: 500px;
  width: 100%;
  text-align: center;
  overflow: scroll;
  color: #fff;
  .text {
    opacity: 0.7;
    height: 30px;
    line-height: 30px;
  }
  .current {
    color: rgb(105, 18, 105);
  }
}
.rotateCircle {
  margin-top: 50px;
  height: 550px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    color: rgb(105, 18, 105);
    width: 90%;
    display: flex;
    justify-content: center;
  }
  img {
    width: 50%;
    border-radius: 50%;
  }
  .circleImg {
    animation: rotateCircle 10s linear infinite;
  }
}
.audioBtn {
  width: 90%;
  height: 70px;
  border-top: 1px solid rgb(192, 194, 170);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  .action_btn {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    color: #fff;
    // opacity: 0.5;

    .icon-bofang,
    .icon-icon-,
    .icon-caidan,
    .icon-liebiaoxunhuan {
      font-size: 25px;
    }
  }
}
.playCard {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 500px;
  animation: rise 0.3s linear forwards;
  overflow-y: scroll;
  background: #333;
  opacity: 0.7;
}
@keyframes rotateCircle {
  to {
    transform: rotate(360deg);
  }
}
@keyframes rise {
  from {
    transform: translateY(300px);
  }
  to {
    transform: translateY(0);
  }
}
</style>