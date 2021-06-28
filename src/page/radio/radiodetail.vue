<template>
  <div>
    <h3>电台详情</h3>
  </div>
</template>

<script>
export default {
  name: "radioDetail",
  data() {
    return {};
  },
  mounted() {
    // console.log(this.$route.params.data);
    this.$http.getRadioSong({ id: this.$route.query.id }).then((res) => {
      console.log(res);
    });
    
  },
};
</script>

<style lang="less" scoped>
</style>