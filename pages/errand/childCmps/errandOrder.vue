<template>
	<view class="errand-order">
		<nav-bar :isBack="true">
			<template #navLeft>
				<view>
					订单页面
				</view>
			</template>
		</nav-bar>
		<view :style="{height:customNav.navBarHeight + 'px'}"></view>
		<!-- 用于增加内边距 -->
		<view style="padding: 10rpx 25rpx;">
			<!-- 选择订单类 -->
			<view class="choose-type">
				<view>订单类型</view>
				<view class="type-box">
					<u-radio-group v-model="selectType" placement="row" @change="groupChange">
						<u-radio :customStyle="{marginRight: '3px'}" v-for="(item, index) in orderTypeList" :key="index"
							:label="item.name" :name="item.name">
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			<!-- 地址选择 -->
			<view class="choose-address">
				<!-- 地址新增用户不存在地址 -->
				<view class="add-address" v-if="!defaultAddress" @click="jumpAddress">
					<image src="../../../static/image/common/add.png"></image>
					<view>
						选择地址
					</view>
				</view>
				<!-- 显示用户的地址 -->
				<view class="user-address" v-if="defaultAddress">
					<!-- 地址详情 -->
					<view class="address-detail" @click.stop="jumpAddress">
						{{ defaultAddress.receiveProvinceCityArea}}{{ defaultAddress.receiveAddress }}
					</view>
					<view class="concat-info">
						<view>{{ defaultAddress.receiveName }}</view>
						<view>{{ defaultAddress.receivePhone }}</view>
					</view>
					<view class="door-number">
						<text>楼层门牌:</text>
						<text>{{ defaultAddress.doorNumber }}</text>
					</view>
					<!-- 送货时间 -->
					<view class="send-time" @click.stop="selectSendTime">
						<view>送达时间</view>
						<view class="send-info">
							<view class="not-select" v-if="!form.appointmentTime">未选择(必选)</view>
							<view v-else>{{form.appointmentTime }}</view>
							<u-icon name="arrow-right" size="10"></u-icon>
						</view>
					</view>
				</view>
			</view>
			<!-- 表单内容 -->
			<view class="form-content">
				<u--form labelPosition="top" :model="form" ref="orderForm" :rules="rules">
					<u-form-item label="购买内容" prop="orderDetailName" borderBottom labelWidth="150rpx" required
						v-if="form.type === 2">
						<u--textarea v-model="form.orderDetailName" placeholder="请填写帮买的信息哟!"></u--textarea>
					</u-form-item>
					<u-form-item label="订单费用" prop="orderAmount" borderBottom labelWidth="150rpx" required
						v-if="form.type === 2">
						<u--input v-model="form.orderAmount" placeholder="购买费用总金额"></u--input>
					</u-form-item>
					<u-form-item label="跑腿小费" prop="tipFee" borderBottom labelWidth="150rpx" required>
						<u--input v-model="form.tipFee" placeholder="订单跑腿费用"></u--input>
					</u-form-item>
					<u-form-item label="取件码" prop="orderDetailCode" borderBottom labelWidth="150rpx" required>
						<u--input v-model="form.orderDetailCode" placeholder="取件信息:取件码或是预留信息"></u--input>
					</u-form-item>
					<u-form-item label="提货地址" prop="deliveryAddress" borderBottom labelWidth="150rpx" required>
						<u--textarea v-model="form.deliveryAddress" placeholder="提货地址"></u--textarea>
					</u-form-item>
				</u--form>
			</view>
		</view>
		<view class="footer-submit">
			<view class="submit" @click="submit">下单</view>
		</view>
		<u-datetime-picker :show="showDatePicker" v-model="datetime" mode="datetime" @cancel="datePickerCancel"
			:minDate="minDate" @confirm="datePickerConfirm"></u-datetime-picker>
	</view>
</template>

<script>
	const App = getApp().globalData
	import NavBar from '../../../component/navbar/navbar.vue'
	import { selectAddressList } from '@/network/address/address.js'
	import { mapGetters } from 'vuex'
