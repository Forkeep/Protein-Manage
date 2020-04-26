import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Button,
  Form,
  Input,
  Icon,
  Layout,
  Menu,
  Avatar,
  Dropdown
} from "ant-design-vue";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Avatar);
Vue.use(Dropdown);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
