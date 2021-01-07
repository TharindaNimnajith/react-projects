/* jshint esversion: 6 */

import React, { Component } from "react";  // most react components will have these React and Component from react imports

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios';

// all components starts with this export of that particular component which extends Component class
export default class CreateExercises extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        });
    }

    onChangeUsername(e) {
        // don't do this, instead always use setState() method
        //this.state.username = "Tharinda";

        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        };

        console.log(exercise);

        window.location = '/';
    }

    render() {
        return (
            <div>
                {
                    /*
                    <p>You are on the Create Exercises component</p>
                    */
                }


            </div>
        );
    }
}
