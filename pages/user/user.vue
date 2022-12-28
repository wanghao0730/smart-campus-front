<template>
	<view class="user-wrap">
		<Perch />
		<view class="header-avatar">
			<u--image :src="loginInfo ? loginInfo.photo : '/static/image/tabbar/user.png'" shape="circle" width="65px"
				height="65px" @click="jumpUserInfo(loginInfo)"></u--image>
			<view class="info">
				<text class="nickname">
					{{ loginInfo  ? loginInfo.nickname : '请先登录' }}
				</text>
			</view>
		</view>

		<view class="ability-content">
			<!-- 用户认证后显示用户的信息数据 -->
			<view class="user-auth" v-if="loginInfo">
				<u-grid :col="3">
					<u-grid-item>
						<u-icon name="calendar-fill" size="25" color="#A493FF"></u-icon>
						<view class="grid-text">CB19130421</view>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="man-add-fill" size="25" color="#A493FF"></u-icon>
						<view class="grid-text">学生</view>
					</u-grid-item>
					<u-grid-item>
						<u-icon name="grid-fill" size="25" color="#A493FF"></u-icon>
						<view class="grid-text">19软件工程14班</view>
					</u-grid-item>
				</u-grid>
			</view>
			<!-- 常用工具 -->
			<view class="common-tools">
				<view class="common-title">
					常用操作
				</view>
				<view class="tools-item">
					<u-cell-group :border="false">
						<u-cell :border="false" title="请假审批" isLink icon="coupon-fill"
							:iconStyle="{'color':'#A493FF','fontSize':'26px'}" :titleStyle="{'paddingLeft':'25rpx'}">
						</u-cell>
						<u-cell :border="false" icon="calendar-fill" title="空闲教室" isLink
							:iconStyle="{'color':'#A493FF','fontSize':'26px'}" :titleStyle="{'paddingLeft':'25rpx'}">
						</u-cell>
						<u-cell :border="false" icon="search" title="风险查询" isLink
							:iconStyle="{'color':'#A493FF','fontSize':'26px'}" :titleStyle="{'paddingLeft':'25rpx'}">
						</u-cell>
						<u-cell :border="false" icon="bookmark-fill" title="校园活动" isLink
							:iconStyle="{'color':'#A493FF','fontSize':'26px'}" :titleStyle="{'paddingLeft':'25rpx'}">
						</u-cell>
					</u-cell-group>
				</view>
			</view>
			<view class="order-tool">
				<view class="other-tools">
					<view class="common-title">
						我的订单
					</view>
					<view class="tools-item">
						<u-cell-group :border="false">
							<u-cell :border="false" icon="shopping-cart-fill" title="我的订单" isLink
								:iconStyle="{'color':'#A493FF','fontSize':'28px'}"
								:titleStyle="{'paddingLeft':'25rpx'}">
							</u-cell>
							<u-cell :border="false" icon="red-packet-fill" title="我的接单" isLink
								:iconStyle="{'color':'#A493FF','fontSize':'26px'}"
								:titleStyle="{'paddingLeft':'25rpx'}">
							</u-cell>
							</u-cell>
						</u-cell-group>
					</view>
				</view>
			</view>
			<!-- 其他功能 -->
			<view class="other-tools">
				<view class="common-title">
					其他
				</view>
				<view class="tools-item">
					<u-cell-group :border="false">
						<u-cell :border="false" title="个人信息" isLink icon="integral-fill"
							:iconStyle="{'color':'#A493FF','fontSize':'26px'}" :titleStyle="{'paddingLeft':'25rpx'}">
						</u-cell>
						<u-cell :border="false" icon="more-circle-fill" title="意见反馈" isLink
							:iconStyle="{'color':'#A493FF','fontSize':'24px'}" :titleStyle="{'paddingLeft':'25rpx'}">
						</u-cell>
						<u-cell :border="false" icon="error-circle-fill" title="设置中心" isLink
							:iconStyle="{'color':'#A493FF','fontSize':'24px'}" :titleStyle="{'paddingLeft':'25rpx'}">
						</u-cell>
					</u-cell-group>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const App = getApp().globalData
	export default {
		data() {
			return {
				loginInfo: null
			}
		},
		onShow() {
			this.loginInfo = this.getUserInfo()
		},
		methods: {
			getUserInfo() {
				return uni.getStorageSync("wxuser") ? JSON.parse(uni.getStorageSync("wxuser")) : null
			},
			jumpUserInfo(loginInfo) {
				//当前用户没有登录
				if (!loginInfo) {
					return uni.navigateTo({
						url: "/pages/login/login"
					})
				}
				//当前用户登录了	跳转用户个人界面
				uni.navigateTo({
					url:`./childCmps/info/info?id=${loginInfo.id}`
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.user-wrap {
		width: 100%;
		height: 100%;

		// background: rgb(209,215,240);
		// background: linear-gradient(304deg, rgba(209,215,240,1) 1%, rgba(164,147,255,1) 53%, rgba(239,232,255,1) 100%);
		.header-avatar {
			padding-top: 20rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.info {
				margin-top: 10rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				.nickname {
					font-size: 35rpx;
					font-weight: 800;
				}
			}
		}

		//功能模块
		.ability-content {
			width: 100%;
			margin-top: 25rpx;
			padding: 30rpx;
			border-top-left-radius: 50rpx;
			border-top-right-radius: 50rpx;
			background-color: #fff;
			// height: 100%;

			.common-title {
				font-weight: bolder;
				font-size: 38rpx;
				margin: 45rpx 0;
			}

			::v-deep .u-cell__body {
				padding: 10px 0 !important;
			}

			.user-auth {
				margin-top: 30rpx;

				.grid-text {
					font-size: 28rpx;
					margin-top: 4rpx;
				}
			}

		}
	}
</style>
