/**
 * 用户接口 
 */
const { global_request } = getApp().globalData;


/**
 * 查看校园新闻数据
 * @param {Object} data
 */
export function newsList(data) {
	return global_request(`/news/list`,data,'GET')
}

/**
 * 查看新闻详情
 * @param {Object} data
 */
export function newsDetail(data) {
	return global_request(`/news/${data.id}`,null,'GET')
}