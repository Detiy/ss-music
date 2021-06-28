<template>
	<div class="tabberWarp" >
        <ul class="warp">
            <li v-for="(item,index) in tabbarDes" :key="index" :class="{active: $route.path===item.path}" @click="toRoute(item.path)">{{item.txt}}</li>
        </ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
                active:'',
				tabbarDes:[
					{   
                        id:1,
						txt:'首页',
                        path:'/main'
					},				
					{
                        id:2,
						txt:'视频',
                        path:'/mv'
					},
					{
                        id:3,
						txt:'排行榜',
                        path:'/rank'
					},
					{
                        id:4,
						txt:'我的',
                        path:'/user'
					}
				]
			}
		},
		methods:{
			toRoute(path){
                this.$router.replace(path);
            }
		}
	}
</script>
<style lang="less">
    .active{
      width:100%;
      display: inline-block;
      background:#e9e5e5;
      color:red;
    }
    li{
        list-style:none;
    }
	.warp{
		width: 100%;
		border-top: 1px solid #eee;
		background: #fff;
		font-size: 10px;
        li{
            display: inline-block;
            width:25%;
            line-height:40px;
            text-align: center;
        }
	}
	.tabberWarp{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #fff;
        height:40px;
	}
</style>