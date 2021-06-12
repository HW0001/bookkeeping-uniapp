<template>
	<view class="record-wrapping">
		<uni-collapse accordion="true">
			<uni-collapse-item v-for="(recordValue,recordKey) in recordLists" :title="recordKey"
				:descript='"￥"+recordValue.amount' :key='recordKey'>
				<view style="" v-for="(item,index) in recordValue" :key='index'>
					{{item.amount}}
				</view>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	import UniCollapse from '../../components/uni-collapse/uni-collapse.vue'
	import UniCollapseItem from '../../components/uni-collapse-item/uni-collapse-item.vue'
	export default {
		data() {
			return {

			}
		},
		props: {
			recordType: String
		},
		components: {
			UniCollapse,
			UniCollapseItem
		},
		computed: {
			recordLists() {
				const datas = this.$store.state.record.records.filter(r => r.recordType === this.recordType)
				const result = {}
				datas.forEach(d => {
					if (result[d.recordDate]) {
						result[d.recordDate].push(d)
					} else {
						result[d.recordDate] = [d]
					}
					result[d.recordDate].amount = (parseFloat(result[d.recordDate].amount || 0) + parseFloat(d
						.amount)).toString()
				})
				console.log(result)
				return result

			}
		},
		methods: {

		},
		mounted() {}
	}
</script>

<style>
</style>
