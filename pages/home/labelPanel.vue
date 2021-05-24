<template>
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
</template>

<script>
	import {initLabels} from '../common/hooks/labels.js'
	export default {
		name: 'LabelPanel',
		props: {
			selectedLabel: {
				type: Array,
				default: () => []
			}
		},
		data:()=>{
			return {
				labels:[]
			}
		},
		methods:{
			clickLabel(value){
				const index = this.selectedLabel.indexOf(value)
				const newLabels=~index?this.selectedLabel.filter(l=>l!==value):[...this.selectedLabel,value]
				this.$emit('update:selectedLabel',newLabels)
			}
		},
		mounted() {
			this.labels=initLabels()
		}
	}
</script>

<style lang="scss">
	.label-wrapping {
		flex: 1;
		overflow-y: hidden;

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
</style>
