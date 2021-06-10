window.Date.isSameDay = (day1, day2) => {
	let resule = false
	try {
		const newDay1 = new Date(day1)
		const newDay2 = new Date(day2)
		resule = newDay1.getYear() === newDay2.getYear() && newDay1.getMonth() === newDay2.getMonth() && newDay1
			.getDay() === newDay2.getDay()
	} catch {
		resule = false
	}
	return resule
}
window.Date.formatDate = (date, fmt) => {
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}

	let o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	};

	for (let k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			let str = o[k] + '';
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : window.padLeftZero(str));
		}
	}
	return fmt;

}
window.padLeftZero=function(str) {
	return ('00' + str).substr(str.length);
}
