<template>
    <div class="writter">
        <!-- 此处用一个空函数来阻止默认事件的触发 -->
        <div class="panel" @click.stop.prevent="{}">
            <div class="top">
                <div class="left">
                    <div class="input-wrapper">
                        <input type="text" v-model="titleText" placeholder="Title" 
                            onfocus="this.placeholder=''" onblur="this.placeholder='Title'">
                    </div>
                </div>
                <div class="middle">
                    <div class="selected">
                        <!-- 单击切换类名 -->
                        <div class="text" :class="{'active': isActive}" @click="toggleList">
                            {{category[currentIndex]}}
                            <i class="fa" :class="{'fa-angle-down': !changeIcon, 'fa-angle-up': changeIcon}"></i>
                        </div>
                    </div>
                    <transition>
                        <ul v-show="listShow">
                            <li class="item" v-for="(item, index) in category">
                                <div class="text" @click="changeItem(index)">{{item}}</div>
                            </li>
                        </ul>
                    </transition>
                </div>
                <div class="right">
                    <div class="icons">
                        <div class="left" @click="save">
                            <i class="fa fa-save"></i>
                        </div>
                        <div class="right" @click="close">
                            <i class="fa fa-close"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-wrapper" >
                <div class="content">
                    <div class="wrapper">
                        <div class="text">{{content}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Vue from "vue"
// import BScroll from "better-scroll"
// import IScroll from "../../common/js/iscroll.js"
// import IScroll from "iscroll"
import Scroll from "../scroll/scroll.vue"

export default {
    name: 'writer',
    props: {

    },
    data(){
        return {
            titleText: '',
            content: 'GitHub is a web-based Git version control repository hosting service. It is mostly used for computer code. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project',
            category: ['工作','学习','生活'],
            listShow: false,
            isActive: false, 
            changeIcon: false,
            currentIndex: 0
        }
    },
    mounted(){
        // this.$nextTick(()=>{
            
        // });  
        // setTimeout(() => {
        //     if(!this.conScroll){
        //         this.conScroll = new BScroll(this.$refs.conWrapper, {
        //             click: true
        //         });
        //         console.log(this.conScroll);
        //     }else{
        //         this.conScroll.refresh();
        //     }
        // }, 2000);
    },
    methods: {
        putIn(){

        },
        Focus(){
            this.focusStat = true;
        },
        toggleList(){
            this.listShow = !this.listShow;
            this.isActive = !this.isActive;
            this.changeIcon = !this.changeIcon;
        },
        changeItem(index){
            this.currentIndex = index;
            this.toggleList();
        },
        close(){
            // 关闭当前父组件的所有list
            this.$parent.toggleMask();
            this.$parent.toggleList();
        },
        save(){
            console.log('saved');
        }
    },
    components: {
        'v-scroll': Scroll
    }
    // 自定义指令实现文本框聚焦
    // directives: {
    //     focus: {
    //         update: function (el, {value}) {
    //             if (value) {
    //                 el.focus()
    //             }
    //         }
    //     }
    // }
}
</script>

<style lang="stylus" scoped>
    @import "./writer.styl"
</style>


