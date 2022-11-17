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
				<u-parse :content="detailContent" :domain="parseConfig.domain" :previewImg="parseConfig.previewImg" :selectable="parseConfig.selectable" :showImgMenu="parseConfig.showImgMenu" :tagStyle="tagStyles"></u-parse>
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
					p:'text-indent:0rpx;text-align:justify;font-family:Calibri;white-space:normal;font-size:32rpx;',
					span:'font-family:宋体;font-size:32rpx;line-height:50rpx;',
					img:'margin:0 auto;height:auto,width:auto;'
				},
				detailContent: `
				<div class="content" id="Content">
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<b><span style="font-family:宋体;font-size:12pt;">本网讯</span></b><b><span style="font-family:宋体;font-size:12pt;">（</span></b><b><span style="font-family:宋体;font-size:12pt;">党委办公室</span></b><b><span style="font-family:宋体;font-size:12pt;">）</span></b><span style="font-family:宋体;font-size:12pt;">11月11日-12日</span><span style="font-family:宋体;font-size:12pt;">，我</span><span style="font-family:宋体;font-size:12pt;">校</span><span style="font-family:宋体;font-size:12pt;">第四期党委理论学习中心组（扩大）学习会暨管理干部培训会顺利召开</span><span style="font-family:宋体;font-size:12pt;">。</span><span style="font-family:宋体;font-size:12pt;"><span style="font-family:宋体;">学校全体党政领导、中层干部、各部门助理、各级党组织书记、专业建设负责人、专业带头人、教研室主任、二级学院综合办主任出席会议。</span></span>
				</p>
				<p class="MsoNormal" style="text-align:center;margin:0pt 0pt 0.0001pt;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;"><span style="font-family:宋体;"><img src="/e/upload/s1/fck/image/2022/11/14/1218524216.jpg" alt=""><br>
				</span></span>
				</p>
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;"><span style="font-family:宋体;">本次会议以线上线下相结合方式召开，在南城校区图书馆七楼报告厅设主会场，在松山湖校区</span><span style="font-family:宋体;">5-102报告厅设立分会场，并通过线上方式同步直播。会议按培训主题分别由省督导专员、学校党委书记吴念香，学校党委副书记、副校长陈标新，学校党委委员、副校长赵惠华，学校党委副书记毕会东主持。</span></span><span style="font-family:宋体;font-size:12pt;"><o:p></o:p></span>
				</p>
				<p class="MsoNormal" style="text-align:center;margin:0pt 0pt 0.0001pt;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;"><img src="/e/upload/s1/fck/image/2022/11/14/1219034524.jpeg" alt="">&nbsp;</span>
				</p>
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;"><span style="font-family:宋体;">校长梁瑞雄作题为</span><span style="font-family:宋体;">“凝心聚力同筑广科梦，多措并举共谱新篇章”的专题报告。他首先从党的二十大报告是推动中国特色社会主义伟大事业不断前进的政治宣言、理论纲领，党的二十大报告是推动中国特色社会主义伟大事业不断前进的行动指南，党的二十大报告关于教育的阐述需要我们深入研究深刻领会，党的二十大精神需要我们结合实际认真贯彻落实等四个方面，带领我们共同学习了党的二十大精神。他提出，我们要突出做好审核评估迎评和硕士学位立项单位建设工作，大力推进“五育并举、分类培养、创新创业”等特色人才培养模式，不断提高教育教学水平和人才培养质量，为区域经济社会发展贡献广科力量。</span></span><span style="font-family:宋体;font-size:12pt;"><o:p></o:p></span>
				</p>
				<p class="MsoNormal" style="text-align:center;margin:0pt 0pt 0.0001pt;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;"><span style="font-family:宋体;"><img src="/e/upload/s1/fck/image/2022/11/14/1219184096.jpeg" alt=""><br>
				</span></span>
				</p>
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;"><span style="font-family:宋体;">随后，他从广科梦是什么以及如何实现广科梦这两方面，全面阐释了学校的顶层设计与实施路径。他指出，在开启</span><span style="font-family:宋体;">“广科梦”新征程，构建标准化定位体系方面，要贯彻新发展理念，推动学校发展与新发展理念相结合；要找准新发展的七个定位，推动落实立德树人根本任务；要明确发展思路，聚焦“应用创新”，立足于五个着眼的关键指标，专注于五个着力的品牌建设和孕育五个特色的内涵建设。在擘画“广科梦”新蓝图，构建高质量发展新格局方面，要立足迎接新一轮本科教育教学审核评估和硕士学位授予单位建设“两项工作”，推动办学迈上新台阶；要落实立德树人根本任务，构建三全育人工作格局；要对标“一流专业”，提升学科专业建设水平；要聚焦“应用创新”，推进人才培养模式改革；要锤炼“双师双能”，打造高水平人才队伍；要践行“学生中心”，完善学生发展服务体系；要深化“产学研合作”，提升服务地方发展能力；要强化“持续改进”，健全质量保障体系；要弘扬“大学精神”，培育优秀校园文化；要坚持“党建引导”，带动全面高质量发展。</span></span><span style="font-family:宋体;font-size:12pt;"><o:p></o:p></span>
				</p>
				<p class="MsoNormal" style="text-align:center;margin:0pt 0pt 0.0001pt;font-family:Calibri;font-size:10.5pt;white-space:normal;">
					<span style="font-family:宋体;font-size:12pt;"><span style="font-family:宋体;"><img src="/e/upload/s1/fck/image/2022/11/14/1219310183.jpeg" alt=""><br>
				</span></span>
				</p>
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;">科研处处长高久群作题为《学校硕士学位授予单位（硕士点）建设工作介绍》的专题辅导。他基于当今全国的申硕背景，对照新增硕士单位的申报条件以及对相关《简况表》进行分析，从学校自身情况出发，指出要不断升级师资队伍，提高科研水平，完善配套条件，相关部门要扛起主要责任，以学科建设为抓手，按照硕士学位点的建设要求，细化分解任务，对照指标体系，凝练学科建设方向，打造学术团队，补短板、强弱项，持续推进学校申硕工作建设。</span>
				</p>
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;"><span style="font-family:宋体;">学校党委邀请了华南师范大学马克思主义学院院长陈金龙教授，以线上方式作题为《全面建设社会主义现代化国家的行动纲领</span><span style="font-family:宋体;">——学习党的二十大精神》专题报告。陈教授围绕“七个深刻认识”展开，分别从“深刻认识党的二十大的主题、主要成果，深刻认识过去五年和新时代十年的伟大变革，深刻认识习近平新时代中国特色社会主义思想开辟马克思主义中国化时代化新境界，深刻认识中国式现代化的新论断，深刻认识全面建设社会主义现代化国家的目标任务，深刻认识坚持党的全面领导和全面从严治党，深刻认识前进道路上的风险挑战”对党的二十大精神作了全面宣讲和深入解读。</span></span><span style="font-family:宋体;font-size:12pt;"><o:p></o:p></span>
				</p>
				<p class="MsoNormal" style="text-align:center;margin:0pt 0pt 0.0001pt;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;">&nbsp;<img src="/e/upload/s1/fck/image/2022/11/14/1219468762.jpeg" alt=""></span>
				</p>
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;"><span style="font-family:宋体;">校党委委员、党委宣传部部长、党委办公室主任李赫男作题为《大宣传格局下高校舆情工作的思考》的辅导报告。她从</span><span style="font-family:宋体;">“近年来，高校舆情呈现的特点出发，阐明关注高校舆情的重要性；讲解高校舆情主要类型和发生场域、生成逻辑和态势特征；并提出应对舆情的工作思路和应对建议”，带领全体管理干部深入探讨大宣传格局下的高校舆情工作。她表示，全体管理干部要提高政治站位，进一步增强政治敏感性和敏锐性，坚持从政治的高度看待和处置舆情，齐心协力扎实做好学校宣传及舆情相关工作。</span></span><span style="font-family:宋体;font-size:12pt;"><o:p></o:p></span>
				</p>
				<p class="MsoNormal" style="text-align:center;margin:0pt 0pt 0.0001pt;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;">&nbsp;<img src="/e/upload/s1/fck/image/2022/11/14/1219578383.jpeg" alt=""></span>
				</p>
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;"><span style="font-family:宋体;">软件工程专业教师党支部书记、专业建设负责人聂军作题为《支部建在专业上与一流专业建设》的经验分享。聂教授从专业建设思路、做好</span><span style="font-family:宋体;">OBE理念下的专业建设顶层设计、深化三全育人模式、构建一点两翼四层次的实践教学体系、建设一流的师资队伍等多方面深入讲述以工程教育专业认证为抓手推进一流专业建设的具体实践。同时，他结合支部建设实际，讲述了“支部建在专业上”的优势和工作思路。他表示，“支部建在专业上”是党建与专业目标同向、工作合拍的重要举措，重点要实现“党建+专业”、“思政+技术”、“育德+培才”相结合，让支部成为专业建设的策源地，扎实推进专业各项建设工作取得长足发展。</span></span><span style="font-family:宋体;font-size:12pt;"><o:p></o:p></span>
				</p>
				<p class="MsoNormal" style="text-align:center;margin:0pt 0pt 0.0001pt;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;">&nbsp;<img src="/e/upload/s1/fck/image/2022/11/14/1220105358.jpeg" alt=""></span>
				</p>
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;"><span style="font-family:宋体;">副校长吴立平作了题为《构建招生</span><span style="font-family:宋体;">-培养-就业联动机制，推动专业高质量发展》的专题报告。她分别从构建招生-培养-就业联动机制必要性、分析学校联动机制现状、完善联动机制路径探索三方面进行阐述。她指出，高质量生源是提高人才培养质量的基础保障，人才培养体系是提高人才培养质量的核心环节，就业质量是衡量人才培养质量和办学水平的重要指标，招生、培养、就业三者在人才培养全过程中相辅相成、密不可分。招生-培养-就业联动机制的建立，是适应高考制度改革的客观要求，是高校内涵式发展的内在要求，是提高人才培养质量的重要举措，也是提升就业质量的必然选择。她提出，联动机制的构建要做好以下工作：一是要重视数据比较，提高工作精准性；二要坚持以学生需求为本，关注学生长远发展；三是要坚持育人成果导向，深入开展校企合作；四是要加强团队建设，充分发挥合力。她强调，各相关部门要坚持“招生-培养-就业”系统观念，形成以高质量生源促进人才培养质量提高，以培养高质量人才赢得就业市场，以更充分和更高质量就业吸引高质量生源的良性循环，从而实现招生、培养、就业三个环节相互促进，推动专业建设高质量发展。</span></span><span style="font-family:宋体;font-size:12pt;"><o:p></o:p></span>
				</p>
				<p class="MsoNormal" style="text-align:center;margin:0pt 0pt 0.0001pt;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;">&nbsp;<img src="/e/upload/s1/fck/image/2022/11/14/1220222917.jpeg" alt=""></span>
				</p>
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;"><span style="font-family:宋体;">评建与质量监控办公室主任轩永涛作题为《以</span><span style="font-family:宋体;">“自评报告”撰写为抓手，深入推进审核评估自评自建》的专题报告。他从本科教育教学审核评估背景及自评自建情况、自评报告作用及撰写方法、支撑材料的分工与形成、常模数据的对比分析和自评自建推进过程中的主要问题四个方面，介绍了审核评估自评报告的撰写思路与方法，分析了当前学校人才培养核心数据现状、存在的问题及原因分析，提出要认真学习和深刻领会审核评估的内涵与实质，准确把握和全面理解学校发展定位、目标及部门工作内容，找准问题所在，补短板、强弱项，为新一轮审核评估做好各种充分准备。</span></span><span style="font-family:宋体;font-size:12pt;"><o:p></o:p></span>
				</p>
				<p class="MsoNormal" style="text-align:center;margin:0pt 0pt 0.0001pt;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;">&nbsp;<img src="/e/upload/s1/fck/image/2022/11/14/1220360606.jpeg" alt=""></span>
				</p>
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;"><span style="font-family:宋体;">五育并举工作委员会德育专项工作组组长、学生处处长王宏武，智育专项工作组组长、教务处处长李炳，体育专项工作组组长、通识教育学院体育工作助理林继东，美育专项工作组组长、通识教育学院博雅工作助理钟琼，劳育专项工作组组长、学生处副处长董德成，分别就《广东科技学院</span><span style="font-family:宋体;">“五育并举”育人模式实施方案》按照“德育铸魂、智育固本、体育强身、美育浸润和劳育淬炼”五个专项工作依次为大家解读各专项工作的实施方案。</span></span><span style="font-family:宋体;font-size:12pt;"><o:p></o:p></span>
				</p>
				<p class="MsoNormal" style="text-align:center;margin:0pt 0pt 0.0001pt;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;">&nbsp;<img src="/e/upload/s1/fck/image/2022/11/14/1220496792.png" alt=""></span>
				</p>
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;"><span style="font-family:宋体;">五育导师代表、马克思主义学院周菊菊老师作五育导师经验分享。她结合</span><span style="font-family:宋体;">“菊姐在线·困惑不见”谈经验做法，结合五育工作问题谈总结反思，结合现实意义、深化研究、学习创新、重点帮扶四个维度谈五育工作的改进方向，引导五育导师在育人工作中真正发挥育人作用。</span></span><span style="font-family:宋体;font-size:12pt;"><o:p></o:p></span>
				</p>
				<p class="MsoNormal" style="text-align:center;margin:0pt 0pt 0.0001pt;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;">&nbsp;<img src="/e/upload/s1/fck/image/2022/11/14/1220591890.jpeg" alt=""></span>
				</p>
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;"><span style="font-family:宋体;">人事处副处长张少华作专题培训《学习、践行〈新时代高校教师职业行为十项准则〉，争做新时代</span><span style="font-family:宋体;">“四有”好老师》。他立足教师岗位，结合自己的所学、所思、所感、所悟，从三个维度分享了为什么要学习十项准则、十项准则有什么要求以及如何落实十项准则，希望广大教师全面理解、深刻把握《新时代高校教师职业行为十项准则》的核心要义，以实际行动引领带动身边人坚持底线思维，恪守职业准则，防止师德师风失范行为，努力成为党和人民满意的新时代“四有”好老师，为培养德智体美劳全面发展的社会主义合格建设者和可靠接班人贡献力量。</span></span><span style="font-family:宋体;font-size:12pt;"><o:p></o:p></span>
				</p>
				<p class="MsoNormal" style="text-align:center;margin:0pt 0pt 0.0001pt;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;">&nbsp;<img src="/e/upload/s1/fck/image/2022/11/14/1221098550.jpeg" alt=""></span>
				</p>
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;"><span style="font-family:宋体;">校长梁瑞雄作本次学习培训会的总结讲话。他对此次会议予以高度肯定，并就</span><span style="font-family:宋体;">2022年秋季学期上半学期工作进行总结，回顾了疫情防控、党建引领、教学科研、人才队伍建设、学生管理教育、就业创业、招生、基础设施建设等八个方面的工作情况。并提出了下半学期的工作要点，包括综合管理、党建宣传、教学、科研、人才队伍建设、就业创业、审核评估与硕士学位立项建设单位建设等七大项具体工作。</span></span><span style="font-family:宋体;font-size:12pt;text-indent:24pt;">他对全体管理干部提出以下五点要求：一是严于律己，以身作则，保持干部的引领性；二是全面梳理，统筹推进，增强工作的系统性；三是不闹情绪化，不犯</span><span style="font-family:宋体;font-size:12pt;text-indent:24pt;">“冷热病”，保证工作的连续性；四是找出差距，补齐短板，清醒工作的紧迫性；五是真担当、真落实、真作为，注重工作的实效性。</span>
				</p>
				<p class="MsoNormal" style="margin:0pt 0pt 0.0001pt;text-align:justify;font-family:Calibri;font-size:10.5pt;white-space:normal;text-indent:24pt;">
					<span style="font-family:宋体;font-size:12pt;">本次广东科技学院第四期党委理论学习中心组（扩大）学习会暨管理干部培训会的举办，是深入学习宣传党的二十大精神以及贯彻落实习近平总书记关于教育工作的重要论述精神的具体体现，旨在加强思想建设、提高政治素养，凝聚队伍共识、提高管理水平。通过搭建学习交流平台，探讨学校发展问题，分享交流工作经验，更好地促进学校各项事业发展。各部门要建立推动重点工作常态化机制和全面贯彻学校发展思路，各管理干部要充分认识此次培训的意义，自觉增强学习的积极性、主动性，在理论武装、能力水平、工作作风上有新提高，在推动学校高质量发展中有新担当、新作为、新贡献。</span><span style="font-family:宋体;font-size:12pt;"><o:p></o:p></span>
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
				padding: 25rpx;
				background-color: #ffffff;
				border-radius: 35rpx;
			}
		}
	}
</style>
