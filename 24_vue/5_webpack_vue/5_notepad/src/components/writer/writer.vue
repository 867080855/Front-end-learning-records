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
                            {{category[itemIndex]}}
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
        // 外界的打开writer组件的分辨变量，对应新建和编辑
        typeOut: {  
            type: Number,
            default: 1
        },


        index: Number,  // card组件索引
        card: Object    // card组件会传进来的数据
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
            itemIndex: 0,    // 当前选中分类的类目

            // 两种调用方式   
            type: 1,            // 1. 新建    2. 编辑
            currentIndex: 0     // 选中的card在cards数组的索引
        }
    },
    created(){
        this.type = this.typeOut;           // 确定是谁打开的wrtier，是card还是top


        // 如果是card打开的，需要进行相关数据的绑定
        if(this.type == 2){
            // console.log(this.card.desc);
            this.itemIndex = this.card.type;            // 绑定card信息所选择的文章分类
            this.currentIndex = this.index;             // 绑定索引
            this.contentPrivate = this.card.desc;       // 同步内容
            this.titleTextPrivate = this.card.title;    // 同步标题
        }
    },
    methods: {
        // 标题聚焦
        Focus(){
            this.focusStat = true;
        },
        // 切换文章分类列表的现实
        toggleList(){
            this.listShow = !this.listShow;
            this.isActive = !this.isActive;
            this.changeIcon = !this.changeIcon;
        },
        // 更改文章分类
        changeItem(index){
            this.itemIndex = index;
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

            // 拿到唯一辨识度的id，默认比当前所有项目的id高一个数
            let max = 0;
            data.cards.forEach((item)=>{
                if(item.id > max)
                    max = item.id;
            });
            let chanegdData = {
                title: this.titleTextPrivate,
                desc: this.contentPrivate,
                id: ++max,
                type: this.itemIndex
            };

            if(this.type == 1){
                data.cards.unshift(chanegdData);
                // this.$emit('saved',chanegdData);
            }else if(this.type == 2){
                // this.$emit('saved',chanegdData);
                data.cards[this.currentIndex] = chanegdData;
            }
            // 内容存储本地
            localStorage.setItem('dataPrivate', JSON.stringify(data));
            // 告知父级组件本地修改任务完成
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


