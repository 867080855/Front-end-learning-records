// 导入指定模板
require("../tpls/scroll/scroll");

// 导入指定模板字符串
const footerTpl = require("../tpls/footer/footer.string");

const Vue = require("../libs/vue");
const vm = new Vue({
    el: "#container",
    data: {
        footer: footerTpl   // footer模板字符串
    }
}); 