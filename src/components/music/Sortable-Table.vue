<template>
    <table class="table table-striped table-sm table-hover">
        <thead>
        <tr>
            <th scope="col" v-for="field in fields" :key="field.id">
                <a href="#">
                    {{ field.key }}
                </a>
            </th>
        </tr>
        </thead>
        <draggable v-model="inputVals" :element="'tbody'" :options="dragOptions" v-on:change="onChange">
            <tr v-for="item in search" :key="item.position">
                <th scope="row">{{item.position}}</th>
                <td>{{item.title}}</td>
                <td>{{item.duration}}</td>
                <td>{{item.size}}</td>
            </tr>
        </draggable>
        <tfoot>
        <tr>
            <th></th>
            <th></th>
            <th>Footer 3</th>
            <th>Footer 4</th>
        </tr>
        </tfoot>
    </table>
</template>

<script>
    import draggable from "vuedraggable";
    import _ from "underscore";

    export default {
        props: ["value", "fields", "filter"],
        components: {
            draggable
        },
        data() {
            return {inputVals: this.value};
        },
        watch: {
            inputVals(val) {
                this.$emit("input", val);
            }
        },
        computed: {
            editable: function () {
                if (
                    !_.isNull(this.filter) &&
                    !_.isEmpty(this.filter) &&
                    this.search.length !== this.inputVals.length
                ) {
                    return false;
                } else {
                    return true;
                }
            },
            search: function () {
                let result = [];
                if (!_.isNull(this.filter) && !_.isEmpty(this.filter)) {
                    _.each(this.inputVals, input => {
                        let stringifyInput = JSON.stringify(input);
                        if (
                            stringifyInput.toLowerCase().includes(this.filter.toLowerCase())
                        ) {
                            result.push(input);
                        }
                    });
                } else {
                    return this.inputVals;
                }
                return result;
            },
            dragOptions() {
                return {
                    animation: 150,
                    group: "description",
                    disabled: !this.editable,
                    ghostClass: "ghost"
                };
            }
        },
        methods: {
            onChange(e) {
                let newIndex = e.moved.newIndex;
                let oldIndex = e.moved.oldIndex;
                let floorIndex = newIndex < oldIndex ? newIndex : oldIndex;
                let roofIndex = newIndex > oldIndex ? newIndex : oldIndex;
                _.each(this.inputVals.slice(floorIndex, roofIndex + 1),
                    (input, index) => {
                        input.position = floorIndex + index + 1;
                    }
                );
            }
        }
    };
</script>

<style>
    .ghost {
        opacity: 0.5;
        background: #c8ebfb;
    }
</style>
