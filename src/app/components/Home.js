import React from "react";
import img from "../img/flame.png";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <p>HOME welcome~~~~~</p>
                <img src={img} />
            </div>
        );
    }
}