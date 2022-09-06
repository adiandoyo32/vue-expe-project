import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0,
        isLoggedIn: false,
    },
    getters: {
        counter(state) {
            return state.counter;
        },
        finalCounter(state) {
            return state.counter * 2;
        },
        isLoggedIn(state) {
          return state.isLoggedIn
        }
    },
    mutations: {
        increment(state) {
            state.counter++;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        },
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit("increment");
            }, 1000);
        },
        increase(context, payload) {
            context.commit("increase", payload);
        },
        login(context) {
            context.commit("setAuth", { isAuth: true });
        },
        logout(context) {
            context.commit("setAuth", { isAuth: false });
        },
    },
    modules: {},
});
