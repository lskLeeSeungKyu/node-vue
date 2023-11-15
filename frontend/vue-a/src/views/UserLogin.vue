<template>
    <div>
     <form @submit.prevent="UserLogin({user_id, user_pw})">
            <div>
             <label for="username">ID: </label>
             <input type="text" id="username" v-model="user_id">
            </div>
            <div>
             <label for="userpw">PW: </label>
             <input type="password" id="userpw" v-model="user_pw">
            </div>
            <button type="submit">LOGIN</button>
     </form>
    <router-link to="/UserRegister" id="signup">Sign Up</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user_id: '',
            user_pw: '',   
        }
    },
    methods: {
        async UserLogin(data) {
            await this.$store.dispatch('UserLogin', data);
            if (this.$store.state.isLogin) this.$router.push('NoteList');
        },
    },
}
</script>

<style scoped>
#signup {
    color: gray;
    text-decoration: none;
}
#signup:hover {
    color: red;
}
</style>