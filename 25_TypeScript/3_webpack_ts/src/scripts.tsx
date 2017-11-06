// 引入React
import * as React from "react";
import * as ReactDOM from "react-dom"; 


// header
import { Header } from "./components/header/header";
ReactDOM.render(
    <Header left="I" middle="am" right="tecwang" />,
    document.getElementById("header"),
);

// aside
import { Aside } from "./components/aside/aside";
ReactDOM.render(
    <Aside left="I" middle="am" right="tecwang" />,
    document.getElementById("aside"),
);