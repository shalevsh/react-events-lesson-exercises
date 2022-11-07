import React, { Component } from "react";

class Conversation extends Component {
    //should recieve the prop "convo"
    render() {
        return (
            <div>
                {this.props.convo.forEach((element) => {
                    <div>
                        <span className="sender">
                            {element.sender === "self" ? "Me" : element.sender}
                        </span>
                        <div>{element.text}</div>
                    </div>;
                })}
                <button
                    className="back"
                    onClick={this.props.sender(null)}
                ></button>
            </div>
        );
    }
}

export default Conversation;
