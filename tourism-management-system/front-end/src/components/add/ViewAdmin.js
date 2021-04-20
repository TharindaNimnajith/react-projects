import React, { Component } from 'react';
import Auth from '../../Authentication/Auth';

class ViewAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            contact: "",
            date: "",
            time: "",
            package: "",
            venue: "",
            price: "",
            plans: null
        }

    }
    async componentDidMount() {
        this.loadPlans();
    }

    async loadPlans() {
        try {
            const res = await fetch("http://localhost:5000/plan/plans/");
            const data = await res.json();
            //updateing state with lastest data
            this.setState({
                plans: data,
            });

        } catch (e) {
            //if failed to communicate with api this code block will run
            console.log(e);
        }
    }




    AllPlanList() {



        if (this.state.plans !== null) {

            return (
                <div >
                    <table className="table table-bordered" style={{ border: " 1px black" }}>
                        <thead className="thead-light">
                            <tr>
                                <th>Tuorist Name</th>
                                <th>Address</th>
                                <th>Contact Info</th>
                                <th>Package Name</th>
                                <th>Venue</th>
                                <th>Package Price</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>

                        {this.state.plans.map((plan, key) =>
                        (

                            <tbody className="tbody-light">
                                <tr>
                                    <td>{plan.name}</td>
                                    <td>{plan.address}</td>
                                    <td>{plan.contact}</td>
                                    <td>{plan.package}</td>
                                    <td>{plan.venue}</td>
                                    <td>{plan.price}</td>
                                    <td>{plan.date}</td>
                                    <td>{plan.time}</td>

                                </tr>
                            </tbody>
                        ))

                        }

                    </table>
                </div >

            )

        }

    }






    render() {

        return (
            <div className="container">


                <div className="">
                    <br /><br />
                    <br /><br />

                    <div className="" style={{ outlineStyle: "solid", padding: "20px 20px" }}>
                        <h1>All User Required Packages</h1>
                        {this.AllPlanList()}
                    </div>

                </div>
            </div>
        );
    }
}

export default ViewAdmin;