import { data } from 'uview-ui/libs/mixin/mixin'
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				//判断用户是否有地址数据
				hasAddress:false,
				//记录用户的取货地址 这个用于跑腿页面传递地址过来存储没有传递就用于记录用户在订单页面填写(选择)的收获地址
				userContentAddress: '',
				customNav: App.customNav,
				showDatePicker: false, //显示日期选择
				//日期格式定位当前日期
				datetime: Number(new Date()),
				minDate: Number(new Date()), //用户可以选择预约时间为当前日期之后
				form: {
					userId: '', //用户openid
					type: 1, //订单类型 1帮我送(默认) 2帮我买
					receiveName: '',
					receivePhone: '',
					receiveProvince: '', //收货地区
					receiveAddress: '', //收货详情地址(合并提交)
					deliveryAddress: '', //取货地址
					orderDetailCode: '', //取件码
					orderAmount: '', //代买订单费用
					tipFee: '', //跑腿小费
					payMode: 1, //支付方式
					orderDetailName: '', //订单的信息详情
					orderRemark: '', //订单备注
					appointmentTime: '', //预约时间
				},
				//规则匹配
				rules: {
					orderDetailName: [{
						required: true,
						message: '请填写帮买的信息哟!',
						trigger: ['blur', 'change']
					}],
					orderAmount: [{
						required: true,
						message: '请填写购买费用总金额!',
						trigger: ['blur', 'change']
					}],
					orderDetailCode: [{
						required: true,
						message: '请填写取件码哟!',
						trigger: ['blur', 'change']
					}],
					tipFee: [{
						required: true,
						message: '请填写跑腿费用哟！',
						trigger: ['blur', 'change']
					}],
					deliveryAddress: [{
						required: true,
						message: '请提货地址例如:某某快递站！',
						trigger: ['blur', 'change']
					}]
				},
				orderTypeList: [{
						name: '帮我送',
						value: 1
					},
					{
						name: '帮我买',
						value: 2
					}
				],
				//记录用户的选择订单类型
				selectType: '帮我送'
			}
		},
		computed: {
			...mapGetters(['defaultAddress'])
		},
		methods: {
			//获取用户的地址
			async getUserAddress() {
				let query = {
					isDefault:2, //查找默认地址
					delFlag:1, //判断是否删除
				}
				const addressList = await selectAddressList(query)
				if (addressList.data.length > 0) {
					this.$store.commit('user/SET_DEFAULT_ADDRESS',addressList.data[0])
				}
			},
			//监听type类型的变化
			groupChange(name) {
				//避免用户在帮我买类型的情况填写了数据 这里将数据清理一下
				if (this.form.orderDetailName || this.form.orderAmount) {
					this.form.orderDetailName = ''
					this.form.orderAmount = ''
				}
				const {
					value
				} = this.orderTypeList.find(v => v.name === name)
				this.form.type = value
			},
			//处理点击送达时间选择
			selectSendTime() {
				this.showDatePicker = true
			},
			//处理日期关闭选择
			datePickerCancel() {
				this.showDatePicker = false
			},
			datePickerConfirm({
				value
			}) {
				console.log("调用", value)
				//时间戳转格式
				this.form.appointmentTime = this.$u.timeFormat(value, 'yyyy-mm-dd hh:MM')

				this.showDatePicker = false
			},
			//页面跳转
			jumpAddress() {
				uni.navigateTo({
					url:"/pages/user/childCmps/address/address",
					fail(err) {
						console.error(err)
					}
				})
			},
			//点击下单
			submit() {
				//如果用户选择类型为帮我买 其内部还有两个参数需要判断是否填写
				//单独判断用户是否选择地址
				// if (!(this.form.receiveAddress || this.form.receivePhone)) {
				// 	return uni.$u.toast('请前往添加收货地址')
				// }
				if (this.defaultAddress) {
					
				}

				//判断是否填写必填数据
				this.$refs.orderForm.validate().then(res => {
					console.log(res)
					//发送网络请求下单

				}).catch(errors => {
					uni.$u.toast('请完成订单内容填写')
				})
			}
		},
		onLoad(options) {
			//获取参数
			const address = options.selectAddress ? JSON.parse(options.selectAddress) : ''
			if (address) { //判断页面传递的参数
				this.userContentAddress = address.storeDetailAddress
			}
			//获取用户地址
			this.getUserAddress()
		},
		onReady() {
			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
			this.$refs.orderForm.setRules(this.rules)
		},
	}
</script>

<style lang="scss">
	.errand-order {
		// padding: 10rpx 25rpx;
		// width: 100vw;
		position: relative;
		padding-bottom: 110rpx;
		

		.form-content {
			background-color: #fff;
			border-radius: 25rpx;
			padding: 20rpx 30rpx;
		}

		.choose-type {
			display: flex;
			align-items: center;
			border: 25rpx;
			background-color: #fff;
			border-radius: 25rpx;
			margin-top: 20rpx;
			margin-bottom: 30rpx;
			padding: 20rpx 30rpx;
			font-size: 35rpx;
			@include custom_shadow;

			.type-box {
				padding-left: 20rpx;
				flex: 1;

				::v-deep .u-radio-group--row {
					justify-content: flex-end;
				}
			}
		}

		// 选择地址
		.choose-address {
			background-color: #fff;
			border-radius: 25rpx;
			margin-bottom: 30rpx;
			padding: 20rpx 30rpx;
			font-size: 35rpx;

			// 选择地址
			.add-address {
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 20rpx 0;

				&>image {
					width: 130rpx;
					height: 130rpx;
					margin-bottom: 10rpx;
				}
			}

			//显示用户地址
			.user-address {
				background-color: #fff;
				border-radius: 25rpx;
				padding: 20rpx 0;
				font-size: 35rpx;

				.address-detail {
					font-size: 40rpx;
					font-weight: bold;
					@include clamp2;
				}

				//联系方式
				.concat-info {
					display: flex;
					align-items: center;
					margin: 20rpx 0;
					font-size: 30rpx;
					color: $gray_color;

					view:nth-child(2) {
						margin-left: 20rpx;
					}
				}

				.door-number {
					font-size: 30rpx;
					color: $gray_color;
				}

				//送货时间
				.send-time {
					font-weight: 500;
					padding: 20rpx 0;
					@include flex-jcsb;

					.send-info {
						@include flex-center;

						.not-select {
							color: $background-color;
						}
					}
				}
			}
		}

		//底部提交
		.footer-submit {
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: #fff;
			width: 100%;
			height: 100rpx;
			z-index: 11;
			padding: 20rpx;

			.submit {
				width: 60%;
				height: 60rpx;
				line-height: 60rpx;
				font-weight: 700;
				letter-spacing: 5rpx;
				margin: 0 auto;
				color: #fff;
				border-radius: 30rpx;
				text-align: center;
				background-color: $background-color;
			}
		}
	}
</style>
