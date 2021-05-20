<template>
	<view class="key-container">
		<view class="key-number-container">
			<view v-for="(item,index) in keys" :key="index" class="key-number">
				{{item}}
			</view>
			<view class="key-number zero">
				0
			</view>
		</view>
		<view class="key-enter">
			ok
		</view>
	</view>
</template>

<script>
	export default {
		name: "KeyPanel",
		data() {
			return {
				keys: [1, 2, 3, 4, 5, 6, 7, 8, 9]
			}
		},
	}
</script>

<style lang="scss">
	.key-container {
		display: flex;
		font-size: 52rpx;
		line-height:2.3 ;
		font-family: Baskerville, "Times New Roman", "Liberation Serif", STFangsong, FangSong, FangSong_GB2312, "CWTEX\-F", serif;
		.key-number-container {
			display: flex;
			flex-wrap: wrap;
			flex: 1;
			.key-number {
				width: 33.333333%;
				text-align: center;
				background-color: #D6F9FE;
				&:nth-child(2),&:nth-child(4){
					background-color:#AEEFFD;
				}
				&:nth-child(3),&:nth-child(5),&:nth-child(7){
					background-color:#84DEFA;
				}
				&:nth-child(6),&:nth-child(8){
					background-color:#65C9F5;
				}
				&:nth-child(9){
					background-color:#34ABEF;
				}
				&.zero{
					flex: 1;
					background-color: #2686CD;
				}
			}
		}
		.key-enter{
			padding: 0 1.2em;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			background-color: #2686CD;
			border: none;
		}
	}
</style>
