<template>
<div>
    <div id="dv" v-for="item in this.$store.state.NoteList" :key=item>
        <div id="dv2">
         <b>{{ item.board_title }}</b> 
         <span id="del" 
         @click="delNote(item.board_content)"> X
         </span>
        </div>    
    <span>{{item.board_content}}</span>
    </div>
</div>
</template>

<script>
import { NoteInfo } from '@/api/index.js';

export default {
    methods: {
       async delNote(content) {
            const data = { content };
            this.$store.dispatch('NoteDelete', data);
            const res = await NoteInfo();
            this.$store.state.NoteList = res.data.result;
        },
    },
    async created() {
        const res = await NoteInfo();
        this.$store.state.NoteList = res.data.result;
    },
}
</script>

<style scoped>
ul {
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
}
#dv {
    border: 3px solid darkgray;
    width: 230px;
    height: 230px;
    border-radius: 4px;
    float: left;
}
#dv2 {
    text-align: center;
}
span {
    font-size: 0.7em;
}
#del {
    font-size: 1.5em;
    color: red;
    float: right;
}
</style>