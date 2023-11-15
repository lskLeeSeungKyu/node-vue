import axios from 'axios';

// axios 인스턴스 생성
const instance = axios.create({
    baseURL: process.env.VUE_APP_URL,
})
// DB 노트 테이블에 INSERT
function NoteCreate(data) {
    try {
        return instance.post('NoteInsert', data);
    } catch (error) {
        console.log(error);
    }
}
// DB 노트 테이블 조회
function NoteInfo() {
    try {
        return instance.post('NoteSelect');
    } catch (error) {
        console.log(error);
    }
}
// DB 노트 테이블 특정 노트 삭제
function NoteDel(content) {
    try {
        console.log(content);
        return instance.post('NoteDelete', content);
    } catch (error) {
        console.log(error);
    }
}
// 회원가입
function Register(data) {
    try {
        return instance.post('Register', data);
    } catch (error) {
        console.log(error);
    }
}
// 로그인 아이디 확인
function Login(data) {
    try {
        return instance.post('Login', data);
    } catch (error) {
        console.log(error);
    }
}
// bcrypt 비번체크
function PWcheck(pass) {
    try {
        return instance.post('PWcheck', pass)
    } catch (error) {
        console.log(error);
    }
}

export { NoteCreate, NoteInfo, NoteDel, Register, Login, PWcheck, }