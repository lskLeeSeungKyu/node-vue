import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, } from './mutations.js'
import { actions, } from './actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        callList: ReturnList(),
        NoteList: [],
        isLogin: false,
    },
    mutations,
    getters: {
        List(state) {
            return state.callList;
        },
    },
    actions,
})

function ReturnList() {
    const arr = [];
            for (let i = 0; i < localStorage.length; i++) {
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
            return arr;
}