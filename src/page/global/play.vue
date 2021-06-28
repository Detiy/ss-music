<template>
  <div class="play">
    <el-container class="_container">
      <i
        class="el-icon-arrow-left"
        @click="back"
        style="color: #fff; font-size: 30px"
      ></i>
    </el-container>
    <Scroll class="lyric-wrapper" ref="lyricList">
      <div class="lyric">
        <li
          v-for="(line, index) in lyric.lines"
          ref="lyricLine"
          :class="{ current: currentLineNum === index }"
          class="text"
          :key="index"
        >
          {{ line.txt }}
        </li>
      </div>
    </Scroll>
    <div class="audioBtn">
      <audio ref="audioMedia" :src="this.$route.params.audiourl"></audio>
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
        <div class="iconfont icon-shangyishoushangyige"></div>
        <div class="middle">
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
        </div>
        <div class="iconfont icon-xiayigexiayishou"></div>
        <div class="iconfont icon-fen_xiang"></div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import Lyric from "lyric-parser";
import Scroll from "./scroll.vue";
export default {
  data() {
    return {
      active: "",
      lyric: "",
      currentLyric: "",
      audioFlag: true,
      danquFlag: false,
      audioMedia: "",
      currentLineNum: 0,
    };
  },
  components: {
    Scroll,
  },
  created() {
    this.getLyric();
  },
  mounted() {
    this.audioMedia = this.$refs.audioMedia; //获取所有audio对象
    this.audioMedia.autoplay = true;
  },
  // computed() {
  //   if (this.audioMedia.ended == true) {
  //     this.audioMedia.pause();
  //   }
  // },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getLyric() {
      this.$http
        .getSongsLyric({ songmid: this.$route.params.songmid })
        .then((res) => {
          this.lyric = new Lyric(res.data.lyric, this.handleLyric);
          // console.log(this.lyric);
        });
    },
    playAudio() {
      this.audioFlag = true;
      this.audioMedia.play();
    },
    pauseAudio() {
      let audioMedia = this.$refs.audioMedia; //获取所有audio对象
      this.audioFlag = false;
      audioMedia.pause();
      console.log(this.audioFlag);
    },
    danqu() {
      this.danquFlag = false;
      this.audioMedia.loop = true;
    },
    liebiao() {
      this.danquFlag = true;
    },
    handleLyric({lineNum}) {
      this.currentLineNum = lineNum;
      // 若当前行大于5,开始滚动,以保歌词显示于中间位置
      if (lineNum > 5) {
        let lineEl = this.$refs.lyricLine[lineNum - 5];
        // 结合better-scroll，滚动歌词
        this.$refs.lyricList.scrollToElement(lineEl, 1000);
      } else {
        this.$refs.lyricList.scrollToElement(0, 0, 1000);
      }
    },
  },
};
</script>
<style lang="less">
.play {
  height: 100%;
  width: 100%;
  background: url("../../assets/image/songBg.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}
._container {
  background: #85a58e;
}
.active {
  width: 100%;
  display: inline-block;
  background: #e9e5e5;
  color: red;
}
.lyric {
  margin-top: 50px;
  height: 550px;
  width: 100%;
  text-align: center;
  overflow: scroll;
  .text {
    opacity: 0.7;
  }
  .current {
    color: #fff;
  }
}
.audioBtn {
  width: 90%;
  height: 70px;
  border-top: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  .action_btn {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    color: #fff;
    opacity: 0.5;
    .icon-bofang {
      font-size: 25px;
    }
    .icon-icon- {
      font-size: 25px;
    }
    .icon-fen_xiang {
      font-size: 25px;
    }
    .icon-liebiaoxunhuan {
      font-size: 25px;
    }
  }
}
</style>