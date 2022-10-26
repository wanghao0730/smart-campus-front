
/**
 * 统一的getters方便外界调用模块中的数据
 * @author WangHao
 */
const getters = {
	wxuser:state => state.user.wxuser,
	token: state => state.user.token
}

export default getters