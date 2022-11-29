<template>
	<view class="order-wrap">
		<!-- 自定义导航 -->
		<NavBar navBk="rgb(164,147,255)">
			<template #navLeft>
				<view style="color:#fff;font-weight: 500;letter-spacing: 2px;">
					用户接单
				</view>
			</template>
		</NavBar>
		<Perch />
		<!-- 可扩展筛选功能 -->
		<view class="filter">
		</view>
		<view class="content">
			<view class="content-item" v-for="(item,index) in list" :key="index" @click="jumpDetail(item.orderId)">
				<view class="header-info">
					<view class="user">
						<u--image :showLoading="true" :src="item.avatar" width="50px" height="50px" shape="circle">
						</u--image>
						<text class="name">{{ item.nickname }}</text>
					</view>
					<view class="order-type" v-if="item.type === 1">
						帮我送
					</view>
					<view class="order-type" v-else-if="item.type === 2">
						帮我买
					</view>
				</view>
				<view class="content-detail">
					<!-- 内容描述 -->
					<view class="content-desc common">
						<u-icon name="gift" size="26" />
						<view class="desc">{{ item.receiveAddress }}</view>
					</view>
					<view class="take common">
						<u-icon name="car" size="26" />
						<view class="desc">{{ item.deliveryAddress }}</view>
					</view>
					<view class="time common">
						<u-icon name="clock" size="25" />
						<view class="desc">{{ item.appointmentTime }}</view>
					</view>
				</view>
				<view class="footer">
					<view class="price">
						<text>￥</text>
						<text>{{ item.tipFee }}</text>
					</view>
					<view class="jump-order">
						去接单
					</view>
				</view>
			</view>
			<u-loadmore :status="status" :loading-text="loadingText" :loadmore-text="loadmoreText"
				:nomore-text="nomoreText" loadingIcon="semicircle" lineColor="#1CD29B" dashed line />
		</view>
	</view>
</template>

<script>
	import {
		selectOrderList
	} from '@/network/order/order.js'
	export default {
		data() {
			return {
				status: 'loadmore',
				loadingText: '努力加载中',
				loadmoreText: '加载更多',
				nomoreText: '亲,实在没有数据了',
				//请求的数据
				queryParam: {
					pageNum: 1, //当前第几页
					pageSize: 3, //每页显示
					orderStep: 1, //表示等待接单
				},
				total: 0, //记录总数
				list: [], //记录订单数据
			}
		},
		onLoad() {
			console.log("onload触发")
			this.selectOrderList()
		},
		//监听是否有组件发起更新数据
		onShow() {
			// let that = this
			// console.log("onshow触发")
			// uni.$on('updateList', function(orderId) {
			// 	console.log(orderId)
			// 	that.reset() //重置表单刷新请求
			// 	that.selectOrderList()
			// 	console.log("刷新页面")
			// })
			//页面进入就刷新
			this.reset()
			this.selectOrderList()
		},
		methods: {
			async selectOrderList() {
				this.status = 'loading'
				//请求的数据状态为1表示等待接单
				const res = await selectOrderList(this.queryParam)
				this.list = [...this.list, ...res.rows]
				this.total = res.total
				if ((this.queryParam.pageNum * this.queryParam.pageSize) >= this.total) {
					return this.status = 'nomore'
				}
			},
			jumpDetail(id) {
				console.log(id)
				uni.navigateTo({
					url: `/pages/order/childCmps/detail/detail?id=${id}`
				})
			},
			reset() {
				//表单初始化重置
				this.queryParam = {
					pageNum: 1, //当前第几页
					pageSize: 3, //每页显示
					orderStep: 1, //表示等待接单
				},
				this.list = []
				this.status = 'loadmore'
			},
		},
		onReachBottom() {
			if ((this.queryParam.pageNum * this.queryParam.pageSize) >= this.total) {
				return this.status = 'nomore'
			}
			this.queryParam.pageNum++;
			// this.status = 'loadmore'
			this.selectOrderList()
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		padding: 30rpx;

		.content-item {
			background-color: #fff;
			padding: 20rpx 0 0 0;
			border-radius: 15rpx;
			margin-bottom: 35rpx;
			@include custom_shadow;

			.header-info {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 10rpx 25rpx;
				border-bottom: 2rpx solid $common-line;

				.user {
					display: flex;
					justify-content: center;
					align-items: center;

					.name {
						padding-left: 15rpx;
						font-size: 35rpx;
						font-weight: bolder;
						letter-spacing: 2rpx;
					}
				}

				.order-type {
					padding: 10rpx 20rpx;
					border-radius: 18rpx;
					font-size: 28rpx;
					letter-spacing: 3rpx;
					color: #fff;
					background-color: $background-color;
				}
			}

			//内容详情
			.content-detail {
				padding: 10rpx 25rpx;

				.common {
					margin: 30rpx 0;
					display: flex;
					align-items: center;

					.desc {
						color: $desc-color;
						padding-left: 15rpx;
						@include clamp1;
					}
				}
			}

			//接单数据
			.footer {
				padding: 25rpx 25rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				box-shadow: 1px -2px 8px $gray_color;

				.price {
					color: darkred;
					font-size: 38rpx;
					font-weight: bold;
				}

				.jump-order {
					padding: 10rpx 20rpx;
					border-radius: 18rpx;
					font-size: 28rpx;
					letter-spacing: 3rpx;
					color: #fff;
					background-color: #0dc9d5;
				}
			}
		}
	}
</style>
