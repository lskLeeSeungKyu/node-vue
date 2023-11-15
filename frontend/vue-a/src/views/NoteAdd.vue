<template>
<div>
    <div>
     <input type="text" 
            id="title" 
            placeholder="Title" 
            size="28" 
            maxlength="20" 
            v-model="title"
    ></div>
    <div>
     <textarea name="" 
               id="" 
               cols="30" 
               rows="10" 
               placeholder="Content" 
               maxlength="150" 
               v-model="content" 
               @keyup.enter="NoteInsert({title, content})"
     ></textarea>
     <span><b>{{lengthCheck}}/150</b></span>
    </div>

    <button @click="NoteInsert({title, content})">
        저장
    </button>
    <span id="message" v-show="messageCheck">{{ message }}</span>
</div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            content: '',
            contentLength: '',
            message: '저장되었습니다!',
            messageCheck: false,
        }
    },
    methods: {
        NoteInsert(data) {
            this.$store.dispatch('NoteInsert', data);
            this.init();
            this.messageCheck = true;
            setTimeout(() => {
                this.messageCheck = false;
            }, 500);
        },
        init() {
            this.title = '';
            this.content = '';
        }
    },
    computed: {
        lengthCheck() { return this.content.length; },
    },
}
</script>

<style scoped>

span {
    font-size: 0.3em;
}
#message {
    color: blue;
    padding-left: 120px;
}
</style>