// 轮播图模块
const swiperTpl = require("./scroll.string");

import commonUtil from "../../utils/commonUtil"
commonUtil.render("#banner", swiperTpl);

const Vue = require("../../libs/vue");
const VueResource = require("../../../../node_modules/vue-resource/dist/vue-resource");
Vue.use(VueResource);


new Vue({
    el: "#banner",
    data: {
        list: [],   // 绑定轮播图数据
    },
    ready: function () {
        this.$http.get("./mock/list.json").then(
            res => {
                console.log(res.data.data);  // arr
                this.list = res.data.data;

                var mySwiper = new Swiper('.swiper-container', {
                    direction: 'horizontal',
                    loop: true,
                }) 

                // console.log(IScroll);
                setTimeout(() => {
                    new IScroll('#index_scroll'); 
                }, 500);
            }, res => {
                console.log(res);
            }
        );
    }
});