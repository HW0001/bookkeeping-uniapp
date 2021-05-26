<template>
	<neil-modal @confirm="confirmModal" @cancel='closeModal' title="请填写标签信息" :show='showAddLabelModal'>
		<view class="input-view">
			<view class="input-name flex-left">
				<view class="title">标签名称：</view>
				<input type="text" placeholder="请输入标签名称" />
			</view>
			<view class="uni-list-cell flex-left">
				<view class="title">
					标签类型：
				</view>
				<view class="type-wrapping">
					<radio-group @change="radioChange">
						<label class="radio">
							<radio value="1" checked="true" />选中
						</label>
						<label class="radio">
							<radio value="2" />未选中
						</label>
					</radio-group>
				</view>
			</view>
		</view>
	</neil-modal>
</template>

<script>
	import NeilModal from '../../components/neil-modal/neil-modal.vue'
	export default {
		name: 'LabelModal',
		props: ['showAddLabelModal'],
		data() {
			return {
				recordType: ['支出', '收入'],
				index: 0
			}
		},
		methods: {
			closeModal() {
				this.$emit('update:showAddLabelModal', false)
			},
			confirmModal(){
				this.$emit('update:showAddLabelModal', false)
			},
			radioChange(e){
				console.log(e)
			}
		},
		mounted() {
			console.log(this.showAddLabelModal)
		}
	}
</script>

<style lang="scss">
	.input-view {
		padding: 1em;

		.flex-left {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding: .5em;

			.title {
				white-space: nowrap;
			}
		}
	}
</style>
