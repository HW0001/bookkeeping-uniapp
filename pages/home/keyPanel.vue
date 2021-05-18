<template>
	<view class="key-container">
		<view v-for="(item,index) in keys" :key="index">
			{{item}}
		</view>
	</view>
</template>

<script>
	export default{
		name:"KeyPanel",
		data() {
			return {
				keys: [1,2,3,4,5,6,7,8,9]
			}
		},
	}
</script>

<style>
</style>
