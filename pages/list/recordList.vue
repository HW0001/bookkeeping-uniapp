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
				const result={}
				datas.forEach(d=>{
					console.log(Date.formatDate(new Date(d.saveDate) ,'yyyy--mm-dd'))
					//if(result)
				})
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
