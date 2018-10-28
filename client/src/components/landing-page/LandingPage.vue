<template>
    <div>
        <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
        <main>
            <div class="left-side">
        <span class="title">
          Welcome to your new project!
        </span>
            </div>

            <div class="right-side">
                <div class="doc">
                    <div class="title">Getting Started</div>
                    <p>
                        This work ! Alleluhia V5
                    </p>
                    <button @click="open('https://simulatedgreg.gitbooks.io/electron-vue/content/')">Read the Docs
                    </button>
                    <br><br>
                </div>
                <div class="doc">
                    <div class="title alt">Other Documentation</div>
                    <button class="alt">Electron</button>
                    <button class="alt" @click="open('https://vuejs.org/v2/guide/')">Vue.js</button>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "landing-page",
        data: function () {
            return {};
        },
    };
</script>

<style>
    main {
        display: flex;
        justify-content: space-between;
    }

    main > div {
        flex-basis: 50%;
    }

    .left-side {
        display: flex;
        flex-direction: column;
    }

    body {
        overflow: hidden;
    }

    .welcome {
        color: #555;
        font-size: 23px;
        margin-bottom: 10px;
    }

    .title {
        color: #2c3e50;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 6px;
    }

    .title.alt {
        font-size: 18px;
        margin-bottom: 10px;
    }

    #logo {
        height: auto;
        margin-bottom: 20px;
        width: 420px;
    }

    .doc p {
        color: black;
        margin-bottom: 10px;
    }

    .doc button {
        font-size: 0.8em;
        cursor: pointer;
        outline: none;
        padding: 0.75em 2em;
        border-radius: 2em;
        display: inline-block;
        color: #fff;
        background-color: #4fc08d;
        transition: all 0.15s ease;
        box-sizing: border-box;
        border: 1px solid #4fc08d;
    }

    .doc button.alt {
        color: #42b983;
        background-color: transparent;
    }
</style>
