<template>
	<view class="record-wrapping">
		<view v-for="(item,index) in recordLists" :key="index">
			{{item.amount}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			recordType:String
		}
		,
		computed:{
			recordLists(){
				const datas = this.$store.state.record.records.filter(r=>r.recordType===this.recordType)
				return datas
			}
		},
		methods: {
			
		},
		mounted(){
			console.log(this.recordType)
		}
	}
</script>

<style>
</style>
