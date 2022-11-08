
/**
 * 用户接口 
 */
const { global_request } = getApp().globalData;

//用户登录接口
export function userLogin(appId,data) {
		return global_request(`/wx/user/${appId}/login`,data,'POST')
}