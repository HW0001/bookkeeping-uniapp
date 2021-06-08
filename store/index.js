import Vue from 'vue'
import Vuex from 'vuex'
import record from './record.js'
import label from './label.js'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},
	modules:{record,label}
})
store.commit('initRecords')
store.commit('initLabels')
export default store