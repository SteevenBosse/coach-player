const state = {
    isToggled: false,
    isFullyExpanded: false
};

const mutations = {
    setToggle: (state, value) => {
        state.isToggled = value;
    },
    setFullyExpand: (state, value) => {
        state.isFullyExpanded = value;
    }
};

const actions = {

};

export default {
    state,
    mutations,
    actions
};