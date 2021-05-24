<template>
	<view class="content">
		<LabelPanel :selected-label.sync='selectedlabel' />
		<view class="date-wrapping">
			<label class="date-label"> 账单日期：
				<text class="date-input" disabled>{{recordDate}}</text>
				<image src="../../static/date.png" class="date-button" @click="changeDateStatus(true)" />
			</label>
		</view>
		<mx-date-picker :show="showPicker" type="date" :value="recordDate" format='yyyy-mm-dd' @confirm='confirm'
			@cancel='changeDateStatus(false)' />
		<RecordType :selected.sync="recordType" />
		<view class="input-wrapping">
			<input type="text" value="" class="input-content" placeholder="please input..." />
		</view>
		<KeyPanel></KeyPanel>
	</view>
</template>

<script>
	import KeyPanel from './keyPanel.vue'
	import LabelPanel from './labelPanel.vue'
	import MxDatePicker from '../../components/mx-datepicker/mx-datepicker.vue'
	import RecordType from '../common/components/recordType.vue'
	export default {
		data() {
			return {
				recordDate: '2021-04-3',
				showPicker: false,
				recordType: 'expend',
				selectedlabel: ['1'],
				labels: [],
			}
		},
		components: {
			KeyPanel,
			LabelPanel,
			MxDatePicker,
			RecordType
		},
		onLoad() {

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
			padding: 18rpx 28rpx;
			border-bottom: 4rpx solid #267DBD;

			.input-content {
				font-size: 56rpx;
			}

		}
	}
</style>
