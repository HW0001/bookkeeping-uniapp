<template>
	<scroll-view class="label-wrapping" scroll-y>
		<view class="labels-view">
			<view v-for="(item,index) in labels" :key="index" class="label-content"
				:class="~selectedLabel.indexOf(item.value)&&'selected'">
				<view class="text-wrapping" @tap="clickLabel(item.value)">
					<text class="label-text">{{item.name}}</text>
				</view>
			</view>
			<view class="label-add-img-wrapping label-content" @tap='addLabel'>
				<view class="text-wrapping">
					增加标签
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import labelOperation from '../common/hooks/labelOperation.js'

	export default {
		name: 'LabelPanel',
		props: {
			selectedLabel: {
				type: Array,
				default: () => []
			},
			labelType: {
				type: String
			}
		},
		data: () => {
			return {
				labels: [],
			}
		},
		methods: {
			clickLabel(value) {
				const index = this.selectedLabel.indexOf(value)
				const newLabels = ~index ? this.selectedLabel.filter(l => l !== value) : [...this.selectedLabel, value]
				this.$emit('update:selectedLabel', newLabels)
			},
			addLabel() {
				this.$emit('clickAddLabel')
			},
			filterLabels() {
				labelOperation.initLabels()
				this.labels = labelOperation.labels.filter(label => label.type === this.labelType)
			}
		},
		mounted() {
			this.filterLabels()
		},
		watch: {
			labelType() {
				this.filterLabels()
			}
		}
	}
</script>

<style lang="scss">
	.label-wrapping {
		flex: 1;
		overflow-y: hidden;
		height: 80%;

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

			.label-add-img-wrapping {
				>.text-wrapping {
					background-color: #36D7F7;
				}
			}
		}
	}
</style>
