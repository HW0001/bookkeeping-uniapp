<template>
	<view>
		<RecordType :selected.sync="recordType" />
		<RecordList :recordType='recordType' />
	</view>
</template>

<script>
	import RecordType from '../common/components/recordType.vue'
	import RecordList from './recordList.vue'
	import {CONST_RECORD_TYPE} from '../../constant/home.js'
	export default {
		data() {
			return {
				recordType:CONST_RECORD_TYPE.EXPEND
			}
		},
		components: {
			RecordType,
			RecordList
		},
		methods: {

		}
	}
</script>

<style>

</style>
