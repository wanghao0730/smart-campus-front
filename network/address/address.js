
/**
 * 用户接口 
 */
const { global_request } = getApp().globalData;

//用户地址列表
export function selectAddressList(data) {
		return global_request(`/address/list`,data,'GET')
}

//新增用户地址
export function addAddress(data) {
	return global_request(`/address/add`,data,'POST')
}

//更新地址
export function updateAddress(data) {
	return global_request(`/address/update`,data,'POST')
}

//设置默认地址
export function updateDefault(id) {
	return global_request(`/address/setDefault/${id}`,null,'PUT')
}