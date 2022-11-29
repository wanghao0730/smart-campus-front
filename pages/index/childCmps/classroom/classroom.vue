<template>
	<view class="classroom-select">
		<NavBar navBk="rgb(164,147,255)" isBack />
		<view class="bk_style"></view>
		<!-- 占位区域顶出高度 -->
		<Perch />
		<view class="inner-wrap">
			<!-- 顶部信息内容 -->
			<view class="img-info">
				<image src="../static/FinancialScenes.png" style="width: 370rpx;height: 260rpx;"></image>
				<view class="tip">
					<text>高效预约教室</text>
				</view>
			</view>
			<!-- 预约信息 -->
			<view class="sub-info common-style">
				<view class="left-desc">
					<text>暂无预约</text>
					<!-- <text>查看预约详细</text> -->
				</view>
				<view class="right-user">
				</view>
			</view>
			<!-- 教室信息选择 -->
			<view class="select-box common-style">
				<u--form labelPosition="top" :model="form" ref="classroomRef" labelWidth="auto"
					:labelStyle="{'color':'#d6d7d9'}">
					<u-form-item label="校区" prop="campus" borderBottom @click="controlActionList(1)">
						<u--input v-model="form.campus" placeholder="请选择校区" disabled disabledColor="#ffffff"
							border="none"></u--input>
						<u-icon slot="right" name="arrow-right"></u-icon>
					</u-form-item>
					<u-form-item label="周数" prop="week" borderBottom>
						<u--input v-model="form.week" placeholder="请选择具体周数" border="none"></u--input>
					</u-form-item>
					<u-form-item label="星期" prop="dayWeek" borderBottom @click="controlActionList(3)">
						<u--input v-model="form.dayWeek" placeholder="请选择校区" disabled disabledColor="#ffffff"
							border="none"></u--input>
						<u-icon slot="right" name="arrow-right"></u-icon>
					</u-form-item>
					<u-form-item label="楼栋" prop="buildingNo" borderBottom @click="controlActionList(4)">
						<u--input v-model="form.buildingNo" placeholder="请选择楼栋" disabled disabledColor="#ffffff"
							border="none"></u--input>
						<u-icon slot="right" name="arrow-right"></u-icon>
					</u-form-item>
					<u-form-item label="节数" prop="whichSection" borderBottom @click="controlActionList(5)">
						<u--input v-model="form.whichSection" placeholder="节数" disabled disabledColor="#ffffff"
							border="none"></u--input>
						<u-icon slot="right" name="arrow-right"></u-icon>
					</u-form-item>
				</u--form>
				<!--TODO 这里的action可以优化 只使用一个通用 -->
				<!--  form表单中所需的点击选择弹窗sheet都放在这里 -->
				<!-- 选择校区 -->
				<u-action-sheet :show="showAction" :actions="actionList" :title="actionTitle" @close="showAction = false" :closeOnClickOverlay="true" :closeOnClickAction="true" safeAreaInsetBottom @select="actionSelect">
				</u-action-sheet>
			</view>
			<!-- 显示楼层数据 -->
			<view class="building common-style">
				<view class="title">楼栋: L4</view>
				<view class="class-list">
					<view class="class-item">
						
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
				//action-sheet的显示控制
				showAction: false,
				//actionType用于知道当前用户点击了那个action sheet
				//默认规则：1校区 2周数 3星期 4楼栋 5节数 往对应的form赋值
				actionType: null,
				//用户选择后动态会往这里写入数据数组
				actionList: null,
				//标题
				actionTitle: null,
				//表单提交查询空教室
				form: {
					week: 11, //周数
					dayWeek: 4, //星期几
					campus: '南城校区', //校区
					buildingNo: 1, //楼栋
					whichSection: '1,2', //第几节课 1-2节传入形式: 1,2
				}
			}
		},
		methods: {
			//校区选择
			actionSelect(event) {
				//公用的select 通过type来判断写入那个属性
				console.log(event)
				switch(this.actionType) {
					case 1:
						this.form.campus = event.value
					break;
					case 3:
						this.form.dayWeek = event.value
					break;
					case 4:
						this.form.buildingNo = event.value
					break;
					case 5:
						this.form.whichSection = event.value
					break;
				}
				//赋值form
				// this.form.campus = event.name
			},
			//这个方法用于动态的写入action的数据
			controlActionList(type) {
				console.log(type)
				switch(type) {
					case 1: //校区
						this.actionType = 1
						this.actionList = [
							{name:'南城校区',value:'南城校区'},
							{name:'松山湖校区',value:'松山湖校区'}
						]
						this.actionTitle = '请选择校区'
						//显示组件
						this.showAction = true
					break;
					case 3: //星期
						let ary1 = []
						for (let i = 0;i < 4; i++) {
							ary1.push({name: `星期${i+1}`,value:i+1})
						}
						this.actionType = 3
						this.actionList = ary1
						this.actionTitle = '请选择星期'
						this.showAction = true
					break;	
					case 4: //楼栋
						let ary2 = []
						for (let i = 0;i < 9; i++) {
							ary2.push({name: `${i+1}栋`,value: i+1})
						}
						ary2.push({name:'工1',value:'工1'},{name:'L4',value:'L4'},{name:'L6',value:'L6'})
						this.actionType = 4
						this.actionList = ary2
						this.actionTitle = '请选择楼栋'
						this.showAction = true
					break;	
					case 5: //节数
						let ary3 = []
						//手动生成一到10节课
						for (let i = 1; i <= 10; i++) {
							if (i % 2 === 0) {
								ary3.push({name:`第${i-1}节-第${i}节`,value:`${i-1},${i}`})
							}
						}
						this.actionType = 5
						this.actionList = ary3
						this.actionTitle = '请选择节数'
						this.showAction = true
					break;	
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.classroom-select {
		width: 100%;
		height: 100%;
		position: relative;

		.bk_style {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 500rpx;
			z-index: -1;
			background-color: $background-color;
			border-bottom-left-radius: 30rpx;
			border-bottom-right-radius: 30rpx;
		}

		.inner-wrap {
			width: 100%;
			height: 100%;
			padding: 0 30rpx 30rpx 30rpx;
			color: white;

			// 图片信息
			.img-info {
				display: flex;
				justify-content: space-between;

				.tip {
					padding-top: 60rpx;
					color: #ffffff;
					font-family: '微软雅黑';
					font-weight: 800;
					letter-spacing: 8rpx;
					font-size: 40rpx;

					&>text {}
				}
			}

			.common-style {
				width: 100%;
				background-color: #ffffff;
				border-radius: 15rpx;
				padding: 20rpx 20rpx;
				margin-bottom: 30rpx;
			}

			//预约信息
			.sub-info {
				display: flex;

				.left-desc {
					font-size: 25rpx;
					color: #283043;
				}
			}
			// 楼层样式
			.building {
				width: 100%;
				.title {
					color: black;
					padding: 20rpx 0;
					font-size: 30rpx;
					letter-spacing: 5rpx;
					font-weight: 800;
				}
				.class-list {
					display: flex;
					flex-wrap: wrap;
					.class-item {
						padding: 10rpx;
						border-radius: 15rpx;
						border: 2rpx solid $background-color;
					}
				}
			}
		}
	}
</style>
