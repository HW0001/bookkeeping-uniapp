import {
	CONST_RECORD_KEY
} from '../constant/record.js'
const recordStore = {
	state: {
		records: []
	},
	getters: {

	},
	mutations: {
		initRecords(state) {
			const value = uni.getStorageSync(CONST_RECORD_KEY)
			if (value) {
				const records = JSON.parse(value)
				if (Array.isArray(records)) {
					state.records = records
				} else {
					state.records = []
				}
			} else {
				state.records = []
			}
		},
		saveRecord(state, record) {
			state.records.push(record)
			uni.setStorage({
				key: CONST_RECORD_KEY,
				data: JSON.stringify(state.records),
			})
		}
	},
	actions: {

	}
}

export default recordStore
