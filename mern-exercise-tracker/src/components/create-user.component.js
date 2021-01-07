/* jshint esversion: 6 */

import React, { Component } from "react"; // most react components will have these React and Component from react imports

import axios from "axios";

// all components starts with this export of that particular component which extends Component class
export default class CreateUsers extends Component {
    render() {
        return (
            <div>
                <p>You are on the Create Users component</p>
            </div>
        );
    }
}
