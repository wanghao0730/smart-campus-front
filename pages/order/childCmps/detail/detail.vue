<template>
	<!-- 订单详情 -->
	<view class="order-detail">
		<!-- 自定义导航 -->
		<NavBar isBack>
			<template #navLeft>
				<view style="color: #000;;font-weight: 500;letter-spacing: 2px;">
					接单
				</view>
			</template>
		</NavBar>
		<Perch />
		<view class="detail" v-if="Object.keys(orderInfo).length > 0">
			<view
				style="font-size: 40rpx;margin-bottom: 30rpx;font-weight: 600;padding-left: 20rpx;letter-spacing: 5rpx;">
				待接单
			</view>
			<view class="order-info common-style">
				<view class="user-msg line-margin">
					<view class="common-right">收货人: </view>
					<view>{{ orderInfo.nickname }}</view>
					<view style="margin-left: 20rpx;">18318996297</view>
				</view>
				<view class="line-margin">
					<text>送至:&nbsp;&nbsp;{{ orderInfo.receiveAddress }}</text>
				</view>
				<view class="line-margin">
					<text>提货地址:&nbsp;&nbsp;{{ orderInfo.deliveryAddress }}</text>
				</view>

			</view>
			<view class="common-style">
				<view class="line-margin">
					<view>
						货物内容:&nbsp;&nbsp;{{ orderInfo.orderDetailName ? orderInfo.orderDetailName :'' }}
					</view>
				</view>
				<view class="line-margin">
					<view>
						订单备注:&nbsp;&nbsp;{{ orderInfo.orderRemark }}
					</view>
				</view>
				<view class="line-margin">
					<view>
						支付方式:&nbsp;&nbsp;{{ orderInfo.payMode === 1 ?'线下支付': '线上支付' }}
					</view>
				</view>
				<view class="price-box">
					<view class="amount" v-if="orderInfo.type === 2">
						<text>订单费用</text>
						<text>￥{{ orderInfo.orderAmount }}</text>
					</view>
					<view>
						跑腿费用:&nbsp;&nbsp;
						<text class="total">￥{{ orderInfo.tipFee }}</text>
					</view>
				</view>
			</view>
			<view class="common-style">
				<view class="line-margin">
					<text>订单信息</text>
				</view>
				<view class="line-margin" style="word-break: break-all;">
					编号:&nbsp;&nbsp;{{ orderInfo.orderId }}
				</view>
				<view class="line-margin">
					<text>下单时间:&nbsp;&nbsp;{{ orderInfo.createTime }}</text>
				</view>
				<view class="line-margin">
					<text>预约时间:&nbsp;&nbsp;{{ orderInfo.appointmentTime }}</text>
				</view>
			</view>
		</view>
		<view class="footer-btn">
			<view class="order-step" @click="handleChange">
				<text v-if="orderInfo.orderStep === 1">去接单</text>
			</view>
		</view>
		<!-- 接单信息弹窗内容 -->
		<u-modal :show="showTakingModal" title="请填写接单信息" showCancelButton @confirm="handleTaking"
			@cancel="showTakingModal = false">
			<view class="slot-content">
				<u--form labelPosition="top" :model="takingParam" :rules="takingRules" ref="takingForm"
					labelWidth="200">
					<u-form-item label="联系昵称" prop="distributorName" borderBottom>
						<u--input v-model="takingParam.distributorName" border="none"></u--input>
					</u-form-item>
					<u-form-item label="联系电话" prop="distributorPhone" borderBottom>
						<u--input v-model="takingParam.distributorPhone" border="none"></u--input>
					</u-form-item>
				</u--form>
			</view>
		</u-modal>
	</view>
</template>

