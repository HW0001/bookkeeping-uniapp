import {
	CONST_LABEL_KEY,
	defaultLabels
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
		},
		saveLabel(state, label) {
			const index = state.labels.findIndex(f => f.id === label.id)
			if (index > 0) {
				state.labels.splice(index, 1, label)
			} else {
				state.labels.push(label)
			}
			uni.setStorage({
				key: CONST_LABEL_KEY,
				data: JSON.stringify(state.labels),
			})

		}
	},
	actions: {

	}
}
export default labelStore
