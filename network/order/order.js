
/**
 * 用户接口 
 */
const { global_request } = getApp().globalData;

//用户地址列表
export function selectOrderList(data) {
		return global_request(`/order/list`,data,'GET')
}

export function addOrder(data) {
	return global_request(`/order/add`,data,'POST')
}