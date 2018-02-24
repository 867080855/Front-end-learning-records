import * as React from "react";
// console.log(React);
export interface HeaderProps {
    left: string;
    middle: string;
    right: string;
}

// export const Hello = (props: HelloProps) => 
//     <h1>Hello from {props.compiler} and {props.framework} ! </h1>

export class Header extends React.Component<HeaderProps, {}> {
    // render() {
    //     return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
    // }
    render() {
        return  <div id="header_component">
                    <div className="left">{this.props.left}</div>
                    <div className="middle">{this.props.middle}</div>
                    <div className="right">{this.props.right}</div>
                </div>;
    }
}