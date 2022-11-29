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
				detailContent: `
				<div class="content" id="Content">
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;line-height:21px;">
					<b><span style="font-family:宋体;line-height:24px;font-size:12pt;">本网讯（教务处）</span></b><span style="font-family:宋体;line-height:24px;font-size:12pt;">9月27日下午，我校2022年校级“质量工程”专业类项目立项评审会</span><span style="font-family:宋体;line-height:24px;font-size:12pt;"><span style="font-family:宋体;">在南城校区行政楼</span><span style="font-family:宋体;">308会议室召开</span></span><span style="font-family:宋体;line-height:24px;font-size:12pt;">。</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">校长</span><span style="font-family:宋体;line-height:24px;font-size:12pt;">梁</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">瑞雄</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">，</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">校学术委员会委员</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">、</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">机电工程学院院长</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">高俊国</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">，</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">刘沃野教授</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">，</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">徐永智教授</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">，</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">滕英岩教授</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">，</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">谭立平教授</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">，</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">沈畔阳教授</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">，</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">9位项目负责人及教务处相关人员</span><span style="font-family:宋体;line-height:24px;font-size:12pt;">出席会议。会议由教务处处长李炳主持。</span><span style="font-family:宋体;line-height:24px;font-size:12pt;"><o:p></o:p></span>
				</p>
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;line-height:21px;">
					<span style="font-family:宋体;line-height:24px;font-size:12pt;">会上</span><span style="font-family:宋体;line-height:24px;font-size:12pt;">，</span><span style="font-family:宋体;line-height:24px;font-size:12pt;">工商管理专业李玉明、汽车服务工程专业金标、自动化专业王华荣、信息管理与信息系统专业赵博、英语专业周文德、环境设计专业苏专、大数据管理与应用专业关胜、通信工程专业张芝贤及智能科学与技术专业张龙青依次围绕专业建设情况进行汇报，</span><span style="font-family:宋体;line-height:24px;font-size:12pt;">并</span><span style="font-family:宋体;line-height:24px;font-size:12pt;">逐一</span><span style="font-family:宋体;line-height:24px;font-size:12pt;">接受</span><span style="font-family:宋体;line-height:24px;font-size:12pt;">校内专家质询。</span><span style="font-family:宋体;line-height:24px;font-size:12pt;"><o:p></o:p></span>
				</p>
				<p class="MsoNormal" style="text-align:center;margin:0pt 0pt 0.0001pt;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;line-height:21px;">
					<span style="font-family:宋体;line-height:24px;font-size:12pt;"><img src="/e/upload/s1/fck/image/2022/10/08/1815498548.png" alt=""><br>
				</span>
				</p>
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;line-height:21px;">
					<span style="font-family:宋体;line-height:24px;font-size:12pt;">最后，梁</span><span style="font-family:宋体;line-height:24px;letter-spacing:-0.3pt;font-size:12pt;">瑞雄校长进行了</span><span style="font-family:宋体;line-height:24px;font-size:12pt;"><span style="font-family:宋体;">总结发言。他对此次参与</span><span style="font-family:宋体;">“2022年校级‘质量工程’专业类项目立项评审会”的专家及工作人员表示感谢，对相关项目团队的申报热情表示肯定，并对各项目负责人提出三点要求：一是要把本专业的情况了解清楚；二是专业建设思路要清晰，专业建设的条件和特色要明确，重点是提高学生的综合素养和核心能力，培养的学生能够真正服务地方经济、社会发展；三是申报材料的撰写要严谨、仔细，须反复斟酌、打磨。同时</span></span><span style="font-family:宋体;line-height:24px;font-size:12pt;">梁校长</span><span style="font-family:宋体;line-height:24px;font-size:12pt;">建议</span><span style="font-family:宋体;line-height:24px;font-size:12pt;">，</span><span style="font-family:宋体;line-height:24px;font-size:12pt;">教务处在后续评审工作中</span><span style="font-family:宋体;line-height:24px;font-size:12pt;">要</span><span style="font-family:宋体;line-height:24px;font-size:12pt;">进一步完善会务准备工作，提供专业建设相关背景材料给专家，提高评审的信度和效度。</span><span style="font-family:宋体;line-height:24px;font-size:12pt;"><o:p></o:p></span>
				</p>
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;line-height:21px;">
					<span style="font-family:宋体;line-height:24px;font-size:12pt;"><span style="font-family:宋体;">会议评选出的</span><span style="font-family:宋体;">3个校级一流专业及2个校级特色专业，扩大了我校专业建设基础，推动了我校专业建设发展。</span></span><span style="font-family:宋体;line-height:24px;font-size:12pt;"><span style="font-family:宋体;">本次会议既是一场校级</span><span style="font-family:宋体;">“质量工程”专业类项目立项评审会，又是一次专业建设方向的交流会，</span></span><span style="font-family:宋体;line-height:24px;font-size:12pt;">也</span><span style="font-family:宋体;line-height:24px;font-size:12pt;">为学校教学项目评审工作更加规范化发展提出了新要求。</span><span style="line-height:24px;font-size:12pt;"><o:p></o:p></span>
				</p>
				
				</div>
				`
			}
		},
		onLoad(option) {
			// 根据用户传递的类型和id查找数据详情

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
