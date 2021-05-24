const operationObject = {
	'del': keyDelete,
	'ok': keySave,
	'.': keySpot,
	'0': keyZero
}

function keyDelete(value) {
	const newValue = [...value || '0']
	newValue.pop()
	return newValue.join('')
}

function keySave(value) {
	console.log(value)
	return value
}

function keySpot(value) {
	if (value.length > 18) return value
	if (!value) return '0.'
	if (value.includes('.')) return value
	else return value + '.'
}

function keyZero(value) {
	if (value.length > 18) return value
	if (value === '0') return '0'
	else return value + '0'
}
export function keyOperation(value, key) {
	if (operationObject[key])
		return operationObject[key](value)
	else if (value.length > 18) return value
	else return value + key
}
