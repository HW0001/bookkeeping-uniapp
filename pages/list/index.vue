<template>
	<view>
		<RecordType :selected.sync="recordType" />
		<ViewType :view.sync='viewType' />
		<RecordList :recordType='recordType' />
	</view>
</template>

<script>
	import RecordType from '../common/components/recordType.vue'
	import RecordList from './recordList.vue'
	import ViewType from './viewType.vue'
	import {
		CONST_RECORD_TYPE
	} from '../../constant/home.js'
	import {
		CONST_RECOR_VIEW_TYPE
	} from '../../constant/record.js'
	export default {
		data() {
			return {
				recordType: CONST_RECORD_TYPE.EXPEND,
				viewType: CONST_RECOR_VIEW_TYPE.times
			}
		},
		components: {
			RecordType,
			RecordList,
			ViewType
		},
		methods: {

		}
	}
</script>

<style>

</style>
