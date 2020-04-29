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
  Dropdown,
  Checkbox,
  Table,
  PageHeader,
  Select
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
Vue.use(Checkbox);
Vue.use(Table);
Vue.use(PageHeader);
Vue.use(Select);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
