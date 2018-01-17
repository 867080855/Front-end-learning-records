import React from "react"
import {render} from "react-dom"
import Hello from "./01_hello/hello"


// <Hello name="code" />
// 此处箭头函数后边是一个括号，不是一个 {}
const App = () => (
    <div>
        <Hello />
        <h2>Amazing things, all right?</h2>
    </div>
)

render(<App />, document.getElementById('root'));