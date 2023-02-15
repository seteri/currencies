import axios from "axios";
const actions = {
    async fetchData({ commit, state }) {
        const response = await axios.get(
            state.api
        );
        commit("STORE_INFO", response.data);
    },
};

export default actions