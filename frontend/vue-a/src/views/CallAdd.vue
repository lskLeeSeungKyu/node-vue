<template>
<div>
    <div>
        <label for="nameId">이름: </label>
        <input type="text" id="nameId" v-model="nameId" @keyup.enter="SavePass" maxlength="3" size="2">
    </div>
    <div>
        <label for="callId">전화번호: </label>
        <input type="text" id="callId" v-model="callId" @keyup.enter="SavePass" maxlength="13" size="10"> 
        <span v-if="lengthCheck">{{ message }}</span>
    </div>
    <button @click="SavePass({nameId, callId, completed: false})" 
            :disabled=disabledCheck>
            저장
    </button>
</div>
</template>

<script>

export default {
    data() {
        return {
            namdId: '',
            callId: '',
            message: '번호가 짧습니다',
        }
    },
    methods: {
        SavePass(data) {
            this.$store.commit('SavePass', data);
            this.init();
        },
        init() {
            this.nameId = '';
            this.callId = '';
        },
    },
    computed: {
        disabledCheck() {
            if (this.callId.length < 11) return true;
            else return false;
        },
        lengthCheck() {
            if (this.callId.length > 0 && this.callId.length < 12) return true;
            else return false;
        }
    }
}
</script>

<style scoped>
span {
    color: red;
    font-size: 1px;
}
</style>