<script>
	const App = getApp().globalData
	import {
		orderDetail,
		taking
	} from '@/network/order/order.js'
	export default {
		data() {
			return {
				//显示接单弹窗
				showTakingModal: false,
				//表单验证规则
				takingRules: {
					distributorName: {
						type: 'string',
						required: true,
						message: '请填写联系昵称',
						trigger: ['blur', 'change']
					},
					distributorPhone: [{
							required: true,
							message: '请输入手机号',
							trigger: ['change', 'blur'],
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								// 上面有说，返回true表示校验通过，返回false表示不通过
								// uni.$u.test.mobile()就是返回true或者false的
								return uni.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change
							trigger: ['change', 'blur'],
						}
					]
				},
				//记录订单的详情信息
				orderInfo: {},
				//接单请求
				takingParam: {
					orderId: '', //订单id
					nickname: '', //用户昵称
					avatar: '', //用户头像
					distributorName: '', //接单用户名
					distributorPhone: '',
					orderStep: 2, //订单状态修改为已接单
				},
				//本页面是订单详情界面和接单共用界面，修改订单状态的时候所需的请求参数
				updateStepParam: {

				}
			}
		},
		methods: {
			//请求用户详情
			async reqOrder(orderId) {
				const res = await orderDetail({
					id: orderId
				})
				this.orderInfo = res.data
			},
			//状态变更接单或者变更进度
			handleChange() {
				//发送请求判断接单情况
				console.log("jiedan")
				if (this.orderInfo.orderStep === 1) {
					this.showTakingModal = true //弹窗让用户输入接单用户的信息数据
				}

			},
			//接单网络请求处理
			handleTaking() {
				console.log("调用了")
				/**
				 * 验证用户的表单数据是否提交
				 */
				this.$refs.takingForm.validate().then(res => {
					const wxUser = App.wxuser
					//封装参数
					let param = {
						...this.takingParam,
						avatar:wxUser.photo,
						nickname:wxUser.nickname,
						orderId:this.orderInfo.orderId, //订单id
					}
					//调用接单接口
					taking(param).then(res => {
						this.showTakingModal = false;
						uni.$u.toast('接单成功,正在跳转页面...')
						//触发全局自定义事件 事件总线  通知order页面刷新页面数据
						uni.$emit('updateList',{orderId:param.orderId})
						setTimeout(() => {
							uni.navigateBack({
								delta:1
							})
						},2500)
					}).catch(err => {
						//跳转页面
						if (err) {
							setTimeout(() => {
								uni.navigateBack({
									delta:1
								})
							},2500)
						}
					})
				}).catch(errors => {
					uni.$u.toast('请填写表单内容')
				})
			}
		},
		onLoad(option) {
			const orderId = option && option.id;
			if (orderId) {
				this.reqOrder(orderId)
			}
		},
		onReady() {
			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
			this.$refs.takingForm.setRules(this.takingRules)
		},
	}
</script>

<style lang="scss" scoped>
	.order-detail {
		width: 100%;
		height: 100%;
		background-color: $bk_color;

		//底部内容
		.footer-btn {
			width: 100vw;
			position: fixed;
			z-index: 100;
			bottom: 0;
			left: 0;
			padding: 0 30rpx;
			height: 120rpx;
			border-top: 2rpx solid $common-line;
			background-color: #fff;
			border-top-left-radius: 15rpx;
			border-top-right-radius: 15rpx;
			display: flex;
			justify-content: flex-end;
			align-items: center;

			.order-step {
				padding: 12rpx 30rpx;
				border-radius: 20rpx;
				color: #fff;
				font-size: 28rpx;
				letter-spacing: 5rpx;
				background-color: $background-color;
			}
		}

		.detail {
			padding: 30rpx 30rpx 130rpx 30rpx;
			// position: relative;


			.common-right {
				margin-right: 20rpx;
			}

			.common-style {
				padding: 20rpx 30rpx;
				width: 100%;
				border-radius: 18rpx;
				background-color: #fff;
				margin-bottom: 20rpx;
			}

			.line-margin {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				padding-top: 15rpx;
				padding-bottom: 20rpx;
				border-bottom: 1rpx solid $common-line;
				margin-bottom: 25rpx;
				font-size: 30rpx;
			}

			.user-msg {
				font-size: 35rpx;
			}

			.price-box {
				padding: 30rpx 0 15rpx 0;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-items: flex-end;

				//如果订单为帮我买
				.amount {
					width: 100%;
					font-size: 35rpx;
					display: flex;
					justify-content: space-between;
					margin-bottom: 20rpx;
				}

				.total {
					font-size: 45rpx;
					font-weight: bold;
				}
			}
		}
	}
</style>
