export class Record {
	constructor(amount, recordType, labels, amark) {
		this.id = new Date().valueOf()
		this.amount = amount
		this.recordType = recordType
		this.labels = labels
		this.saveDate = new Date()
		this.amark = amark
	}
}
