<template>
	<view class="layout-container">
		<view class="layout-content">
			<slot></slot>
		</view>
		<view class="nav-bar">
			<view class="bar-item">标签</view>
			<view class="bar-item">主页</view>
			<view class="bar-item">记录</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Layout'
	}
</script>

<style lang="scss">
	.layout-container {
		height: 100vh;
		width: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;

		.layout-content {
			flex: 1;
		}

		.nav-bar {
			display: flex;
			>.bar-item{
				width: 33.3333%;
				text-align: center;
				line-height: 3;
				font-size: 38rpx;
				font-weight: bold;
				font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
			}
		}
	}
</style>
