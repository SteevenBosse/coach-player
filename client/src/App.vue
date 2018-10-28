<template>
    <div id="app">
        <Navbar></Navbar>
        <div id="wrapper" v-bind:class="{toggled:sideNaveToggled}">
            <div>
                <Sidenav></Sidenav>
            </div>
            <div id="page-content-wrapper">
                <MainContent></MainContent>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './components/nav/Navbar';
    import Sidenav from './components/nav/Sidenav';
    import MainContent from "./components/MainContent"

    export default {
        name: "coachplayer",
        components: {Navbar, Sidenav, MainContent},
        computed: {
            sideNaveToggled() {
                return this.$store.state.Sidenav.isToggled;
            }
        }
    };
</script>

<style>
    @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

    * {
        font-family: "Source Sans Pro", sans-serif;
    }

    /* Toggle Styles */

    #wrapper {
        padding-left: 0;
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
        overflow: hidden;
    }

    #wrapper.toggled {
        padding-left: 200px;
        overflow: hidden;
    }

    #page-content-wrapper {
        padding-left: 100px;
        padding-top: 80px;
        padding-right: 60px;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    #wrapper.toggled #page-content-wrapper {
        position: relative;
        padding-left: 100px;
        margin-right: 10px;
    }

    .fixed-brand {
        width: auto;
    }
</style>
