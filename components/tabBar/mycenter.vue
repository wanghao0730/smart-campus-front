<template>
	<view class="main">
		 <scroll-view class="main_box" scroll-y="true"  @scrolltolower="lower">
			<view class="main_centent">第5个页面(上拉加载更多)</view>	
			<image src="../../static/img/1.jpg" mode="aspectFit"></image>
			<image src="../../static/img/2.jpg" mode="aspectFit"></image>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data() {
			return{
				
			}
		},
		methods: {
			ontrueGetList(){
				uni.showToast({
					title:'第2个页面'
				})
				console.log("加载了第五个页面，可以把网络请求放这里")
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
	.main{background-image: linear-gradient(45deg, #9000ff, #5e00ff);}
	// padding-bottom:120rpx;box-sizing: border-box;重要*************************保证页面底部内容不被隐藏也不会出现多余的滚动条
	.main_box{width:100vw;height: 100vh;padding-bottom:120rpx;box-sizing: border-box;}
	.main_centent{width: 100%;height: 100vh;color: #fff;letter-spacing: 4rpx;display: flex;align-items: center;justify-content: center;}
	image{width:750rpx;height: 750rpx;}
</style>