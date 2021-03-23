import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import { db, auth, storage } from "./firebaseConfig";
import "@/plugins/apexcharts";
import "@/plugins/fonts";
// import firebaseConfig from "./firebaseConfig";
import vuetify from "./plugins/vuetify";
import "@/plugins/vuefire";

// firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false;

Vue.prototype.$db = db;
Vue.prototype.$auth = auth;
Vue.prototype.$storage = storage;
const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
  router,
  store,
  vuetify,

  render: (h) => h(App),
}).$mount("#app");
