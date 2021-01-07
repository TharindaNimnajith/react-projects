import React, { Component } from 'react';
import axios from 'axios';
import Proxy from '../../Proxy';

class AddEmployee extends Component {


    constructor(props) {
        super(props);

    }

    onSubmitHandle = (e) => {

        e.preventDefault();
        axios({
            method: 'post',
            url: `${Proxy}employee/create`,
            data: this.state
        }).then(res => {
            alert('Employee Added Successfully')
            this.props.fetchData();
        })
    }

    onChangeHandle = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">First Name</label>
                        <input type="text" className="form-control" id="firstname" aria-describedby="emailHelp" onChange={this.onChangeHandle} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Last Name</label>
                        <input type="text" className="form-control" id="lastname" aria-describedby="emailHelp" onChange={this.onChangeHandle} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="text" className="form-control" id="email" aria-describedby="emailHelp" onChange={this.onChangeHandle} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Age</label>
                        <input type="text" className="form-control" id="age" aria-describedby="emailHelp" onChange={this.onChangeHandle} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Basic Salary</label>
                        <input type="text" className="form-control" id="basicsalary" aria-describedby="emailHelp" onChange={this.onChangeHandle} />
                    </div>


                    <button onClick={this.onSubmitHandle} className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }
}

export default AddEmployee;
