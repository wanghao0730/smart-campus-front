<template>
	<view class="login-wrap">
		<!-- <view class="background-design"></view> -->
		<navbar navBk="rgba(255, 255, 255, 0)" isBack>
			<template #navLeft>
				<view class="login-text">登录</view>
			</template>
		</navbar>
		<!-- 撑起内容 -->
		<view :style="{height:customNav.navBarHeight + 'px'}"></view>
		<!-- 底部弹出内容 -->
		<view class="popup-box" :animation="animationData">
			<!-- 表单提交 -->
			<u--form labelPosition="top" :model="form" :rules="rules" ref="userLoginForm">
				<u-form-item label="学工/学号" prop="username" borderBottom labelWidth="250rpx">
					<u--input v-model="form.username" border="none" placeholder="请填写学工账户"></u--input>
				</u-form-item>
				<u-form-item label="密码" prop="password" borderBottom>
					<u--input v-model="form.password" placeholder="请输入密码" border="none" type="password" clearable password></u--input>
				</u-form-item>
			</u--form>
			<button class="login-btn" @click="login">登录</button>
			<!-- 使用微信一键登录 -->

		</view>
	</view>
</template>

<script>
	const App = getApp().globalData
	import navbar from "../../component/navbar/navbar.vue"
	import {userLogin} from '../../network/user/user.js'
	export default {
		components: {
			navbar
		},
		data() {
			return {
				customNav: App.customNav,
				animationData: {},
				//用户登录
				form: {
					username: '',
					password: ''
				},
				//验证规则
				rules: {
					username: {
						type: 'string',
						required: true,
						message: '请填写学工账户',
						trigger: ['blur', 'change']
					},
					password: {
						type: 'string',
						required: true,
						message: '请输入密码',
						trigger: ['blur', 'change']
					},
				},
			}
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
		onLoad() {
			console.log(App.wxuser)
		},
		onReady() {
			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
			this.$refs.userLoginForm.setRules(this.rules)
				console.log('微信app', App.WX_APPID)
		},
		methods: {
			//用户登录方法
			async login(detail) {
				//调用getUserProfile获取用户信息数据
				await uni.getUserProfile({
					provider: "weixin",
					desc: "用于完善用户资料",
					lang: "zh_CN",
					success: (res) => this.saveUserInfo(res),
					fail: (fail) => {
						uni.$u.toast('您拒绝了授权,登录失败')
					}
				})
			},
			//用于登录请求
			async saveUserInfo(e) {
				let that = this;
				console.log(e)
				const {
					encryptedData,
					iv,
					rawData,
					signature,
					userInfo
				} = e

				//获取登录的
				const [, {
					code
				}] = await uni.login()

			
				let loginForm = {
					appid:App.WX_APPID, //小程序应用id
					info: {
						code,
						username:that.form.username,
						password:that.form.password,
						avatarUrl: userInfo.avatarUrl,
						city:userInfo.city,
						province:userInfo.province,
						nickName:userInfo.nickName,
						gender: userInfo.gender
					}
				}
				const loginRes = await userLogin(loginForm.appid,loginForm.info);
				console.log("登录后返回响应",loginRes)
				uni.setStorageSync("wxuser",JSON.stringify(loginRes.data.user))
				uni.setStorageSync("token",loginRes.data.token);
				//放到全局对象中
				App.wxuser = loginRes.data.user;
				console.log("登录结果",loginRes)
				// //调用注册用户方法
				// let loginForm = {
				// 	code
				// }
				// const {
				// 	permission,
				// 	token
				// } = await userApi.login(loginForm)

				// //把数据包装到wxuser中
				// let wxuser = {
				// 	permission,
				// 	token
				// }
				// //设置用户权限到本地缓存中
				// getApp().globalData.global_setStorageSync("wxuser", wxuser)
				// uni.switchTab({
				// 	url: "/pages/index/index"
				// })
			},
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
			padding: 40px 100rpx;
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
