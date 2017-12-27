const indexTpl = require("./index.string");

import commonUtil from "../utils/commonUtil"
commonUtil.render(indexTpl);

const Vue = require("../libs/vue");
new Vue({
    el: "#container",
    data: {
        content: ""
    }
});