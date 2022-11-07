import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                {this.props.displayConvo(this.props.name)}
            </div>
        );
    }
}

export default Contact;
