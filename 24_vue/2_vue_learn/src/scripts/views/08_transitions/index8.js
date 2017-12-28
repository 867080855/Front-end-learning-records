const indexTpl = require("./index8.string");

import commonUtil from "../../utils/commonUtil";
commonUtil.render(indexTpl);

const Vue = require("../../libs/vue");
const vm = new Vue({
    el: "#football-container",
    data: {
        show: true
    }
});

