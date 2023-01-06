// {
// 						id: 1,
// 						icon: '/static/image/appl/ask.png',
// 						name: '请假审批'
// 					},
// 					{
// 						id: 2,
// 						icon: '/static/image/appl/library.png',
// 						name: '空闲教室'
// 					},
// 					{
// 						id: 3,
// 						icon: '/static/image/appl/activity.png',
// 						name: '社团活动'
// 					},
// 					{
// 						id: 4,
// 						icon: '/static/image/appl/newspaper.png',
// 						name: '校园活动'
// 					},
// 					{
// 						id: 5,
// 						icon: '/static/image/appl/report.png',
// 						name: '疫情上报'
// 					},
// 					{
// 						id: 3,
// 						icon: '/static/image/appl/mask.png',
// 						name: '风险查询'
// 					},
/**
 * 应用功能跳转页面 策略模式
 */
export default {
	'请假审批':[
		(info) => {
			//跳转对应的页面
			uni.navigateTo({
				url:''
			})
		}
	],
	'空闲教室':[
		(info) => {
			//跳转空闲教室
			uni.navigateTo({
				url:'/pages/index/childCmps/classroom/classroom'
			})
		}
	],
	'社团活动':[
		(info) => {
			//跳转社团活动
			uni.navigateTo({
				url:"/pages/index/childCmps/league/league"
			})
		}
	],
	"风险查询":[
		(info) => {
			uni.navigateTo({
				url:"/pages/index/childCmps/risk/risk"
			})
		}
	]
}