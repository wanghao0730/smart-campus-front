
/**
 * 用户接口 
 */
const { global_request } = getApp().globalData;

export default {
	
	//用户注册
	register(data) {
		return global_request("/user/register",data,'POST')
	},
	//用户登录
	login(data) {
		return global_request("/user/login",data,'POST')
	}
}