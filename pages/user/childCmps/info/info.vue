<template>
	<view class="userInfo-wrap">
		<NavBar :isBack="true">
			<template #navLeft>
				<view>
					个人信息
				</view>
			</template>
		</NavBar>
		<Perch />
		<view class="content">
			<view class="avatar">
				<u-avatar :src="info.photo" size="80"></u-avatar>
			</view>
			<u--form labelPosition="left" :model="info" :rules="rules" ref="form1">
				<u-form-item label="昵称" prop="nickname" borderBottom required>
					<u--input v-model="info.nickname" border="none"></u--input>
				</u-form-item>
				<u-form-item label="性别" prop="sex" borderBottom>
					<u--input :value="info.sex == 0 ? '男' :'女' " border="none" disabled></u--input>
				</u-form-item>
				<u-form-item label="邮箱" prop="email" borderBottom required>
					<u--input v-model="info.email" border="none" clearable></u--input>
				</u-form-item>
				<u-form-item label="省份" prop="province" borderBottom>
					<u--input v-model="info.province" border="none" clearable></u--input>
				</u-form-item>
				<u-form-item label="城市" prop="city" borderBottom>
					<u--input v-model="info.city" border="none" clearable></u--input>
				</u-form-item>
				<u-form-item label="电话" prop="phone" borderBottom required>
					<u--input v-model="info.phone" border="none" clearable></u--input>
				</u-form-item>
			</u--form>
			<u-action-sheet :show="showSex" :actions="actions" title="请选择性别" @close="showSex = false"
				@select="sexSelect">
			</u-action-sheet>

			<view class="footer">
				<view class="submit" @click="handleSub">保存</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {getUserInfo,updateInfo} from '@/network/user/user.js'
	
	export default {
		data() {
			return {
				showSex: false,
				info: {
					city: null,
					district: null,
					email: null,
					id: null,
					isDisable:null,
					name: null,
					nickname: null,
					phone: null,
					photo: null,
					province: null,
					sex: null,
				},
				rules: {
					nickname: {
						type: 'string',
						required: true,
						message: '请填写昵称',
						trigger: ['blur', 'change']
					},
					phone: [{
							required: true,
							message: '请输入手机号',
							trigger: ['change', 'blur'],
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								return uni.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change
							trigger: ['change', 'blur'],
						}
					],
					email: [{
							required: true,
							message: '请输入邮箱',
							trigger: ['change', 'blur'],
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
								return reg.test(value)
							},
							message: '邮箱格式不正确',
							// 触发器可以同时用blur和change
							trigger: ['change', 'blur'],
						}
					],
				}
			}
		},
		onLoad(option) {
			this.getUserInfo(option.id)
		},
		methods: {
			//获取用户最新数据
			getUserInfo(id) {
				getUserInfo(Number(id)).then(res => {
					this.info = res.data
				})
			},
			handleSub() {
				this.$refs.form1.validate().then(async res => {
					//发送请求修改数据
					 const res2 =  await updateInfo(this.info)
					 uni.$u.toast(res2.msg)
					 setTimeout(() => {
						 uni.navigateBack({
							 delta:1
						 })
					 },1500)
				}).catch(errors => {
					uni.$u.toast('请完成表单填写')
				})
			}
		},
		onReady() {
			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
			this.$refs.form1.setRules(this.rules)
		},
	}
</script>

<style lang="scss" scoped>
	.userInfo-wrap {
		.content {
			padding: 30rpx;
			background-color: #ffff;

			.avatar {
				margin-bottom: 15rpx;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.footer {
				margin-top: 15px;
				padding: 15rpx 0;
				display: flex;
				justify-content: center;
				align-items: center;

				.submit {
					width: 250rpx;
					height: 60rpx;
					border-radius: 25rpx;
					text-align: center;
					line-height: 50rpx;
					border: 2px solid $background-color-active;
				}
			}
		}
	}
</style>
