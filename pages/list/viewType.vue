<template>
	<view class="view-type-container">
		<view class="type-wrapping">
			<text>数据展示方式：</text>
			<picker @change="bindPickerChange" :value="index" :range="viewTypes">
				<view class="type-input">{{viewTypes[index]}}</view>
			</picker>
		</view>
		<view class="number-wrapping"></view>
	</view>
</template>

<script>
	import {
		CONST_RECOR_VIEW_TYPE
	} from '../../constant/record.js'
	export default {
		data() {
			return {
				index: 1,
				viewTypes: ['次', '天', '周', '月']
			}
		},
		methods: {
			bindPickerChange(e) {
				this.index = e.target.value
			}
		}
	}
</script>

<style lang="scss" scoped>
	.view-type-container {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 1em .5em;
		.type-wrapping{
			display: flex;
			justify-content: center;
			align-items: center;
			.type-input{
				padding:0 .5em;
				border-bottom: 2rpx solid;
			}
		}
	}
</style>
