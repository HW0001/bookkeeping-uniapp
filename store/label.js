import {
	CONST_LABEL_KEY,defaultLabels
} from '../constant/labels.js'
const labelStore = {
	state: {
		labels: []
	},
	getters: {

	},
	mutations: {
		initLabels(state) {
			const value = uni.getStorageSync(CONST_LABEL_KEY)
			if (value) {
				state.labels = JSON.parse(value)
			} else {
				state.labels = defaultLabels
			}
		}
	},
	actions: {

	}
}
export default labelStore
