<template>
	<view class="navbar-wrap" :style="{height:customNav.navBarHeight + 'px',background:navBk}">
		<view class="navbar-search"
			:style="{height:customNav.menuHeight + 'px',minHeight:customNav.menuHeight+'px',lineHeight:customNav.menuHeight+'px',/*left:customNav.menuRight+'px',*/top:customNav.menuTop+'px'}">
			<view class="control-style">
				<view v-if="isBack" @click="goBack">
					<u-icon name="arrow-left" size="20"></u-icon>
				</view>
				<slot name="navLeft" :customNav="customNav"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	const App = getApp().globalData
	export default {
		props: {
			// 导航头部的背景颜色
			navBk: {
				type: String,
				default: () => 'rgba(255, 255, 255, 1)',
				required: false
			},
			/**
			 * 传递参数Boolean 是否需要返回按钮
			 */
			isBack: {
				type: Boolean,
				default: () => false,
				required: false
			},
		},
		data() {
			return {
				//自定义小程序导航栏 导航栏高度 = 状态栏高度 + 44
				customNav: {}
			}
		},
		methods: {
			//同意处理路由的回退
			goBack() {
				uni.navigateBack({
					delta: 1, //返回层数
				})
			}
		},
		mounted() {
			console.log("创建", App)
			this.customNav = App.customNav
		}
	}
</script>

<style lang="scss">
	.navbar-wrap {
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 999;

		.navbar-search {
			width: 65%;
			position: absolute;
			padding-left: 14px;
			// background-color: yellow;
			background-color: #fffff;

			.control-style {
				display: flex;
				align-items: center;
			}
		}
	}
</style>
