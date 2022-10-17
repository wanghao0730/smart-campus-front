/**
 * 防抖函数
 */
function debounce(fn,interval) {
	let timer;
	let gapTime = interval || 1000;
	return function() {
		clearTimeout(timer);
		let context = this;
		let args = arguments;
		timer = setTimeout(function() {
			fn.call(context,args);
		},gapTime)
	}
}

export default  {
	debounce
}