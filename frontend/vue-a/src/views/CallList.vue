<template>
  <ul>
    <li v-for="(item, index) in List" :key="index">
      {{ item.nameId }} : {{ item.callId }}
      <div></div>
      <input
        type="text"
        maxlength="3"
        size="2"
        :placeholder="item.name"
        v-model="ModifyName"
        v-show="item.completed"
      />

      <input
        type="text"
        maxlength="13"
        v-show="item.completed"
        v-model="ModifyNumber"
        size="10"
        :placeholder="item.number"
        @keyup.enter="Modify({ item, index, ModifyName, ModifyNumber })"
      />

      <button
        @click="Modify({ item, index, ModifyName, ModifyNumber })"
        :disabled="disabledCheck"
      >
        수정
      </button>
      <button @click="OneRemove({ item, index })">삭제</button>
    </li>
    <button @click="AllClear" v-show="List.length > 1">전체삭제</button>
  </ul>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      ModifyNumber: "",
      ModifyName: "",
    };
  },
  methods: {
    ...mapMutations(["OneRemove", "AllClear", "Modify"]),
  },
  computed: {
    ...mapGetters(["List"]),
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>