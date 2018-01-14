<template>
    <div class="writter">
        <!-- 此处用一个空函数来阻止默认事件的触发 -->
        <div class="panel" @click.stop.prevent="{}">
            <div class="top">
                <div class="left">
                    <div class="input-wrapper">
                        <input type="text" v-model="titleTextPrivate" placeholder="Title" 
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
                        <!-- <div class="text">{{content}}</div> -->
                        <textarea class="text" v-model="contentPrivate" cols="30" rows="10"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Scroll from "../scroll/scroll.vue"

export default {
    name: 'writer',
    props: {
        typeOut: {
            type: Number,
            default: 1
        },
        index: Number,
        card: Object
    },
    data(){
        return {
            // 文章标题 和 文本
            titleTextPrivate: '',
            contentPrivate: '',

            // 文章分类 
            category: ['工作','学习','生活'],
            isActive: false,    // 点中分类后的阴影效果
            changeIcon: false,  // 分类右侧的箭头上下方向切换
            listShow: false,    // 是否显示文本类型分类列表
            currentIndex: 0,    // 当前选中分类的类目

            // 两种调用方式   1. 新建     2. 编辑
            type: 1,
            currentIndex: 0
        }
    },
    created(){
        this.type = this.typeOut;
        this.currentIndex = this.index;
        if(this.type == 2){
            // console.log(this.card.desc);
            this.contentPrivate = this.card.desc;
            this.titleTextPrivate = this.card.title;
        }
    },
    methods: {
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
        // 关闭当前父组件的所有list
        close(){
            if(this.$parent.$parent.toggleMask && this.$parent.$parent.toggleList){
                this.$parent.$parent.toggleMask();
                this.$parent.$parent.toggleList();
            }else if(this.$parent.$parent.toggleMask){
                this.$parent.$parent.toggleMask();
            }
        },
        // 保存文本内容到本地
        save(){
            // 拿到文件title
            // console.log(this.titleText);
            // 拿到文件分组类型
            // console.log(this.currentIndex);
            // 拿到用户具体文本
            // console.log(this.content);

            // 保存当前数据到本地数据的第一条
            let data = JSON.parse(localStorage.getItem('dataPrivate'));
            let chanegdData = {
                title: this.titleTextPrivate,
                desc: this.contentPrivate
            };

            if(this.type == 1){
                data.cards.unshift(chanegdData);
                // this.$emit('saved',chanegdData);
                console.log(1);
            }else if(this.type == 2){
                // this.$emit('saved',chanegdData);
                data.cards[this.currentIndex] = chanegdData;
            }
            // 内容存储本地
            localStorage.setItem('dataPrivate', JSON.stringify(data));
            this.$emit('saved',chanegdData);
            // 列表框消失
            this.close();
        },
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


