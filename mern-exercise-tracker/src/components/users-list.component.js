/* jshint esversion: 6 */

import React, { Component } from "react"; // most react components will have these React and Component from react imports

// all components starts with this export of that particular component which extends Component class
export default class UsersList extends Component {
    render() {
        return (
            <div>
                <p>You are on the Users List component</p>
            </div>
        );
    }
}
