//接口

//user模块
const user = {
	namespaced:true, //命名空间
	state: () => ({
		wxuser: {}, //用户对象
		token: '', //token值
		defaultAddress: null, //记录用户的地址请求的默认地址存放 以及选择地址后
	}),
	//提交mutations修改state
	mutations: {
		//存储登录用户信息
		SET_WXUSER: (state, payload) => {
			state.wxuser = payload
		},
		SET_TOKEN: (state, token) => {
			state.token = token
		},
		SET_DEFAULT_ADDRESS: (state, payload) => {
			console.log("提交过来了",payload)
			state.defaultAddress = payload
		}
	},
	//异步事件提交
	action: {
		Login({
			commit
		}, userInfo) {

		}
	}

}

export default user
