import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-awesome/icons";

import Vue from "vue";
import axios from "axios";

import App from "./App";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import Icon from "vue-awesome/components/Icon";

Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component("v-icon", Icon);

new Vue({
    components: {
        App
    },
    router,
    store,
    template: "<App/>"
}).$mount("#app")