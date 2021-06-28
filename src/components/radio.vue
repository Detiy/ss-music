<template>
  <div>
    <el-container class="_container">
      <i class="el-icon-arrow-left" @click="back"></i>
      <el-header> 电台 </el-header>
    </el-container>
    <ul class="titBox">
      <li
        v-for="item in radios"
        :key="item.id"
        class="titRadio"
        @click="tab(item.id)"
      >
        {{ item.title }}
      </li>
    </ul>
    <ul class="radioList" v-show="type == '48'">
      <li
        v-for="item in radios[0].list"
        :key="item.id"
        class="radioSonList"
        @click="radioDetail(item.id)"
      >
        <img :src="item.pic_url" alt="" />
        <i class="iconfont icon-zuijinbofang fuhao"></i>
        <p class="radioSonTit">
          <span>频道：{{ item.title }}</span>
          <span>收听次数：{{ item.listenNum }}</span>
        </p>
        <p class="radioListenPeopleNum">{{ item.listenDesc }}</p>
      </li>
    </ul>
    <ul class="radioList" v-show="type == '44'">
      <li
        v-for="item in radios[1].list"
        :key="item.id"
        class="radioSonList"
        @click="radioDetail(item.id)"
      >
        <img :src="item.pic_url" alt="" />
        <i class="iconfont icon-zuijinbofang fuhao"></i>
        <p class="radioSonTit">
          <span>频道：{{ item.title }}</span>
          <span>收听次数：{{ item.listenNum }}</span>
        </p>
        <p class="radioListenPeopleNum">{{ item.listenDesc }}</p>
      </li>
    </ul>
    <ul class="radioList" v-show="type == '47'">
      <li
        v-for="item in radios[2].list"
        :key="item.id"
        class="radioSonList"
        @click="radioDetail(item.id)"
      >
        <img :src="item.pic_url" alt="" />
        <i class="iconfont icon-zuijinbofang fuhao"></i>
        <p class="radioSonTit">
          <span>频道：{{ item.title }}</span>
          <span>收听次数：{{ item.listenNum }}</span>
        </p>
        <p class="radioListenPeopleNum">{{ item.listenDesc }}</p>
      </li>
    </ul>
    <ul class="radioList" v-show="type == '54'">
      <li
        v-for="item in radios[3].list"
        :key="item.id"
        class="radioSonList"
        @click="radioDetail(item.id)"
      >
        <img :src="item.pic_url" alt="" />
        <i class="iconfont icon-zuijinbofang fuhao"></i>
        <p class="radioSonTit">
          <span>频道：{{ item.title }}</span>
          <span>收听次数：{{ item.listenNum }}</span>
        </p>
        <p class="radioListenPeopleNum">{{ item.listenDesc }}</p>
      </li>
    </ul>
    <ul class="radioList" v-show="type == '46'">
      <li
        v-for="item in radios[4].list"
        :key="item.id"
        class="radioSonList"
        @click="radioDetail(item.id)"
      >
        <img :src="item.pic_url" alt="" />
        <i class="iconfont icon-zuijinbofang fuhao"></i>
        <p class="radioSonTit">
          <span>频道：{{ item.title }}</span>
          <span>收听次数：{{ item.listenNum }}</span>
        </p>
        <p class="radioListenPeopleNum">{{ item.listenDesc }}</p>
      </li>
    </ul>
    <ul class="radioList" v-show="type == '49'">
      <li
        v-for="item in radios[5].list"
        :key="item.id"
        class="radioSonList"
        @click="radioDetail(item.id)"
      >
        <img :src="item.pic_url" alt="" />
        <i class="iconfont icon-zuijinbofang fuhao"></i>
        <p class="radioSonTit">
          <span>频道：{{ item.title }}</span>
          <span>收听次数：{{ item.listenNum }}</span>
        </p>
        <p class="radioListenPeopleNum">{{ item.listenDesc }}</p>
      </li>
    </ul>
    <ul class="radioList" v-show="type == '53'">
      <li
        v-for="item in radios[6].list"
        :key="item.id"
        class="radioSonList"
        @click="radioDetail(item.id)"
      >
        <img :src="item.pic_url" alt="" />
        <i class="iconfont icon-zuijinbofang fuhao"></i>
        <p class="radioSonTit">
          <span>频道：{{ item.title }}</span>
          <span>收听次数：{{ item.listenNum }}</span>
        </p>
        <p class="radioListenPeopleNum">{{ item.listenDesc }}</p>
      </li>
    </ul>
    <ul class="radioList" v-show="type == '57'">
      <li
        v-for="item in radios[7].list"
        :key="item.id"
        class="radioSonList"
        @click="radioDetail(item.id)"
      >
        <img :src="item.pic_url" alt="" />
        <i class="iconfont icon-zuijinbofang fuhao"></i>
        <p class="radioSonTit">
          <span>频道：{{ item.title }}</span>
          <span>收听次数：{{ item.listenNum }}</span>
        </p>
        <p class="radioListenPeopleNum">{{ item.listenDesc }}</p>
      </li>
    </ul>
    <ul class="radioList" v-show="type == '51'">
      <li
        v-for="item in radios[8].list"
        :key="item.id"
        class="radioSonList"
        @click="radioDetail(item.id)"
      >
        <img :src="item.pic_url" alt="" />
        <i class="iconfont icon-zuijinbofang fuhao"></i>
        <p class="radioSonTit">
          <span>频道：{{ item.title }}</span>
          <span>收听次数：{{ item.listenNum }}</span>
        </p>
        <p class="radioListenPeopleNum">{{ item.listenDesc }}</p>
      </li>
    </ul>
    <ul class="radioList" v-show="type == '101'">
      <li
        v-for="item in radios[9].list"
        :key="item.id"
        class="radioSonList"
        @click="radioDetail(item.id)"
      >
        <img :src="item.pic_url" alt="" />
        <i class="iconfont icon-zuijinbofang fuhao"></i>
        <p class="radioSonTit">
          <span>频道：{{ item.title }}</span>
          <span>收听次数：{{ item.listenNum }}</span>
        </p>
        <p class="radioListenPeopleNum">{{ item.listenDesc }}</p>
      </li>
    </ul>
    <ul class="radioList" v-show="type == '100'">
      <li
        v-for="item in radios[10].list"
        :key="item.id"
        class="radioSonList"
        @click="radioDetail(item.id)"
      >
        <img :src="item.pic_url" alt="" />
        <i class="iconfont icon-zuijinbofang fuhao"></i>
        <p class="radioSonTit">
          <span>频道：{{ item.title }}</span>
          <span>收听次数：{{ item.listenNum }}</span>
        </p>
        <p class="radioListenPeopleNum">{{ item.listenDesc }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SongDetail",
  data() {
    return {
      radios: [],
      type: "48",
    };
  },
  mounted() {
    this.$http.getRadio().then((res) => {
      this.radios = res.data;
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    tab(id) {
      this.type = id;
    },
    radioDetail(id) {
      // this.$router.push(`/radiodetail`);
      this.$router.push({
        path: `/radiodetail`,
        query: { id: id },
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
.titBox {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .titRadio {
    width: 20%;
    height: 50px;
    background: rgb(213, 233, 212);
    margin: 5px;
    line-height: 50px;
    text-align: center;
    border-radius: 10px;
  }
  .titRadio:hover {
    cursor: pointer;
  }
}
.radioList {
  margin-top: 150px;

  img {
    height: 150px;
    width: 150px;
  }
  .fuhao {
    margin-top: 110px;
    margin-left: -50px;
    font-size: 30px;
    color: #fff;
  }
  .radioSonList {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
    .radioListenPeopleNum {
      color: rgb(177, 25, 25);
    }
    .radioSonTit {
      display: flex;
      flex-direction: column;
      height: 150px;
      justify-content: space-between;
      margin-left: 10px;
      span:nth-child(2) {
        color: #c6c6c6;
        font-size: 12px;
      }
    }
  }
}
</style>