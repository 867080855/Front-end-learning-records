<template>
    <div>
        <div class="list-item">
            <div class="left">{{item.name}}</div>
            <div class="right fa fa-angle-down" @click="toggleList"></div>
        </div>
        <transition name="fade">
            <div class="func-wrapper" v-show="listShow">
                <div v-for="func in item.funcs" class="func">{{func}}</div>
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
            listShow: false
        }
    },
    methods: {
        toggleList(){
            this.listShow = !this.listShow;
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "./listitem.styl"
</style>

