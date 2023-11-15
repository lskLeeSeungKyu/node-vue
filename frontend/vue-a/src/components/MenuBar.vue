<template>
    <div>
        <h1>App</h1>
        <button v-if="this.$store.state.isLogin" 
                @click="LogOut"
                style="float: right;"
                >로그아웃
        </button>
        <router-link to="/CallList"><b>번호 목록</b></router-link> |
        <router-link to="/CallAdd"><b>번호 추가</b></router-link> ||
        <router-link to="/NoteAdd"><b>메모 하기</b></router-link> |
        <router-link to="/NoteList"><b>메모 목록</b></router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        LogOut() {
            if (confirm('LOGOUT?')) {
                this.$store.state.isLogin = false;
                this.$router.push('CallList');
            }
            else return;
        },
    },
    created() {
        if (document.cookie) this.$store.state.isLogin = true
    }
}
</script>

<style scoped>
    a {
        color: black;
        text-decoration: none;
    }
    a:hover {
        color: gray;
    }
    button {
        background-color: black;
        color: white;
    }
</style>