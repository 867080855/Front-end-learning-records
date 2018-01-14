<template>
    <div>
        <div class="list-item" @click="toggleList">
            <div class="left">{{itemPrivate.name}}</div>
            <div class="right fa fa-angle-down"></div>
        </div>
        <transition name="fade">
            <div class="func-wrapper" v-show="listShow">
                <div v-for="func in itemPrivate.funcs" class="func" @click="clicked(itemPrivate, func)">{{func}}</div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'listItem',
    props: {
        item: {
            type: Object,
            default(){
                return {
                    name: 'New',
                    funcs: ['Markdown', '涂鸦']
                }
            }
        }
    },
    data(){
        return {
            listShow: false,
            itemPrivate: this.item
        }
    },
    methods: {
        toggleList(){
            this.listShow = !this.listShow;
        },
        clicked(obj, func){
            this.$emit('clicked', obj, func);
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "./listitem.styl"
</style>

