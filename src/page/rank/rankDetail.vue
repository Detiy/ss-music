<template>
    <div>

    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
      this.$http.getRankDetail({id:4,pageSize:20}).then(res=>{
        console.log(res);
      })
    },
}
</script>

<style lang="less" scoped>

</style>