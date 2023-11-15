<template>
  <form @submit.prevent="UserRegister({user_id, user_pw})">
        <div>
            <label for="username">ID: </label>
            <input type="text" id="username" v-model="user_id">
        </div>
        <div>
            <label for="userpw">PW: </label>
            <input type="password" id="userpw" v-model="user_pw">
        </div>
        <button type="submit">SAVE</button>
        <span v-show="messageCheck" style="color: blue; font-size: 0.3em;">{{ message }}</span>
  </form>
</template>

<script>
export default {
    data() {
        return {
            user_id: '',
            user_pw: '',    
            message: '가입 완료!',
            messageCheck: false,
        }
    },
    methods: {
        UserRegister(data) {
            this.$store.dispatch('UserRegister', data)
            this.init();
            this.messageCheck = true;
            setTimeout(() => {
                this.messageCheck = false;
                this.$router.push('UserLogin');
            }, 500);
        },
        init() {
            this.user_id = '';
            this.user_pw = '';
        },
    },
}
</script>

<style>

</style>