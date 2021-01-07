import React, { Component } from 'react';
import axios from 'axios'
import Proxy from '../../Proxy';

class ViewAll extends Component {


    removeEmoloyee = (id, name) => {
        axios.delete(`${Proxy}employee/delete/${id}`)
            .then(res => {
                alert(res.message);
                this.props.fetchData();
            })
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.props.data.map((emp, key) => {
                                return (
                                    <tr key={key}>
                                        <th scope="row">{key + 1}</th>
                                        <td>{emp.firstname}</td>
                                        <td>{emp.lastname}</td>
                                        <td>{emp.email}</td>
                                        <td><button className="btn btn-danger"
                                            onClick={() => {
                                                this.removeEmoloyee(emp._id, emp.firstname)
                                            }}
                                        >Remove</button></td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>
        );
    }
}

export default ViewAll;
