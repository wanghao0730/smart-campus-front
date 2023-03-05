## uniapp跨平台开发记录

------

### (一) 使用luch-request请求插件

该插件可以方便的处理一些跨平台请求问题，提供了功能。文档地址:https://quanzhan.co/luch-request/

![image-20230305151507504](C:\Users\眼球净化\AppData\Roaming\Typora\typora-user-images\image-20230305151507504.png)

### (二) 利用wa-permission判断Android和ios权限问题

判断应用权限问题，具体文档地址:https://ext.dcloud.net.cn/plugin?id=594

![image-20230305151936824](C:\Users\眼球净化\AppData\Roaming\Typora\typora-user-images\image-20230305151936824.png)

### (三)  u-draw-poster 适用多端的异步海报绘制 

绘制海报可以使用该插件，具体文档地址：https://ext.dcloud.net.cn/plugin?id=3237

### (四)  5+API使用

#### (一)  uniapp进行拍照上传实现,具体uniapp兼容性问题查看官网

```javascript
handleBtn() {
		// #ifdef APP-PLUS
		//1.表示主摄像头 2辅助摄像头
		const self = this;
		const camera = plus.camera.getCamera(1)
		const res = camera.supportedImageResolutions[0] //获取分辨率
		const fmt = camera.supportedImageFormats[0] //摄像头支持的拍照格式
		camera.captureImage(function(path) {
			//地址转换
			plus.io.resolveLocalFileSystemURL(path, function(entry) {
				//获取转换后的地址调用上传接口
				let resolvePath = entry.toLocalURL() //转换为本地url地址
				//调用上传
				console.log(resolvePath)
				self.upload(resolvePath)
			}, function(error) {
				console.log("读取照片失败", error.message)
			})
		}, function(error) {
			//用户取消了也会调用的接口
			this.$u.toast('拍照上传失败', 1500)
		}, {
			resolution: res, //先获取摄像头所支持的分辨率上面
			format: fmt
		})

		// #endif
	},
	//拿到路径位置上传图片到远程数据库
	// #ifdef APP-PLUS
	upload(path) {
		console.log("查看地址", path)
		const globalData = getApp()
			.globalData
		const waiting = plus.nativeUI.showWaiting() //显示正在加载
		const task = plus.uploader.createUpload(`${globalData.requesturl}/common/upload`, {
			method: 'POST'
		}, function(t, status) {
			if (status === 200) { //上传图片成功
				let data = JSON.parse(t.responseText)
				console.log({
					data
				})
			} else {

			}
			waiting.close()
		})
		//往task里面增加数据
		task.addFile(path, {
			key: 'file'
		}) //key对应后端的参数
		task.start() //开始上传任务
	},
```

