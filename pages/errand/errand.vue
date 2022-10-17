<template>
	<view class="errand-wrap">
		<map class="contro-map" :longitude="centralLoc.longitude" :latitude="centralLoc.latitude" :show-location="true"
			:enable-scroll="true" :enable-rotate="true" @markertap="handleMarkerTap" @callouttap="handleCallouttTap"
			:markers="markers" id="map" ref="map">
			<!-- 自定义起泡插槽 -->
			<cover-view slot="callout">
				<cover-view class="customCallout" v-for="(item,index) in customCalloutMarkerIds" :key="index"
					:marker-id="item.id">
					<cover-view class="tip-title">
						{{ item.title }}
					</cover-view>
					<cover-view class="tip-btm"></cover-view>
					<cover-view class="callout-img">
						<cover-image :src="item.img" style="width: 100%;height: 100%; border-radius: 50%;">
						</cover-image>
					</cover-view>
					<!-- 下三角 -->
					<cover-view class="tip-btm"></cover-view>
				</cover-view>
			</cover-view>
			<!-- 面板折叠筐 -->
			<view class="select-panel">
				<!-- 用户选择 -->
				<view class="order-type">
					<view class="type-item" v-for="(tItem,tIndex) in orderType" :key="tIndex"
						@click="currentIndex = tIndex">
						<view class="type-text"
							:class="{'active-type-text': currentIndex == tIndex ? 'active-type-text' : ''}">
							{{ tItem.name }}
						</view>
					</view>
				</view>
				<!-- 内容显示 -->
				<view class="location-wrap">
					<swiper @change="change" :current="currentIndex" style="width: 100%;height: 100%;">
						<!-- 显示地理位置的坐标 -->
						<swiper-item class="swiperItem">
							<scroll-view @scrolltolower="lower" style="width: 100%;height: 100%;" scroll-y enable-flex>
								<view class="loc-item" v-for="(locItem,locIndex) in customCalloutMarkerIds" :class="{'active-loc-item':locItem.id === selectAddress.id ? 'active-loc-item' : ''}" :key="locIndex" @click="handleSelect(locItem)">
									<!-- 图片位置 -->
									<view class="left-locImg">
										<u--image :showLoading="true" :src="locItem.img" width="80px" mode="widthFix" height="80px" radius="15" :lazy-load="true"></u--image>
									</view>
									<view class="right-info">
										<view class="title">
											{{ locItem.title }}
										</view>
										<view class="detail">
											广东省东莞市石排镇广东科技学院松山湖校区西门丹鸟驿站我觉得非常不错是是是是是是是是是
										</view>
									</view>
								</view>
							</scroll-view>
						</swiper-item>
						<!-- 帮我买用于记录用户需要获取的地理位置 -->
						<swiper-item class="swiperItem">
							hhh
						</swiper-item>
					</swiper>
				</view>
				<!-- 提示用户下单 -->
				<view class="jump-order">
					<view class="btn-text" @click="jumpOrder">去下单</view>
				</view>
			</view>
		</map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//初始中心经纬度
				centralLoc: {
					longitude: '113.975432',
					latitude: '23.06261',
				},
				//订单类型
				orderType: [{
						id: 1,
						name: '帮我送',
						orderType: 0
					},
					{
						id: 2,
						name: '帮我买',
						orderType: 1
					}
				],
				//默认显示的选中下标
				currentIndex: 0,
				markers: [],
				//用于遍历每个marker位置上方的气泡
				customCalloutMarkerIds: [],
				//用于显示的图片
				urls: [
					'https://touch-1313966737.cos.ap-guangzhou.myqcloud.com/img/banner/swiper-1.jpg'
				],
				orderTypeList: [{
						name: '帮我送'
					},
					{
						name: '帮我买'
					}
				],
				//用户选择的地址
				selectAddress: {}
			}
		},
		onLoad() {
			this.initMap()
		},
		computed:{
			activeLoc(locItem) {
				// locItem.id === selectAddress.id ? 'active-loc-item' : ''
				console.log(locItem)
				return''
			}
		},
		methods: {
			//初始化map
			initMap() {
				let markers = [{
						id: 1,
						latitude: 23.06632,
						longitude: 113.974258,
						zIndex: 1,
						iconPath: '/static/image/store.png',
						width: 30,
						height: 30,
						customCallout: {
							display: 'BYCLICK', //设置点击显示
							anchorX: 0,
							anchorY: 0
						}
					},
					{
						id: 2,
						latitude: 23.065556,
						longitude: 113.978119,
						zIndex: 2,
						iconPath: '/static/image/store.png',
						width: 30,
						height: 30,
						customCallout: {
							display: 'BYCLICK', //设置点击显示
							anchorX: 0,
							anchorY: 0
						}
					},
					{
						id: 3,
						latitude: 23.065562,
						longitude: 113.978026,
						zIndex: 3,
						iconPath: '/static/image/store.png',
						width: 30,
						height: 30,
						customCallout: {
							display: 'BYCLICK', //设置点击显示
							anchorX: 0,
							anchorY: 0
						}
					}
				]
				// 获取当前手机型号 不同平台兼容处理
				// uni.getSystemInfo({
				// 	success(res) {
				// 		// res.platform - 客户端平台，值域为：ios、android、mac（3.1.10+）、windows（3.1.10+）、linux（3.1.10+）
				// 		// 苹果手机的数字使用callout，安卓的数字使用label
				// 		if (res.platform == 'ios') {
				// 			markObj.callout = callout
				// 		} else {
				// 			markObj.label = label
				// 		}
				// 	}
				// })
				this.markers = markers
				this.customCalloutMarkerIds.push({
					id: 1,
					title: '丹鸟驿站',
					img: 'https://touch-1313966737.cos.ap-guangzhou.myqcloud.com/img/banner/swiper-1.jpg'
				}, {
					id: 2,
					title: '菜鸟驿站',
					img: 'https://touch-1313966737.cos.ap-guangzhou.myqcloud.com/img/banner/swiper-1.jpg'
				}, {
					id: 3,
					title: '顺丰快递',
					img: 'https://touch-1313966737.cos.ap-guangzhou.myqcloud.com/img/banner/swiper-1.jpg'
				})
			},
			//处理类型切换
			changeType(item) {
				console.log(item)
			},
			//处理用户点击marker
			handleMarkerTap(event) {
				console.log(event)
				this.markers.forEach(item => {
					item.customCallout.display = 'BYCLICK'
					if (item.id === event.markerId) {
						// item.customCallout.display = item.customCallout.display === 'BYCLICK' ? 'ALWAYS' :
						// 	'BYCLICK'
						item.customCallout.display = 'ALWAYS'
						//将用户选择的地址存储
						this.selectAddress = this.customCalloutMarkerIds[event.markerId - 1]
					}
				})
			},
			//处理用点击callouttap
			handleCallouttTap(event) {
				console.log(event)
				this.customCalloutMarkerIds.forEach(i => {
					if (event.markerId === i.id) {
						console.log(i)
						uni.previewImage({
							urls: [i.img],
							showmenu: true,
							success(res) {
								console.log(res)
							}
						})
					}
				})
				// this.markers.forEach(item => {
				// 	console.log({ item })
				// })
			},
			change(event) {
				//改变默认的选中下标
				this.currentIndex = event.detail.current
			},
			//内容到底
			lower(event) {
				console.log('到底')
			},
			//用户选择地址
			handleSelect(address) {
				this.selectAddress = address
				//显示对应的地理位置store
				this.handleMarkerTap({...this.selectAddress,markerId:this.selectAddress.id})
			},
			//跳转页面
			jumpOrder() {
				console.log("点击")
				//判断用户有没有选择地址
				if (Object.keys(this.selectAddress).length === 0) {
					console.log('请选择')
					return getApp().globalData.global_Toast(true,'请选择地址',(res) => { console.log(res) })
				}
				//将用户选择的地址跳转传递
				uni.navigateTo({
					url:`childCmps/errandOrder`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.contro-map {
		width: 100vw;
		height: 100vh;
		position: relative;

		.customCallout {
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.tip-btm {
				border-left: 15rpx solid transparent;
				border-right: 15rpx solid transparent;
				border-top: 13rpx solid #fff;
				// border-color:#fff #fff transparent transparent;
			}

			.tip-title {
				background-color: black;
				padding: 10rpx 30rpx;
				text-align: center;
				color: #ffffff;
				font-size: 18rpx;
				border-radius: 15rpx;
				box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(85, 85, 85, 1);
			}

			.callout-img {
				width: 60rpx;
				padding: 10rpx;
				height: 60rpx;
				border-radius: 50%;
				position: relative;
				background-color: $background-color;
				box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(85, 85, 85, 1);
			}
		}

		// 选择面板

		.select-panel {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 700rpx;
			background-color: $bk_color;
			border-top-left-radius: 30rpx;
			border-top-right-radius: 30rpx;

			.order-type {
				width: 100%;
				height: 100rpx;
				display: flex;
				background-color: #fff;

				.type-item {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					flex: 1;

					.type-text {
						padding-bottom: 10rpx;
						color: #7D6E83;
					}

					//选中样式
					.active-type-text {
						color: $background-color;
						border-bottom: 6rpx solid $background-color;
						border-bottom-left-radius: 10rpx;
						border-bottom-right-radius: 10rpx;
						transition: all 1s;
						font-weight: bold;
					}
				}
			}

			//内容面板
			.location-wrap {
				width: 100%;
				padding: 10rpx 30rpx;
				height: 500rpx;

				.swiperItem {
					width: 100%;
					box-sizing: border-box;
					padding: 5rpx 20rpx 20rpx 20rpx;
				}

				.loc-item {
					padding: 20rpx 30rpx;
					border: 2rpx solid $gray_color;
					border-radius: 30rpx;
					display: flex;
					align-items: flex-start;
					background-color: #fff;
					margin-bottom: 20rpx;
				}
				//选中地址
				.active-loc-item {
					border: 5rpx dashed #D58BDD;
					transition: border 3ms;
				}

				.right-info {
					padding-left: 10rpx;
					display: flex;
					flex-direction: column;
					flex-wrap: wrap;

					.title {
						font-weight: 700;
						letter-spacing: 2rpx;
						font-size: 30rpx;
					}

					.detail {
						font-size: 25rpx;
						font-weight: normal;
						color: $gray_color;
						@include clamp2;
					}
				}
			}
			//提示用户提交
			.jump-order {
				height: 100rpx;
				padding: 0 30rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				.btn-text {
					background-color: $background-color;
					width: 400rpx;
					height: 70rpx;
					border-radius: 50rpx;
					line-height: 70rpx;
					text-align: center;
					color: #fff;
					font-weight: 600;
					letter-spacing: 4rpx;
				}
			}
		}
	}
</style>
