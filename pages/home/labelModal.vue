<template>
	<neil-modal @confirm="confirmModal" @cancel='closeModal' title="请填写标签信息" :show='showAddLabelModal'>
		<view class="input-view">
			<view class="input-name flex-left">
				<view class="title">标签名称：</view>
				<input v-if="labelNameError" type="text" placeholder="请输入标签名称..." :value="updateLabel.name"
					placeholder-style="color:#FF8269" />
				<input v-else type="text" placeholder="..." :value="updateLabel.name" @input="valueInput" />
			</view>
			<view class="uni-list-cell flex-left">
				<view class="title">
					标签类型：
				</view>
				<view class="type-wrapping">
					<radio-group @change="radioChange">
						<label class="radio" v-for="type in typeRadio" :key='type.value'>
							<radio :value='type.value' :checked="type.value===updateLabel.type" />{{type.name}}
						</label>
					</radio-group>
				</view>
			</view>
		</view>
	</neil-modal>
</template>

<script>
	import NeilModal from '../../components/neil-modal/neil-modal.vue'
	import {
		CONST_RECORD_TYPE
	} from '../../constant/home.js'
	import {
		Label
	} from '../common/class/label.js'
	export default {
		name: 'LabelModal',
		props: {
			showAddLabelModal: {
				type: Boolean,
				default: false
			},
			updateLabel: Object,
		},
		data() {
			return {
				label: {
					name: '',
					type: CONST_RECORD_TYPE.EXPEND
				},
				labelNameError: false,
				typeRadio: [{
					value: CONST_RECORD_TYPE.EXPEND,
					name: '支出'
				}, {
					value: CONST_RECORD_TYPE.INCOME,
					name: '收入'
				}, ]
			}
		},
		methods: {
			closeModal() {
				this.$emit('update:showAddLabelModal', false)
			},
			confirmModal(close) {
				if (!this.label.name && !this.updateLabel.name) return this.labelNameError = true
				else {
					this.labelNameError = false
					const labelName = this.label.name ? this.label.name : this.updateLabel.name
					const labelType = this.label.type ? this.label.type : this.updateLabel.type
					if (this.updateLabel.id) {
						this.$store.commit('saveLabel', {
							...this.updateLabel,
							name: labelName,
							type: labelType
						})
					} else {
						this.$store.commit('saveLabel', new Label(labelName, labelType))
					}
					close()
					this.label = {}
					this.$emit('update:showAddLabelModal', false)
				}
			},
			radioChange(e) {
				this.label.type = e.target.value
			},
			valueInput(e) {
				this.label.name = e.target.value
			}
		},
		mounted() {},
		watch:{
			showAddLabelModal(){
				//console.log(this.updateLabel)
			}
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
