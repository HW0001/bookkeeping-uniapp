<template>
	<view class="type-wrapping">
		<view class="type-content" @click="changeType('expend')">支出</view>
		<view class="type-content" @click="changeType('income')">收入</view>
		<view class="underline"  :class="selected==='income'&&'right'"></view>
	</view>
</template>

<script>
	export default {
		name:'RecordType',
		props:{
			selected:{
				type:String,
				default:'expend'
			}
		
		},
		methods:{
			changeType(type){
				type!==this.selected&&this.$emit('update:selected',type)
			}
		}
	}
</script>

<style lang="scss">
	
	.type-wrapping {
		display: flex;
		font-size: 48rpx;
		position: relative;
		.type-content {
			width: 50%;
			line-height: 2.2;
			font-weight: bold;
			text-align: center;
			background-color: #FEF6D5;
		}
		.underline{
			position:absolute ;
			bottom: -4rpx;
			left: 0;
			width: 50%;
			height: 8rpx;
			background-color: black;
			transition: left .5s;
			&.right{
				left:50%
			}
		}
	}
</style>
