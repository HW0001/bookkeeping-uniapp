<template>
		<view class="content">
			<view class="value-input">
				11111
			</view>
			<KeyPanel></KeyPanel>
		</view>
</template>

<script>
	import KeyPanel from './keyPanel.vue'
	export default {
		data() {
			return {}
		},
		components: {
			KeyPanel,
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
		.value-input {
			flex: 1;
		}
	}
</style>
