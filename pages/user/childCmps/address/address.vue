<template>
	<view class="address-wrap">
		<NavBar :isBack="true">
			<template #navLeft>
				<view>
					收货地址
				</view>
			</template>
		</NavBar>
		<Perch />
		<!-- 用户没有收货地址时显示 -->
		<view class="empty-tip" v-if="isEmpty">
			<u-empty mode="address" icon="/pages/user/childCmps/static/address.png">
			</u-empty>
		</view>
		<!-- 显示用户收货地址 -->
		<view class="address-list-wrap" v-if="!isEmpty">
			<view class="user-address" v-for="(item,index) in list" :key="index">
				<!-- 信息内容 -->
				<view class="left" @click.stop="handleSelect(item)">
					<view class="location">
						<view class="detail">
							<text class="is-default" v-if="item.isDefault === 2">默认</text>
							<text>
								{{ item.receiveProvinceCityArea }}{{ item.receiveAddress }}
							</text>
						</view>
					</view>
					<view class="info">
						<view class="nickname">{{ item.receiveName }}</view>
						<view class="phone">{{ item.receivePhone }}</view>
					</view>
					<view class="other">
						<text>门牌号:</text>
						<text>{{ item.doorNumber }}</text>
					</view>
					<view class="default">
						<radio-group @change="selectDefault">
							<label>
								<radio :checked="item.isDefault === 2" :value="item.id" color="#A493FF" style="transform:scale(0.6)" />
								<text style="font-size: 23rpx;">默认地址</text>
							</label>
						</radio-group>
					</view>
				</view>
				<!-- 右边操作 -->
				<view class="right" @click.stop="getAddress(item)">
					<u-icon name="edit-pen" size="25"></u-icon>
				</view>
			</view>
		</view>
		<!-- 新增/修改地址modal -->
		<u-modal :show="addressModal" :closeOnClickOverlay="true" :confirmText="modalType === 1 ? '新增' : '修改'"
			confirmColor="#A493FF" @confirm="confirm" @close="closeAdd" :title="modalType === 1 ? '新增地址' : '修改地址'">
			<!-- 保存地址表单 -->
			<u--form labelPosition="top" :model="addressParams" ref="addressForm" labelWidth="250" :rules="rules">
				<u-form-item label="地区" borderBottom required>
					<pickers @address="selectAddress" @close="closeSelect" :defaultAddress="defaultAddress">
						<u--input v-model="addressParams.receiveProvinceCityArea" disabled disabledColor="#ffffff"
							placeholder="点击选择地区" border="none"></u--input>
					</pickers>
				</u-form-item>
				<u-form-item label="详细地区" prop="receiveAddress" borderBottom required>
					<u--textarea v-model="addressParams.receiveAddress" placeholder="如:广东科技学院松山湖校区****"></u--textarea>
				</u-form-item>
				<u-form-item label="收货人" prop="receiveName" borderBottom required>
					<u--input v-model="addressParams.receiveName" border="none" placeholder="收货人姓名/昵称"></u--input>
				</u-form-item>
				<u-form-item label="手机号码" prop="receivePhone" borderBottom required>
					<u--input v-model="addressParams.receivePhone" border="none" placeholder="联系方式"></u--input>
				</u-form-item>
				<u-form-item label="门牌号" prop="doorNumber" borderBottom required>
					<u--input v-model="addressParams.doorNumber" border="none" placeholder="如:A9宿舍777号"></u--input>
				</u-form-item>
			</u--form>
		</u-modal>
		<!-- 添加地址 -->
		<view class="add" @click="addAddress">
			新增地址
		</view>
	</view>
</template>

