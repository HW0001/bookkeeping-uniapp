import {
	CONST_RECORD_KEY
} from '../../../constant/record.js'


class RecordOperation {
	constructor() {
		this.records = []
		this.getAllRecord()
	}
	getAllRecord() {
		const value = uni.getStorageSync(CONST_RECORD_KEY)
		if (value) {
			const records = JSON.parse(value)
			if (Array.isArray(records)) {
				this.records = records
			} else {
				this.records = []
			}
		} else {
			this.records = []
		}
	}
	saveRecord(record) {
		this.records.push(record)
		console.log(this.records)
		uni.setStorage({
			key: CONST_RECORD_KEY,
			data: JSON.stringify(this.records),
		})
	}
}

export default new RecordOperation()