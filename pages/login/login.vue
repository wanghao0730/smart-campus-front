<template>
	<view class="login-wrap">
		<!-- <view class="background-design"></view> -->
		<navbar>
			<template #navLeft>
				<view class="login-text">登录</view>
			</template>
		</navbar>
		<!-- 撑起内容 -->
		<view :style="{height:customNav.navBarHeight + 'px'}"></view>
		<!-- 底部弹出内容 -->
		<view class="popup-box" :animation="animationData">
			<!-- 表单提交 -->
			<u--form labelPosition="top" :model="formData" :rules="rules" ref="userLoginForm">
				<u-form-item label="账户" prop="userInfo.name" borderBottom>
					<u--input v-model="formData.userInfo.name" border="none" placeholder="请输入账户"></u--input>
				</u-form-item>
				<u-form-item label="密码" prop="userInfo.password" borderBottom>
					<u--input v-model="formData.userInfo.password" placeholder="请输入密码" border="none"></u--input>
				</u-form-item>
			</u--form>
			<button class="login-btn">登录</button>
			<!-- 使用微信一键登录 -->
			<view class="footer">
				
			</view>	
		</view>
	</view>
</template>

<script>
	const App = getApp().globalData
	import navbar from "../../component/navbar/navbar.vue"
	export default {
		components: {
			navbar
		},
		data() {
			return {
				customNav: App.customNav,
				animationData: {},
				//用户登录
				formData: {
					userInfo: {
						username: '',
						password: ''
					}
				},
				//验证规则
				rules: {
					'userInfo.username': {
						type: 'string',
						required: true,
						message: '请填写姓名',
						trigger: ['blur', 'change']
					},
					'userInfo.password': {
						type: 'string',
						required: true,
						message: '请填写密码',
						trigger: ['blur', 'change']
					},
				},
			}
		},
		onLoad() {

		},
		onShow() {
			var animation = uni.createAnimation({
				duration: 1500,
				timingFunction: 'ease',
			})

			this.animation = animation

			//默认的弹出动画
			// animation.scale(2, 2).step()
			animation.translateY(0).step()

			this.animationData = animation.export()


			// setTimeout(function() {
			// 	animation.translate(30).step()
			// 	this.animationData = animation.export()
			// }.bind(this), 1000)
		},
		onReady() {
				//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
		    	this.$refs.userLoginForm.setRules(this.rules)
		    },
		methods: {

		}
	}
</script>

<style lang="scss">
	.login-wrap {
		position: relative;
		width: 100vw;
		height: 100vh;
		background-color: #A493FF;
		width: 100%;
		height: 100%;

		.login-text {
			font-size: 35rpx;
			color: #FFFFFF;
		}

		//定义动画的初始位置
		.popup-box {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 65%;
			padding: 60px 100rpx;
			-webkit-transform: translateY(100%);
			transform: translateY(100%);
			background-color: #FBFBFB;
			border-top-left-radius: 50rpx;
			border-top-right-radius: 50rpx;
			z-index: 1000;
			.login-btn {
				height: 80rpx;
				line-height: 80rpx;
				margin-top: 50rpx;
				background-color: #A493FF;
				border: none;
				color: #FFFFFF;
			}
		}
	}
</style>
