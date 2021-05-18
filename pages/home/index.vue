<template>
	<view class="content">
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
			KeyPanel
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
		align-items: center;
		justify-content: center;

		.a {
			background-color: red;
		}
	}
</style>
