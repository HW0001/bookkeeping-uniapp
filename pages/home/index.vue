<template>
	<view class="content">
		<LabelPanel :labels="labels" />
		<view class="type-wrapping">
			<view class="type-content selected">支出</view>
			<view class="type-content">收入</view>
		</view>
		<view class="input-wrapping">
			<input type="text" value="" class="input-content" placeholder="please input..." />
		</view>
		<KeyPanel></KeyPanel>
	</view>
</template>

<script>
	import KeyPanel from './keyPanel.vue'
	import LabelPanel from './labelPanel.vue'
	export default {
		data() {
			return {
				labels: [{
						value: '1',
						name: '买衣服',
						type: '1'
					},
					{
						value: '1',
						name: '吃饭',
						type: '1'
					},
					{
						value: '1',
						name: '坐地铁',
						type: '1'
					},
					{
						value: '1',
						name: '看病',
						type: '1'
					},
					{
						value: '1',
						name: '买菜',
						type: '1'
					},
					{
						value: '1',
						name: '看电影',
						type: '1'
					},
					{
						value: '1',
						name: '请客',
						type: '1'
					},
					{
						value: '1',
						name: '网购',
						type: '1'
					},
					{
						value: '1',
						name: '朋友聚餐',
						type: '1'
					},
					{
						value: '1',
						name: '买生日礼物的',
						type: '1'
					},
					{
						value: '1',
						name: '住',
						type: '1'
					},
				]
			}
		},
		components: {
			KeyPanel,
			LabelPanel
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		height: 100%;

		.type-wrapping {
			display: flex;
			font-size: 48rpx;

			.type-content {
				width: 50%;
				line-height: 2.2;
				font-weight: bold;
				text-align: center;
				background-color: #FEF6D5;

				&.selected {
					position: relative;

					&::after {
						position: absolute;
						left: 0;
						bottom: -8rpx;
						content: '';
						width: 100%;
						height: 8rpx;
						background-color: red;
					}
				}
			}
		}

		.input-wrapping {
			padding: 18rpx 28rpx;
			border-bottom: 4rpx solid #267DBD;

			.input-content {
				font-size: 56rpx;
			}

		}
	}
</style>
