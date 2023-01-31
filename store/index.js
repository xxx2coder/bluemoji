import { createStore } from "vuex";
import emojis from "@/store/modules/emojis";

export default createStore({
    modules: {
        emojis
    }
});