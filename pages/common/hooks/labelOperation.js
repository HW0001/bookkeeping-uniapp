import {
	defaultLabels
} from '../../../constant/labels.js'
import {
	CONST_LABEL_KEY
} from '../../../constant/labels.js'

class LabelOperation {
	constructor() {
		this.labels = []
		this.initLabels()
	}
	initLabels() {
		console.log(1)
		const value = uni.getStorageSync(CONST_LABEL_KEY)
		if (value) {
			this.labels = JSON.parse(value)
		} else {
			this.labels = defaultLabels
		}
	}
}
export default new LabelOperation()
