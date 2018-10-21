import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [{
        path: "/",
        name: "Home",
        component: require("@/components/landing-page/LandingPage").default
    },
        {
            path: "/Music",
            name: "Music",
            component: require("@/components/music/Music").default
        },
        {
            path: "*",
            redirect: "/"
        }
    ]
});