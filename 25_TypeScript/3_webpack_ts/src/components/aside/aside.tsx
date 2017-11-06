import * as React from "react";
// console.log(React);
export interface AsideProps {
    left: string;
    middle: string;
    right: string;
}

// export const Hello = (props: HelloProps) => 
//     <h1>Hello from {props.compiler} and {props.framework} ! </h1>

export class Aside extends React.Component<AsideProps, {}> {
    // render() {
    //     return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
    // }
    render() {
        return <div id="aside_component">
            <div className="title">title</div>
            <div className="content">content</div>
        </div>;
    }
}