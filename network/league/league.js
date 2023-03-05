/**
 * 用户接口 
 */
const { global_request } = getApp().globalData;

/**
 * 社团列表查看
 * @param {Object} data
 */
export function leagueList(data) {
	return global_request(`/league/list`,data,'GET')
}

/**
 * 查看社团详情
 * @param {Object} data
 */
export function leagueDetail(data) {
	return global_request(`/league/${data.id}`,null,'GET')
}