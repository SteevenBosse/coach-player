<template>
    <b-navbar toggleable="md" type="dark" variant="info" id="navBar">
        <b-navbar-brand href="#">CoachPlayer</b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item-dropdown text="Edit">
                <b-dropdown-item> Undo <span class="shortcut">[Ctrl+Z]</span></b-dropdown-item>
                <b-dropdown-item>Redo <span class="shortcut">[Ctrl+Y]</span></b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Cut <span class="shortcut">[Ctrl+X]</span></b-dropdown-item>
                <b-dropdown-item>Copy <span class="shortcut">[Ctrl+C]</span></b-dropdown-item>
                <b-dropdown-item>Paste <span class="shortcut">[Ctrl+Shift+V]</span></b-dropdown-item>
                <b-dropdown-item>Delete</b-dropdown-item>
                <b-dropdown-item>Select All <span class="shortcut">[Ctrl+A]</span></b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Help">
                <b-dropdown-item>Learn More</b-dropdown-item>
                <b-dropdown-item>Documentation</b-dropdown-item>
                <b-dropdown-item>Community Discussion</b-dropdown-item>
                <b-dropdown-item>Search Issues</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown right>
                <!-- Using button-content slot -->
                <template slot="button-content">
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
</script>

<style>
    @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

    .shortcut {
        font-size: 12px;
        float: right;
        margin-top: 3px;
        color: rgb(139, 138, 138);
    }

    #navBar {
        background-color: #4fc08d !important;
        z-index: 10000;
    }
</style>