<script>
	const App = getApp().globalData
	import pickers from "@/components/ming-picker/ming-picker.vue"
	import {
		validPhone
	} from '@/utils/validate/validity.js'
	import {
		selectAddressList,
		addAddress,
		updateAddress,
		updateDefault
	} from '@/network/address/address.js'
	export default {
		components: {
			pickers
		},
		data() {
			return {
				//控制modal的弹出
				addressModal: false,
				editModal: false,
				//判断用户是否没有地址列表
				isEmpty: false,
				defaultAddress: ["广东省", "东莞市", "石排镇"],
				//监听页面高度
				customNav: App.customNav,
				//1新增地址 2修改地址 控制弹窗显示不同内容
				modalType: null,
				queryParams: {
					delFlag: 1, //没有删除的地址
				},
				//存放用户地址
				list: [],
				//修改用户地址以及新增用户地址通用query！用户新增页面退出或是修改页面退出都会清除数据！
				addressParams: {
					receiveName: null, //收货人姓名
					receivePhone: null, //收货人手机号
					receiveProvinceCityArea: "广东省东莞市石排镇", //收货地区省份(默认显示)
					receiveAddress: null, //收货地区详情
					doorNumber: null, //楼层号码
					isDefault: 1, //是否 1不是默认2默认
				},
				rules: {
					receiveName: {
						type: 'string',
						required: true,
						message: '请填写收货人',
						trigger: ['blur', 'change']
					},
					//收货地区是默认选中的此句废话
					receiveProvinceCityArea: {
						required: true,
						message: '请填写收货地址',
						trigger: ['blur', 'change']
					},
					receiveAddress: {
						required: true,
						message: '请填写详细地址',
						trigger: ['blur', 'change']
					},
					//收货号码
					receivePhone: [{
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
					doorNumber: {
						required: true,
						message: '请填写门牌号',
						trigger: ['blur', 'change']
					},
				},
			}
		},
		onLoad(options) {
			console.log('用户')
			this.addressList()
		},
		onReady() {
			// 如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则
			this.$refs.addressForm.setRules(this.rules)
			
		},
		methods: {
			//获取用户地址列表
			async addressList() {
				const {
					data: resList
				} = await selectAddressList(this.queryParams)
				if (resList.length <= 0) {
					this.isEmpty = true
				} else {
					this.list = resList
				}
			},
			//用户地址选择
			handleSelect(item) {
				//获取页面栈 如果栈中的数据(当前页面栈的上一个为errandOrder页面表示可以选择地址返回)
				const pageStacks = getCurrentPages()
				//获取当前页面的上一个页面栈
				const prevPages = pageStacks[pageStacks.length - 2]
				if (prevPages && prevPages.route && prevPages.route === 'pages/errand/childCmps/errandOrder') {
					//提交用户点击选择的地址存储vuex
					this.$store.commit('user/SET_DEFAULT_ADDRESS', item)
					//返回上一级
					uni.navigateBack({
						delta: 1
					})
					console.log(item)
				}
			},
			//用户选择默认地址发送请求
			async selectDefault(item) {
				const addressId = Number(item.detail.value)
				const res = await updateDefault(addressId)
				if (res.code === 200) {
					this.addressList()
				}
			},
			//点击修改按钮拿到传递的数据直接回显。没有设计成拿id再查询一遍
			getAddress(item) {
				this.addressParams = item
				this.modalType = 2 //表示修改地址
				this.addressModal = true
			},
			addAddress() {
				//重新reset一下数据 有可能用户点击了修改重置为空
				if (this.addressParams && this.addressParams.userId) {
					this.reset()
				}
				this.addressModal = true
				this.modalType = 1
			},
			//前置判断用户是否填写内容以及分发处理调用修改地址或是新增地址
			confirm() {
				this.$refs.addressForm.validate().then(res => {
					//判断是新增地址还是修改地址
					if (this.modalType === 1) { //新增地址
						this.confirmAddAddress()
					} else if (this.modalType === 2) { //修改地址
						this.confirmEditAddress()
					}
				}).catch(errors => {
					uni.$u.toast('请填写必填项')
				})
			},
			//新增地址网络请求
			async confirmAddAddress() {
				const addRes = await addAddress(this.addressParams);
				if (addRes.code === 200) {
					//关闭弹窗
					this.addressModal = false
					uni.$u.toast('新增成功')
					this.reset() //清除表单
					//发送请求获取新数据
					this.addressList()
				}
			},
			//修改地址请求
			async confirmEditAddress() {
				const updateRes = await updateAddress(this.addressParams)
				//关闭弹窗
				this.addressModal = false
				uni.$u.toast('修改成功')
			},
			//选择地址
			selectAddress(event) {
				this.addressParams.receiveProvinceCityArea = event.value.toString().replace(/\,/gi, '')
			},
			closeSelect() {
				console.log("关闭选择")
			},
			//点击遮罩层关闭
			closeEdit() {
				this.editModal = false
			},
			closeAdd() {
				this.addressModal = false
			},
			//表单重置
			reset() {
				this.addressParams = {
					receiveName: null, //收货人姓名
					receivePhone: null, //收货人手机号
					receiveProvinceCityArea: null, //收货地区省份
					receiveAddress: null, //收货地区详情
					doorNumber: null, //楼层号码
					isDefault: null, //是否默认
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.address-wrap {
		position: relative;
		padding-bottom: 80rpx;

		.address-list-wrap {
			width: 100%;
			padding: 0rpx 40rpx;
			background-color: #fff;

			.user-address {
				display: flex;
				font-size: 28rpx;
				font-weight: normal;
				letter-spacing: 1rpx;
				padding: 20rpx 0;
				border-bottom: 1rpx solid $gray_color;
				margin-bottom: 10rpx;

				&:nth-last-child(1) {
					border-bottom: none;
				}

				.left {
					flex: 1;

					.location {
						display: flex;

						.detail {
							@include clamp2;

							.is-default {
								display: inline-block;
								margin-right: 15rpx;
								text-align: center;
								padding: 5rpx 10rpx;
								background-color: $background-color;
								color: #fff;
								font-size: 20rpx;
								border-radius: 5rpx;
							}
						}

					}

					.info {
						margin-top: 20rpx;
						display: flex;
						color: $gray_color;
						font-size: 23rpx;

						&>view:nth-child(2) {
							margin-left: 30rpx;
						}
					}

					.other {
						margin-top: 20rpx;
						color: $gray_color;
						font-size: 25rpx;

						&>text:nth-child(2) {
							margin-left: 10rpx;
						}
					}
					.default {
						margin-top: 20rpx;
					}
				}

				.right {
					display: flex;
					justify-content: center;
					align-items: flex-start;
					width: 80rpx;
					padding-top: 30rpx;
				}
			}

		}

		.add {
			width: 100%;
			height: 80rpx;
			position: fixed;
			right: 0;
			left: 0;
			bottom: 0;
			background-color: #fff;
			font-size: 30rpx;
			line-height: 80rpx;
			font-weight: normal;
			letter-spacing: 5rpx;
			font-weight: normal;
			text-align: center;
			-webkit-box-shadow: -3px -3px 12px 0px rgba(54, 50, 50, 0.3);
			-moz-box-shadow: -3px -3px 12px 0px rgba(54, 50, 50, 0.3);
			box-shadow: -3px -3px 12px 0px rgba(54, 50, 50, 0.3);

		}
	}
</style>
