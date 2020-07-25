import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { currentUser: null, userProfile: {} },
  mutations: {
    setCurrentUser(state, val) {
      state.currentUser = val;
    },
    setUserProfile(state, val) {
      state.userProfile = val;
    },
  },
  actions: {
    // fetchUserProfile({ commit, state }) {
      // firebase
      //   .firestore()
      //   .collection("users")
      //   .doc(state.currentUser.uid)
      //   .get()
      //   .then((res) => {
      //     commit("setUserProfile", res.data());
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    // },
  },
  modules: {},
});
