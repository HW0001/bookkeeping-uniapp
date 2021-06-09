import {
	CONST_RECORD_SAVE
} from '../../../constant/home.js'
import Record from '../class/record.js'
const operationObject = {
	'del': keyDelete,
	'ok': keySave,
	'.': keySpot,
	'0': keyZero,
	'+': addOrSub,
	'-': addOrSub
}

function keyDelete(value) {
	const newValue = [...value || '0']
	newValue.pop()
	return newValue.join('')
}

function keySave(value, key, isSave) {
	if (isSave)
		return CONST_RECORD_SAVE
	else return calculateString(value)
}

function keySpot(value) {
	if (value.length > 18) return value
	if (!value) return '0.'
	const strArray = value.split(/[+-]/)
	if (strArray.length === 1) {
		if (value.includes('.')) return value
		else return value + '.'
	} else {
		const endStr = strArray[strArray.length - 1]
		if (endStr === '') return value + '0.'
		else if (endStr.includes('.')) return value
		else return value + '.'
	}

}

function keyZero(value) {
	if (value.length > 18) return value
	if (value === '0') return '0'
	else return value + '0'
}

function addOrSub(value, key) {
	if (value.length > 18) return value
	if (!value) return key
	return value + key
}

function calculateString(value) {
	if (!value) return ""
	const addArray = value.split('+')
	return addArray.map(add => {
		if (!add) return 0
		const subArray = add.split('-')
		if (subArray.length === 1) return add
		else {
			return subArray.reduce((pre, sub, index) => {
				sub = sub || 0
				if (index === 0) return sub
				try {
					sub = parseFloat(sub)
				} catch {
					sub = 0
				}
				return pre - sub
			}, 0)
		}
	}).reduce((pre, add) => {
		try {
			add = parseFloat(add)
		} catch {
			add = 0
		}
		return pre + add
	}, 0).toString()
}

export function keyOperation(value, key, isSave) {
	if (operationObject[key])
		return operationObject[key](value, key, isSave)
	else if (value.length > 18) return value
	else if (value === '0') return key
	else return value + key
}
