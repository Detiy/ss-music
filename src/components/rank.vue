<template>
  <div class="rankList">
    <el-container class="_container">
      <i class="el-icon-arrow-left" @click="back"></i>
      <el-header> Music </el-header>
    </el-container>
    <h3>
      <i
        class="iconfont icon-paihangbang1"
        style="color: #d4237a; font-size: 30px"
      ></i>
      <!-- {{ rankListT[0].title }} -->
      巅峰榜
    </h3>
    <el-row class="rank" v-for="item in rankListT[0].list" :key="item.topId">
      <el-col :span="24" class="rankBox">
        <el-card
          :body-style="{ padding: '10px', display: 'flex' }"
          shadow="hover"
        >
          <img
            :src="item.picUrl"
            class="image"
            style="height: 100px; width: 100px"
            @click="toRankDetail(item.topId)"
          />
          <div class="rankIntro" @click="toRankDetail(item.topId)">
            <p v-for="txt in item.song" :key="txt.rank">
              <span style="width: 200px; text-align: left">
                {{ txt.rank }}、{{ txt.title }}</span
              >
              <span style="width: 130px; text-align: right; color: #c6c6c6">{{
                txt.singerName
              }}</span>
            </p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <h3>
      <i
        class="iconfont icon-paihangbang1"
        style="color: #13227a; font-size: 30px"
      ></i>
      <!-- {{ rankListT[1].title }} -->
      地区榜
    </h3>
    <el-row class="rank" v-for="item in rankListT[1].list" :key="item.topId">
      <el-col :span="24" class="rankBox">
        <el-card
          :body-style="{ padding: '10px', display: 'flex' }"
          shadow="hover"
        >
          <img
            :src="item.picUrl"
            class="image"
            style="height: 100px; width: 100px"
            @click="toRankDetail(item.topId)"
          />
          <div class="rankIntro" @click="toRankDetail(item.topId)">
            <p v-for="txt in item.song" :key="txt.rank">
              <span style="width: 100px; text-align: left">{{ txt.rank }}、{{
                txt.title
              }}</span>
              <span style="width: 130px; text-align: right; color: #c6c6c6">{{
                txt.singerName
              }}</span>
            </p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <h3>
      <i
        class="iconfont icon-paihangbang1"
        style="color: #1296db; font-size: 30px"
      ></i>
      <!-- {{ rankListT[2].title }} -->
      特色榜
    </h3>
    <el-row class="rank" v-for="item in rankListT[2].list" :key="item.topId">
      <el-col :span="24" class="rankBox">
        <el-card
          :body-style="{ padding: '10px', display: 'flex' }"
          shadow="hover"
        >
          <img
            :src="item.picUrl"
            class="image"
            style="height: 100px; width: 100px"
            @click="toRankDetail(item.topId)"
          />
          <div class="rankIntro" @click="toRankDetail(item.topId)">
            <p v-for="txt in item.song" :key="txt.rank">
              <span style="width: 100px; text-align: left">{{ txt.rank }}、{{
                txt.title
              }}</span>
              <span style="width: 130px; text-align: right; color: #c6c6c6">{{
                txt.singerName
              }}</span>
            </p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <h3>
      <i
        class="iconfont icon-paihangbang1"
        style="color: #f4ea2a; font-size: 30px"
      ></i>
      <!-- {{ rankListT[3].title }} -->
      全球榜
    </h3>
    <el-row class="rank" v-for="item in rankListT[3].list" :key="item.topId">
      <el-col :span="24" class="rankBox">
        <el-card
          :body-style="{ padding: '10px', display: 'flex' }"
          shadow="hover"
        >
          <img
            :src="item.picUrl"
            class="image"
            style="height: 100px; width: 100px"
            @click="toRankDetail(item.topId)"
          />
          <div class="rankIntro" @click="toRankDetail(item.topId)">
            <p v-for="txt in item.song" :key="txt.rank">
              <span style="width: 100px; text-align: left">{{ txt.rank }}、{{
                txt.title
              }}</span>
              <span style="width: 130px; text-align: right; color: #c6c6c6">{{
                txt.singerName
              }}</span>
            </p>
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
      rankListT: "",
    };
  },
  created() {
    this.$http.getRank({ showDetail: 1 }).then((res) => {
      this.rankListT = res.data;
    });
  },
  mounted() {
    // this.$http.getRankDetail({ id: 3, pageSize: 3 }).then((res) => {
    //   this.rankList0 = res.data.list;
    // });
    // this.$http.getRankDetail({ id: 4, pageSize: 3 }).then((res) => {
    //   this.rankList1 = res.data.list;
    // });
    // this.$http.getRankDetail({ id: 5, pageSize: 3 }).then((res) => {
    //   this.rankList2 = res.data.list;
    // });
    // this.$http.getRankDetail({ id: 6, pageSize: 3 }).then((res) => {
    //   this.rankList3 = res.data.list;
    // });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    toRankDetail(id) {
      this.$http.getRankDetail({ id: id, pageSize: 20 }).then((res) => {
        this.$http.getSongsPlay({ id: res.data.list[0].mid }).then((x) => {
          this.$router.push({
            name: "play",
            params: {
              songmid: res.data.list[0].mid,
              audiourl: x.data[res.data.list[0].mid],
              songid:res.data.list[0].songId,
            },
          });
        });
      });
    },
  },
};
</script>

<style lang="less">
.rankList {
  width: 100%;
  margin-bottom: 30px;
  font-size: 12px;
  overflow: hidden;
  ._container {
    background: #333;
    color: #fff;
  }
  .el-card__body {
    align-items: center;
    justify-content: space-between;
  }
}
h3 {
  height: 60px;
  width: 100%;
  text-align: left;
  margin: 0 0 5px 5px;
  display: flex;
  align-items: center;
}
.el-row {
  margin-bottom: 10px;
}
.el-icon-arrow-left {
  position: fixed;
  top: 20px;
  left: 20px;
}
.el-container {
  margin-bottom: 0;
}
.rankIntro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 240px;
  margin-left: 10px;
  p {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    span {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>