/**
 * 店铺接口
 */
const { global_request } = getApp().globalData;

export function storeList(data) {
	return global_request(`/store/list`,data,'GET')
}