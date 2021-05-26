<template>
	<view class="label-container">
		<scroll-view class="label-wrapping" scroll-y>
			<view class="labels-view">
				<view v-for="(item,index) in labels" :key="index" class="label-content"
					:class="~selectedLabel.indexOf(item.value)&&'selected'">
					<view class="text-wrapping" @tap="clickLabel(item.value)">
						<text class="label-text">{{item.name}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="label-add-wrapping">
			<view class="label-add-img-wrapping" @tap='addLabel'>
				<image src="../../static/add.png" mode='aspectFit' class="label-add-img"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		initLabels
	} from '../common/hooks/labels.js'
	export default {
		name: 'LabelPanel',
		props: {
			selectedLabel: {
				type: Array,
				default: () => []
			}
		},
		data: () => {
			return {
				labels: []
			}
		},
		methods: {
			clickLabel(value) {
				const index = this.selectedLabel.indexOf(value)
				const newLabels = ~index ? this.selectedLabel.filter(l => l !== value) : [...this.selectedLabel, value]
				this.$emit('update:selectedLabel', newLabels)
			},
			addLabel() {
				uni.showModal({
					title: '提示',
					content: '<view>11111</view>',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		},
		mounted() {
			this.labels = initLabels()
		},
		
	}
</script>

<style lang="scss">
	.label-container {
		overflow-y: hidden;

		.label-wrapping {
			flex: 1;
			overflow-y: hidden;
			height: 80%;
			border: 1rpx solid;

			.labels-view {
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;
				align-items: center;

				.label-content {
					width: 25%;
					padding: .5em;

					.text-wrapping {
						background-color: #FFE8B8;
						padding: .5em .3em;
						border-radius: 8rpx;
						text-align: center;

						.label-text {
							display: block;
							white-space: nowrap;
							text-overflow: ellipsis;
							overflow: hidden;
							max-width: 5em;
						}
					}

					&.selected {
						.text-wrapping {
							background-color: #FF9983;
							position: relative;

							&::after {
								content: '';
								display: block;
								background-image: url(../../static/selected.png);
								position: absolute;
								top: -10rpx;
								right: -10rpx;
								height: 36rpx;
								width: 36rpx;
								background-repeat: repeat;
							}
						}
					}
				}
			}
		}

		.label-add-wrapping {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 20%;

			.label-add-img-wrapping {
				width: 200rpx;
				border: 1rpx solid black;
				text-align: center;
				height: 75%;
				border-radius: 16rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				.label-add-img {
					width: 56rpx;
					height: 56rpx;
				}
			}
		}
	}
</style>
