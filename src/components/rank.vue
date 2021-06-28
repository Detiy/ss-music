<template>
  <div class="rankList">
    <el-container class="_container">
      <i class="el-icon-arrow-left" @click="back"></i>
      <el-header> susuMusic </el-header>
    </el-container>
    <h3>
      <i
        class="iconfont icon-paihangbang1"
        style="color: #d4237a; font-size: 30px"
      ></i
      >{{ rankListT[0].title }}
    </h3>
    <el-row class="rank" v-for="item in rankList0" :key="item.topId">
      <el-col :span="24" class="rankBox">
        <el-card
          :body-style="{ padding: '10px', display: 'flex' }"
          shadow="hover"
        >
          <img
            :src="item.cover"
            class="image"
            style="height: 50px; width: 50px"
          />
          <div style=" margin-left: 20px">
            <p><span>歌曲名称：</span>{{ item.name }}</p>
            <p><span>发布时间：</span>{{ item.time_public }}</p>
            <p><span>榜单排名：</span>{{ item.rank }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <h3>
      <i
        class="iconfont icon-paihangbang1"
        style="color: #13227a; font-size: 30px"
      ></i
      >{{ rankListT[1].title }}
    </h3>
    <el-row class="rank" v-for="item in rankList1" :key="item.topId">
      <el-col :span="24" class="rankBox">
        <el-card
          :body-style="{ padding: '10px', display: 'flex' }"
          shadow="hover"
        >
          <img
            :src="item.cover"
            class="image"
            style="height: 50px; width: 50px"
          />
          <div style="margin-left: 20px">
            <p><span>歌曲名称：</span>{{ item.name }}</p>
            <p><span>发布时间：</span>{{ item.time_public }}</p>
            <p><span>榜单排名：</span>{{ item.rank }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <h3>
      <i
        class="iconfont icon-paihangbang1"
        style="color: #1296db; font-size: 30px"
      ></i
      >{{ rankListT[2].title }}
    </h3>
    <el-row class="rank" v-for="item in rankList2" :key="item.topId">
      <el-col :span="24" class="rankBox">
        <el-card
          :body-style="{ padding: '10px', display: 'flex' }"
          shadow="hover"
        >
          <img
            :src="item.cover"
            class="image"
            style="height: 50px; width: 50px"
          />
          <div style="margin-left: 20px">
            <p><span>歌曲名称：</span>{{ item.name }}</p>
            <p><span>发布时间：</span>{{ item.time_public }}</p>
            <p><span>榜单排名：</span>{{ item.rank }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <h3>
      <i
        class="iconfont icon-paihangbang1"
        style="color: #f4ea2a; font-size: 30px"
      ></i
      >{{ rankListT[3].title }}
    </h3>
    <el-row class="rank" v-for="item in rankList3" :key="item.topId">
      <el-col :span="24" class="rankBox">
        <el-card
          :body-style="{ padding: '10px', display: 'flex' }"
          shadow="hover"
        >
          <img
            :src="item.cover"
            class="image"
            style="height: 50px; width: 50px"
          />
          <div style=" margin-left: 20px">
            <p><span>歌曲名称：</span>{{ item.name }}</p>
            <p><span>发布时间：</span>{{ item.time_public }}</p>
            <p><span>榜单排名：</span>{{ item.rank }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "rank",
  data() {
    return {
      rankList0: [],
      rankList1: [],
      rankList2: [],
      rankList3: [],
      rankListT: "",
    };
  },
  mounted() {
    this.$http.getRank().then((res) => {
      this.rankListT = res.data;
    });
    this.$http.getRankDetail({ id: 3, pageSize: 3 }).then((res) => {
      this.rankList0 = res.data.list;
    });
    this.$http.getRankDetail({ id: 4, pageSize: 3 }).then((res) => {
      this.rankList1 = res.data.list;
    });
    this.$http.getRankDetail({ id: 5, pageSize: 3 }).then((res) => {
      this.rankList2 = res.data.list;
    });
    this.$http.getRankDetail({ id: 6, pageSize: 3 }).then((res) => {
      this.rankList3 = res.data.list;
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less">
.rankList {
  width: 100%;
  margin: 0 auto;
  font-size: 12px;
  ._container {
    background:#333;
    color:#fff;
}
}
h3 {
  width: 100%;
  text-align: left;
}
.el-row {
  margin-bottom: 30px;
}
.el-icon-arrow-left {
  position: fixed;
  top: 20px;
  left: 20px;
}
.el-container {
  margin-bottom: 0;
}
</style>