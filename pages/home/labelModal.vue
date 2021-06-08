<template>
	<neil-modal @confirm="confirmModal" @cancel='closeModal' title="请填写标签信息" :show='showAddLabelModal'>
		<view class="input-view">
			<view class="input-name flex-left">
				<view class="title">标签名称：</view>
				<input v-if="labelNameError" type="text" placeholder="请输入标签名称..." v-model="label.name"
					placeholder-style="color:#FF8269" />
				<input v-else type="text" placeholder="..." v-model="label.name" />
			</view>
			<view class="uni-list-cell flex-left">
				<view class="title">
					标签类型：
				</view>
				<view class="type-wrapping">
					<radio-group @change="radioChange">
						<label class="radio">
							<radio value="1" checked="true" />支出
						</label>
						<label class="radio">
							<radio value="2" />收入
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
	import {Label} from '../common/class/label.js'
	export default {
		name: 'LabelModal',
		props: {
			showAddLabelModal: {
				type: Boolean,
				default: false
			},
			updateLabelID: Number
		},
		data() {
			return {
				label: {
					name: '',
					type: CONST_RECORD_TYPE.EXPEND
				},
				labelNameError: false
			}
		},
		methods: {
			closeModal() {
				this.$emit('update:showAddLabelModal', false)
			},
			confirmModal(close) {
				if (!this.label.name) return this.labelNameError = true
				else {
					this.labelNameError = false
					this.$store.commit('saveLabel',new Label(this.label.name,this.label.type))
					close()
					this.$emit('update:showAddLabelModal', false)
				}
			},
			radioChange(e) {
				const value = e.target.value
				this.label.type = value === '1' ? CONST_RECORD_TYPE.EXPEND : CONST_RECORD_TYPE.INCOME
			}
		},
		watch:{
			updateLabelID(){
				console.log('1333:'+this.updateLabelID)
				if(this.updateLabelID){
					this.label=this.$store.state.label.labels.filter(l=>l.id===this.updateLabelID)[0]
				}else{
					
				}
			}
		},
		mounted() {}
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
