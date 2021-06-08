export class Label {
	constructor(name, type) {
		this.id = new Date().valueOf()
		this.name = name
		this.type = type
		this.sortID=1
	}
}
