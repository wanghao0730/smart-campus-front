<template>
	<view class="news-detail">
		<NavBar navBk="rgb(164,147,255)" isBack>
			<template #navLeft>
				<view style="color:#fff;font-weight: 500;letter-spacing: 2px;">
					新闻详情
				</view>
			</template>
		</NavBar>
		<!-- 占位 -->
		<Perch />
		<view class="detail-wrap">
			<view class="content">
				<u-parse :content="detailContent" :domain="parseConfig.domain" :previewImg="parseConfig.previewImg" :selectable="parseConfig.selectable" :showImgMenu="parseConfig.showImgMenu" :tagStyle="tagStyles" class="parse"></u-parse>
			</view>
		</view>
	</view>
</template>

<script>
	import { newsDetail } from '../../../../network/news/new.js'
	export default {
		data() {
			return {
				parseConfig: {
					//主域名，设置后将给链接自动拼接上主域名或协议名
					domain:'https://www.gdust.edu.cn',
					//是否开启图片被点击时自动预览
					previewImg:true,
					//是否自动给 table 添加一个滚动层（使表格可以单独横向滚动）
					scrollTable:true,
					//是否开启长按复制内容
					selectable:true,
					//是否开启图片被长按时显示菜单
					showImgMenu:true,
				},
				//为了显示效果更好这里将样式进行重写,不适用源数据样式
				tagStyles: {
					p:'text-indent: 0pt;text-align:justify;font-family:Calibri;white-space:normal;font-size:32rpx;',
					span:'font-size:32rpx;line-height:50rpx;',
					img:'margin:0 auto;height:auto,width:auto;'
				},
				detailContent: ''
			}
		},
		onLoad(option) {
			// 根据用户传递的类型和id查找数据详情
			const id = option.newsId ?  Number(option.newsId) : null
			if(id) {
				this.detail(id)
			}
		},
		methods: {
			detail(id) {
				newsDetail({id}).then(res => {
					let {data:{content}} = res
					this.detailContent =content
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.news-detail {
		width: 100%;
		height: 100%;

		.detail-wrap {
			width: 100%;
			padding: 20rpx 10rpx;

			.content {
				padding:0 25rpx;
				background-color: #ffffff;
				border-radius: 35rpx;
				.parse {
					::v-deep view {
						text-indent: 0pt !important;
						margin: 20rpx 0 !important;
					}
				}
			}
		}
	}
</style>
