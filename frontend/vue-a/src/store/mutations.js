const mutations = {
        SavePass(state, data) {
            state.callList.push(data);
            localStorage.setItem(data.nameId, JSON.stringify(data));
        },
        SaveList(state) {
            for (let i = 0; i < localStorage.length; i++) {
                state.callList.push(localStorage.getItem(i));
            }
        },
        OneRemove(state, item) {
            state.callList.splice(item.index, 1);
            localStorage.removeItem(item.item.nameId);
        },
        AllClear(state) {
            localStorage.clear();
            state.callList = [];
        },
        Modify(state, data) {
            if (data.item.completed === false) data.item.completed = true;
            else {
                //
                localStorage.removeItem(data.item.nameId);
                const storageData = {
                  name: data.ModifyName,
                  number: data.ModifyNumber,
                  completed: false,
                }
                localStorage.setItem(data.ModifyName, JSON.stringify(storageData));

                state.callList[data.index].nameId = data.ModifyName;
                state.callList[data.index].callId = data.ModifyNumber;
                state.callList[data.index].completed = false;
            }
        },
        ReturnCompleted(state) {
            for (let i = 0; i < state.callList.length; i++) {
                state.callList[i].completed = false;
            }
        },
        RegisterSuccess() {
            if(confirm('로그인 하시겠습니까?')) {
                this.$router.push('UserLogin');
            }
            return;
        }

}

export { mutations }