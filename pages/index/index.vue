<template>
	<view class="app-wrap">
		<view class="bk-fix"></view>
		<!-- 自定义导航 -->
		<NavBar navBk="rgb(164,147,255)">
			<template #navLeft>
				<view style="color:#fff;font-weight: 500;letter-spacing: 2px;">
					首页
				</view>
			</template>
		</NavBar>
		<view class="content">
			<!-- 应用列表 -->
			<view class="samrt-apply common-box">
				<view class="common-title">智慧应用</view>
				<view class="app-content">
					<view class="app-item" v-for="item in applList" :key="item.id">
						<image :src="item.icon" class="icon"></image>
						<text>{{ item.name }}</text>
					</view>
				</view>
			</view>
			<!-- 图书推荐 -->
			<view class="book-rec common-box">
				<view class="common-title">每日阅读</view>
				<view class="book-content">
					<u-scroll-list :indicator="true" indicatorColor="#fff0f0" indicatorActiveColor="#A493FF">
						<view class="scroll-list" style="flex-direction: row;">
							<view class="scroll-list__goods-item" v-for="i in 5" :key="i">
								<image class="scroll-list__goods-item__image"
									src="https://cdn.uviewui.com/uview/goods/1.jpg"></image>
								<text class="scroll-list__goods-item__text">美丽人生图书</text>
							</view>
							<view class="scroll-list__show-more">
								<text class="scroll-list__show-more__text">查看更多</text>
								<u-icon name="arrow-leftward" color="#ffffff" size="12"></u-icon>
							</view>
						</view>
					</u-scroll-list>
				</view>
			</view>
			<!-- 校园活动/新闻 -->
			<view class="news common-box">
				<!-- <view class="common-title">宣传通告</view> -->
				<view class="news-content">
					<u-tabs :list="newsList" lineWidth="30" lineColor="#A493FF"
						:activeStyle="{color: '#303133',fontWeight: 'bold',transform: 'scale(1.05)'}"
						:inactiveStyle="{ color: '#606266',transform: 'scale(1)'}"
						itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" :current="currentIndex" @click="clickTabs">
					</u-tabs>
					<view class="news-swiper">
						<swiper @change="change" :current="currentIndex" style="width: 100%;height: 100%;">
							<!-- 显示地理位置的坐标 -->
							<swiper-item class="swiperItem" v-for="item in 4" :key="item">
								<scroll-view @scrolltolower="lower" style="width: 100%;height: 100%;" scroll-y
									enable-flex>
									<view class="news-item" v-for="i in 5" :key="i">
										<u--image src="https://www.gdust.edu.cn/e/upload/s1/fck/image/2016/12/06/xyfc1.jpg" mode="scaleToFill" radius="5" :lazy-load="true" shape="square" :showLoading="true" width="65px" height="65px"></u--image>
										<view class="news-desc">
											<view class="title">
												我校召开党委扩大会议深入学习宣传贯彻党的二十大精神
											</view>
											<view class="time">
												发布日期: 2022-11-04
											</view>
										</view>
									</view>
								</scroll-view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				//应用列表
				applList: [{
						id: 1,
						icon: '/static/image/appl/ask.png',
						name: '请假审批'
					},
					{
						id: 2,
						icon: '/static/image/appl/library.png',
						name: '空闲教室'
					},
					{
						id: 3,
						icon: '/static/image/appl/activity.png',
						name: '社团活动'
					},
					{
						id: 4,
						icon: '/static/image/appl/newspaper.png',
						name: '校园活动'
					},
					{
						id: 5,
						icon: '/static/image/appl/report.png',
						name: '疫情上报'
					},
					{
						id: 3,
						icon: '/static/image/appl/mask.png',
						name: '风险查询'
					},
				],
				newsList: [
					{id:1,name: '校园动态'}, 
					{id:2,name: '学校要闻'}, 
					{id:3,name: '通知广告'}, 
					{id:4,name: '媒体资讯'},
				],
				//控制当前swiper显示位置
				currentIndex: 0,
			}
		},
		methods: {
			//tabs点击时获取用户点击的下标
			clickTabs(event) {
				this.currentIndex = event.index
				console.log(event)
			},
			//swiper滑动切换
			change(event) {
				console.log(event)
				this.currentIndex = event.detail.current
			},
			//scroll到底加载更多
			lower() {
				console.log("scroll-view到底触发")
			},
			
		}
	}
</script>

<style scoped lang="scss">
	.app-wrap {
		width: 100%;
		height: 100%;
		position: relative;

		.bk-fix {
			width: 100%;
			height: 450rpx;
			background-color: $background-color;
			border-bottom-left-radius: 50rpx;
			border-bottom-right-radius: 50rpx;
		}

		.content {
			width: 100%;
			margin-top: 30rpx;
			padding: 0 30rpx;

			//公共样式
			.common-box {
				width: 100%;
				padding: 20rpx 20rpx;
				background-color: #fff;
				border-radius: 20rpx;
				margin-bottom: 30rpx;
			}

			.common-title {
				display: inline-block;
				font-weight: bolder;
				font-size: 35rpx;
				padding-bottom: 10rpx;
				margin-bottom: 20rpx;

				&::after {
					content: '';
					width: 40%;
					height: 1px;
					display: block;
					margin: 0 auto;
					border-bottom: 2px solid #A493FF;
					padding: 1px;
					border-radius: 80%;
				}
			}

			//智慧应用
			.samrt-apply {
				.app-content {
					display: flex;
					flex-wrap: wrap;
					justify-content: flex-start;

					.app-item {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						font-size: 25rpx;
						width: 24%;
						margin-bottom: 25rpx;

						&:not(:nth-child(4n)) {
							margin-right: calc(4% / 3);
						}

						.icon {
							width: 80rpx;
							height: 80rpx;
							margin-bottom: 10rpx;
						}
					}
				}
			}
			//宣传通告
			.news {
				.news-swiper {
					width: 100%;
					// padding: 0rpx 30rpx;
					height: 600rpx;
					.swiperItem {
						width: 100%;
						box-sizing: border-box;
						// padding: 5rpx 20rpx 10rpx 20rpx;
						padding: 20rpx 20rpx;
						.news-item {
							display: flex;
							margin-bottom: 20rpx;
							padding-bottom: 30rpx;
							border-bottom: 1px solid rgb(214, 215, 217);
							.news-desc {
								margin-left: 20rpx;
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								.title {
									font-weight: bolder;
									font-size: 28rpx;
									display: -webkit-box;
									-webkit-box-orient: vertical;
									-webkit-line-clamp: 2;
									overflow: hidden;
								}
								.time {
									font-size: 20rpx;
									color: $gray_color;
								}
							}
						}
					}
				}
			}

			//图书阅读
			.book-rec {
				.scroll-list {
					display: flex;

					&__goods-item {
						display: flex;
						flex-direction: column;
						margin-right: 20px;


						&__image {
							width: 65px;
							height: 65px;
							border-radius: 4px;
						}

						&__text {
							// color: #A493FF;
							text-align: center;
							font-size: 12px;
							margin-top: 5px;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 1;
							overflow: hidden;
						}
					}

					&__show-more {
						display: flex;
						flex-direction: column;
						background-color: #A493FF;
						border-radius: 3px;
						padding: 3px 6px;
						align-items: center;

						&__text {
							font-size: 12px;
							width: 12px;
							color: #ffffff;
							line-height: 16px;
						}
					}
				}
			}
		}
	}
</style>
