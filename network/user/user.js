
/**
 * 用户接口 
 */
const { global_request,WX_APPID } = getApp().globalData;

//用户登录接口
export function userLogin(data) {
		return global_request(`/wx/user/${WX_APPID}/login`,data,'POST')
}

//查询用户信息
export function getUserInfo(id) {
	return global_request(`/wx/user/${WX_APPID}/info/${id}`,null,'GET')
}

export function updateInfo(data) {
	return global_request(`/wx/user/${WX_APPID}/update`,data,'POST')
}