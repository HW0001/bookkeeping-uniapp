<template>
	<view class="key-container">
		<view class="key-number-container">
			<view v-for="(item,index) in keys" :key="index" class="key-number" @tap="clickKey(item)">
				{{item}}
			</view>
			<view class="key-number delete-wrapping" @tap="clickKey('del')" @longtap='longtapDelete'
				@touchend='touchendDelete'>
				<image src="../../static/keypanel/delete.png" mode='aspectFit' class="delete-img" />
			</view>
		</view>
		<view class="key-operation">
			<view class="common" @tap="clickOperation('+')">+</view>
			<view class="common" @tap="clickOperation('-')">-</view>
			<view class="common submit" @tap="clickSubmit">
				<image v-if="isSave" src="../../static/keypanel/submit.png" mode="aspectFit" class="submit-img"></image>
				<image v-else src="../../static/keypanel/equal.png" mode="aspectFit" class="submit-img"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "KeyPanel",
		data() {
			return {
				isSave: true,
				keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
			}
		},
		methods: {
			clickKey(key,isSave) {
				this.$emit('clickKey', key,isSave)
			},
			longtapDelete() {
				this.delsetinterval = setInterval(() => {
					this.$emit('clickKey', 'del')
				}, 120)
			},
			touchendDelete() {
				clearInterval(this.delsetinterval)
			},
			clickOperation(type) {
				this.isSave = false
				this.clickKey(type)
			},
			clickSubmit() {
				this.clickKey('ok',this.isSave)
				!this.isSave && (this.isSave = true)
			}
		}
	}
</script>

<style lang="scss">
	.key-container {
		background-color: $uni-bg-color-grey;
		display: flex;
		font-size: 44rpx;
		line-height: 2.2;

		.key-number-container {
			display: flex;
			flex-wrap: wrap;
			flex: 1;

			.key-number {
				width: 33.333333%;
				text-align: center;
				border: .5rpx solid $uni-border-color;

				&:nth-child(1),
				&:nth-child(2),
				&:nth-child(3) {
					border-right: none;
				}

				&:nth-child(4),
				&:nth-child(5),
				&:nth-child(6) {
					border-right: none;
					border-top: none;
				}

				&:nth-child(7),
				&:nth-child(8),
				&:nth-child(9) {
					border-right: none;
					border-top: none;
				}

				&:nth-child(10),
				&:nth-child(11),
				&:nth-child(12) {
					border-right: none;
					border-top: none;
				}

			}

			.delete-wrapping {
				flex: 1;
				display: flex;
				border: 1rpx solid $uni-border-color;
				align-items: center;
				justify-content: center;

				.delete-img {
					width: 48rpx;
					height: 48rpx;
				}
			}
		}

		.key-operation {
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;

			.common {
				padding: 0 1.2em;
				text-align: center;
				border: 1rpx solid $uni-border-color;

				&:nth-child(1),
				&:nth-child(2) {
					border-bottom: none;
				}
			}

			.submit {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;

				.submit-img {
					width: 56rpx;
					height: 56rpx;
				}
			}
		}
	}
</style>
