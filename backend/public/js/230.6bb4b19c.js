"use strict";(self["webpackChunkvue_a"]=self["webpackChunkvue_a"]||[]).push([[230],{3230:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var s=function(){var e=this,t=e._self._c;return t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),e.UserLogin({user_id:e.user_id,user_pw:e.user_pw})}}},[t("div",[t("label",{attrs:{for:"username"}},[e._v("ID: ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user_id,expression:"user_id"}],attrs:{type:"text",id:"username"},domProps:{value:e.user_id},on:{input:function(t){t.target.composing||(e.user_id=t.target.value)}}})]),t("div",[t("label",{attrs:{for:"userpw"}},[e._v("PW: ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user_pw,expression:"user_pw"}],attrs:{type:"password",id:"userpw"},domProps:{value:e.user_pw},on:{input:function(t){t.target.composing||(e.user_pw=t.target.value)}}})]),t("button",{attrs:{type:"submit"}},[e._v("LOGIN")])]),t("router-link",{attrs:{to:"/UserRegister",id:"signup"}},[e._v("Sign Up")])],1)},u=[],i=(r(7658),{data(){return{user_id:"",user_pw:""}},methods:{async UserLogin(e){await this.$store.dispatch("UserLogin",e),this.$store.state.isLogin&&this.$router.push("NoteList")}}}),n=i,a=r(1001),o=(0,a.Z)(n,s,u,!1,null,"b071583e",null),p=o.exports}}]);
//# sourceMappingURL=230.6bb4b19c.js.map