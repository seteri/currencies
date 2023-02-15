import actions from "./actions";
import mutations from "./mutations";

const state = {
    api: import.meta.env.VITE_CURRENCY_API,
    info: null,
};
export default {
    state,
    actions,
    mutations,
};
