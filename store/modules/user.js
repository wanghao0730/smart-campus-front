//接口

//user模块
const user = {
	state:{
		wxuser:{},
		token:'123456'
	},
	//提交mutations修改state
	mutations:{
		//存储登录用户信息
		SET_WXUSER:(state,payload) => {
			state.wxuser = payload
		},
		SET_TOKEN: (state,token) => {
			state.token = token
		}
	},
	//异步事件提交
	action: {
		Login({commit},userInfo) {
			
		}
	}
	
}

export default user