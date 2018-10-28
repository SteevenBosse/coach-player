<template>
    <b-container fluid>
        <b-col :md="mdTable/2">
            <b-form-checkbox id="checkbox1"
                             v-model="showDetails">
                Show details
            </b-form-checkbox>
        </b-col>
        <b-col :md="mdTable" class="my-1">
            <b-form-group horizontal label="Filter" class="mb-0">
                <b-input-group>
                    <b-form-input v-model="filter" placeholder="Type to Search"/>
                    <b-input-group-append>
                        <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
                    </b-input-group-append>
                </b-input-group>
            </b-form-group>
        </b-col>
        <b-row>
            <b-col :md="mdTable" class="my-1 scrollable">
                <SortableTable v-bind:class="{dragover:isDraggingOver}" v-model="items" :filter="filter"
                               :fields="fields"></SortableTable>
            </b-col>
            <b-col md="6" class="my-1">
                <b-card v-if="showDetails">
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
   // import _ from "underscore";
    import SortableTable from "./Sortable-Table";
    //import { getMetadata } from "../../audio/audioFileUtil";

    export default {
        mounted: function () {
            document.body.addEventListener("dragover", this.onDragover.bind(this));
            document.body.addEventListener("dragenter", this.onDragenter.bind(this));
            document.body.addEventListener("drop", this.onDrop.bind(this));
            document.body.addEventListener("dragleave", this.onDragleave.bind(this));
        },
        components: {
            SortableTable
        },
        data() {
            return {
                fields: [
                    {key: "position", sortable: true},
                    {key: "title", sortable: true},
                    {key: "duration", sortable: true},
                    {key: "size", sortable: true}
                ],
                filter: null,
                mdTable: 12,
                isDraggingOver: false,
                showDetails: false,
                items: [
                    {
                        position: 1,
                        title: "Steve Aoki, Daddy Yankee, Play-N-Skillz & Elvis Crespo",
                        duration: "3:46",
                        size: "5.17 mb"
                    },
                    {
                        position: 2,
                        title: "Another techno acid music",
                        duration: "2:45",
                        size: "1.57 mb"
                    },
                    {
                        position: 3,
                        title: "A State Of Trance Radio",
                        duration: "5:45",
                        size: "0.78 mb"
                    },
                    {
                        position: 4,
                        title: "Despacito",
                        duration: "10:55",
                        size: "3.56 mb"
                    },
                    {
                        position: 5,
                        title: "Hello World",
                        duration: "1:47",
                        size: "2.65 mb"
                    }
                ]
            };
        },
        watch: {
            showDetails: function () {
                if (this.showDetails === true) {
                    this.mdTable = 6;
                } else {
                    this.mdTable = 12;
                }
            }
        },
        methods: {
            onDragover: function (event) {
                event.preventDefault();
                this.isDraggingOver = true;
            },
            onDragenter: function (event) {
                event.preventDefault();
            },
            onDrop: function (event) {
                event.preventDefault();
                this.isDraggingOver = false;
                /*_.each(event.dataTransfer.files, file => {
                    // getMetadata(file, this.addItem);
                    console.log(file);
                });*/
            },
            addItem: function (item) {
                let newItem = {};
                newItem.metadata = item.metadata;
                newItem.position = this.items.length + 1;
                newItem.size = (item.size / (1024 * 1024)).toFixed(2) + " mb";
                newItem.title = item.title;
                let minutes = Math.floor(item.metadata.format.duration / 60);
                let seconds = item.metadata.format.duration - minutes * 60;
                newItem.duration = minutes + ":" + Math.floor(seconds);
                this.items.push(newItem);
            },
            onDragleave: function () {
                this.isDraggingOver = false;
            }
        }
    };
</script>

<style>
    #drag-file {
        background-color: blue;
        color: white;
        text-align: center;
        width: 300px;
        height: 300px;
    }

    /* Prevent the text contents of draggable elements from being selectable. */
    [draggable] {
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }

    li {
        color: black;
    }

    .dragging {
        opacity: 0.8;
        color: #6894d1;
    }

    .dragover {
        outline: 1px solid red;
    }

    .drag-enter {
        color: #c93742;
    }

    .scrollable {
        height: 450px;
        overflow: auto;
    }
</style>