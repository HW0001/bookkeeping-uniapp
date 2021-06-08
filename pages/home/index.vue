<template>
	<view class="content">
		<LabelPanel :selected-label.sync='selectedlabel' @clickAddLabel='addLabel' :label-type='recordType' />
		<LabelMdal :showAddLabelModal.sync="showAddLabelModal" />
		<RecordType :selected.sync="recordType" />
		<view class="date-wrapping">
			<label class="date-label"> 账单日期：
				<text class="date-input" disabled>{{recordDate}}</text>
				<image src="../../static/date.png" class="date-button" @tap="changeDateStatus(true)" />
			</label>
		</view>
		<mx-date-picker :show="showPicker" type="date" :value="recordDate" format='yyyy-mm-dd' @confirm='confirm'
			@cancel='changeDateStatus(false)' />
		<view class="input-wrapping">
			<view class="remarks-wrapping">
				<text class="remarks-title"> 备注：</text>
				<input type="text" v-model="amark" placeholder="请输入备注..." />
			</view>
			<view class="amount-wrapping">
				<text class="amount-title">金额：</text>
				<input type="text" v-model="amount" class="input-content" placeholder="0" disabled />
			</view>
		</view>
		<KeyPanel @clickKey='clickKey' />
	</view>
</template>

<script>
	import KeyPanel from './keyPanel.vue'
	import LabelPanel from './labelPanel.vue'
	import MxDatePicker from '../../components/mx-datepicker/mx-datepicker.vue'
	import RecordType from '../common/components/recordType.vue'
	import LabelMdal from './labelModal.vue'
	import {
		Record
	} from '../common/class/record.js'
	import {
		keyOperation
	} from '../common/hooks/home.js'
	import {
		CONST_RECORD_SAVE
	} from '../../constant/home.js'
	export default {
		data() {
			return {
				recordDate: '2021-04-3',
				showPicker: false,
				recordType: 'expend',
				selectedlabel: ['1'],
				amount: '',
				showAddLabelModal: false,
				amark: ''
			}
		},
		components: {
			KeyPanel,
			LabelPanel,
			MxDatePicker,
			RecordType,
			LabelMdal
		},
		activated() {
			console.log('onload  11111')
		},
		methods: {
			confirm(e) {
				this.recordDate = e.value
				this.changeDateStatus(false)
			},
			changeDateStatus(type) {
				this.showPicker = type
			},
			changeType(type) {
				this.recordType = type
			},
			clickKey(key, isSave) {
				const result = keyOperation(this.amount, key, isSave)
				if (result === CONST_RECORD_SAVE) {
					this.$store.commit('saveRecord', new Record(this.amount, this.recordType, this.selectedlabel, this
						.amark))
					this.reset()
				} else {
					this.amount = result
				}
			},
			addLabel() {
				this.showAddLabelModal = true;
			},
			reset() {
				this.amount = 0
				this.selectedlabel = []
				this.amark = ''
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		height: 100%;

		.date-wrapping {
			font-size: 38rpx;
			padding: .5em;
			background-color: #D5FEF1;

			.date-label {
				vertical-align: middle;

				.date-input {
					vertical-align: middle;
				}

				.date-button {
					width: 48rpx;
					height: 54rpx;
					display: inline-block;
					margin-left: 1em;
					vertical-align: middle;
				}
			}
		}


		.input-wrapping {
			background-color: $uni-bg-color-grey;
			padding: 18rpx 28rpx;
			display: flex;
			font-size: 34rpx;
			align-items: center;

			.remarks-wrapping {
				width: 65%;
				display: flex;
				align-items: center;
				justify-content: center;

				.remarks-title {
					white-space: nowrap;
				}
			}

			.amount-wrapping {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				padding-left: .5em;

				.amount-title {
					white-space: nowrap;
				}
			}
		}
	}
</style>
