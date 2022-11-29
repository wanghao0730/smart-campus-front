
/**
 * 用户接口 
 */
const { global_request } = getApp().globalData;

//用户地址列表
export function selectOrderList(data) {
		return global_request(`/order/list`,data,'GET')
}

// 添加订单
export function addOrder(data) {
	return global_request(`/order/add`,data,'POST')
}

//跑腿订单详情 用于从订单列表页面点击进入详情的时候发起请求判断当前订单是否被接单
export function orderDetail(data) {
	return global_request(`/order/userOrder/${data.id}`,null,'GET')
}

// 查询用户发起的跑腿订单列表
export function userOrderList(data) {
	return global_request(`/order/userOrder`,data,'POST')
}


//我的接单页面用户进入后查询当前用户接单数据
export function userDeliveList(data) {
	return global_request(`/order/deliverOrder`,data,'GET')
}

//用户接单
export function taking(data) {
	return global_request(`/order/taking`,data,'POST')
}


//订单状态变化
export function changeStep(data) {
	return global_request(`/order/updateStep`,data,'POST')
}
