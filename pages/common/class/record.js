export class Record {
	constructor(amount, recordType, labels, recordDate, amark) {
		this.id = new Date().valueOf()
		this.amount = amount
		this.recordType = recordType
		this.labels = labels
		this.recordDate = recordDate
		this.saveDate = new Date()
		this.amark = amark
	}
}
