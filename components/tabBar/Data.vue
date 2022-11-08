<template>
	<view class="main">
		 <scroll-view class="main_box" scroll-y="true"  @scrolltolower="lower">
			<view class="main_centent">第3个页面(上拉加载更多)</view>	
			<image src="../../static/img/7.jpg" mode="aspectFit"></image>
			<image src="../../static/img/8.jpg" mode="aspectFit"></image>
			<view class="" v-for="(item,index) of dataList.message" :key="index">
					<image :src="item.image_src" mode=""></image>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data() {
			return{
				finish:false,
				dataList:{}
			}
		},
		methods: {
			ontrueGetList(){
				if(!this.finish) {
					uni.request({
						url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
						method:'GET'
					}).then(res => {
						const { data } = res[1];
						this.dataList = data;
						//! 请求完毕后切换页面不再请求
						this.finish = true;
						console.log('第一次请求')
					})
				}
				uni.showToast({
					title:'第3个页面'
				})
				
			},
			lower(){
				uni.showToast({
					title:'scroll-view的加载更多'
				})
				console.log("分页数据可以放这里~~~~~~嘿嘿")
			}
		}
	}
</script>

<style lang="scss">
	.main{background-image: linear-gradient(45deg, #f43f3b, #ec008c);}
	// padding-bottom:120rpx;box-sizing: border-box;重要*************************保证页面底部内容不被隐藏也不会出现多余的滚动条
	.main_box{width:100vw;height: 100vh;padding-bottom:120rpx;box-sizing: border-box;}
	.main_centent{width: 100%;height: 100vh;color: #fff;letter-spacing: 4rpx;display: flex;align-items: center;justify-content: center;}
	image{width:750rpx;height: 750rpx;}
</style>
