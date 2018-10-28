<template>
    <div id="sidebar-wrapper" v-bind:class="{isToggled:isToggled}" class="w3-sidebar w3-bar-block w3-xxlarge" v-on:mouseover="debounce(showSideBar,500,true)" v-on:mouseleave="debounce(hideSideBar,500,false)">
        <router-link to="Home" draggable="false" class="w3-bar-item w3-button">
            <v-icon name="home" scale="2" />
            <transition name="fade">
                <span v-if="isFullyExpanded">Home</span>
            </transition>
        </router-link>
        <a href="#" draggable="false" class="w3-bar-item w3-button">
            <v-icon name="sliders-h" scale="2"/>
            <transition name="fade">
                <span v-if="isFullyExpanded">Settings</span>
            </transition>
        </a>
        <a href="#" draggable="false" class="w3-bar-item w3-button">
            <v-icon name="dumbbell" scale="2" />
            <transition name="fade">
                <span v-if="isFullyExpanded">Exercices</span>
            </transition>
        </a>
        <router-link to="Music" draggable="false" class="w3-bar-item w3-button">
            <v-icon name="music" scale="2" />
            <transition name="fade">
                <span v-if="isFullyExpanded">Musics</span>
            </transition>
        </router-link>
        <a href="#" draggable="false" class="w3-bar-item w3-button">
            <v-icon name="language" scale="2" />
            <transition name="fade">
                <span v-if="isFullyExpanded">Speech</span>
            </transition>
        </a>
    </div>
</template>

<script>
    export default {
        computed: {
            isToggled: function() {
                return this.$store.state.Sidenav.isToggled;
            },
            isFullyExpanded: function() {
                return this.$store.state.Sidenav.isFullyExpanded;
            }
        },
        data: function() {
            return {
                timeout: null
            };
        },
        methods: {
            debounce(func, wait, immediate) {
                var context, args;
                context = this;
                args = arguments;
                var callNow = immediate && !context.timeout;
                clearTimeout(context.timeout);
                // Set the new timeout
                context.timeout = setTimeout(() => {
                    context.timeout = null;
                    if (!immediate) {
                        func.apply(context, args);
                    }
                }, wait);
                if (callNow) func.apply(context, args);
            },

            toggleSideBar() {
                this.isToggled = !this.isToggled;
            },
            showSideBar() {
                this.$store.commit("setToggle", true);
                setTimeout(() => {
                    this.$store.commit("setFullyExpand", true);
                }, 250);
            },
            hideSideBar() {
                this.$store.commit("setFullyExpand", false);
                setTimeout(() => {
                    this.$store.commit("setToggle", false);
                }, 50);
            }
        }
    };
</script>

<style scoped>
    @import url("https://www.w3schools.com/w3css/4/w3.css");

    #sidebar-wrapper {
        z-index: 1000;
        position: absolute;
        left: 200px;
        width: 70px;
        height: 100%;
        margin-left: -200px;
        overflow-y: hidden;
        background: #fff;
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    span {
        font-size: 20px;
        text-align: right;
        padding-left: 10px;
    }

    a {
        text-decoration: none;
    }

    #sidebar-wrapper.isToggled {
        width: 200px;
    }
</style>
