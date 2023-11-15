import { NoteCreate, NoteDel, Register, Login, PWcheck, } from '@/api/index.js'
import { router } from '@/router/router.js'
import Vue from 'vue'
import VueCookie from 'vue-cookie';
Vue.use(VueCookie)

const actions = {
    async NoteInsert(context, data) {
        try {
            const res = await NoteCreate(data);
            context.commit('InsertSuccess', res.data.message);
        } catch (error) {
            console.log(error);
        }
    },
    async NoteDelete(context, content) {
        try {
            const res = await NoteDel(content);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    },
    async UserRegister(context, data) {
        try {
            const res = await Register(data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    },
    async UserLogin(context, data) {
        try {
            const res = await Login(data);
            if (res.data[0].USER_ID !== null || res.data[0].USER_ID !== '') {
                const pass = { user_pw: data.user_pw, DBuser_pw: res.data[0].USER_PW }
                this.dispatch('PWcheck', pass);
            }
            else {
                alert('아이디 없음!');
            }
        } catch (error) {
            console.log(error);
        }
    },
    async PWcheck(context, pass) {
        try {
            const res = await PWcheck(pass);
            if (res.data.token) {
                document.cookie = `jwt=${res.data.token}`;
                if(document.cookie) {
                    this.state.isLogin = true;
                }
                router.push('NoteList');
            }
            else alert('비밀번호 틀림!');
        } catch (error) {
            console.log(error);
        }
    }
}

export { actions } 