import React, { Component } from 'react';
import Auth from '../../Authentication/Auth';
import { FaTrashAlt, FaPlusCircle } from 'react-icons/fa'

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: Auth.getUsername(),
            address: Auth.getAddress(),
            contact: Auth.getEmail(),
            date: "",
            time: "",
            package: "",
            venue: "",
            price: "",
            plans: [],
            events: []

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangePackage = this.onChangePackage.bind(this);



    }
    async componentDidMount() {
        this.loadPlans();
        this.loadEvents();


    }

    async loadPlans() {
        try {
            const res = await fetch("http://localhost:5000/plan/plansUSer/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "name": this.state.name, "address": this.state.address })
            });
            const data = await res.json();
            //updateing state with lastest data
            console.log(data)
            this.setState({
                plans: data,
            });

        } catch (e) {
            //if failed to communicate with api this code block will run
            console.log(e);
        }
    }


    async loadEvents() {
        try {
            const res = await fetch("http://localhost:5000/event/events/");
            const data = await res.json();
            console.log(data)
            //updateing state with lastest data
            this.setState({
                events: data,
                package: data[0].name,

            });

        } catch (e) {
            //if failed to communicate with api this code block will run
            console.log(e);
        }
    }


    // async loadEventPrice() {
    //     try {
    //         const res = await fetch("http://localhost:5000/event/events/");
    //         const data = await res.json();
    //         console.log(data)
    //         //updateing state with lastest data
    //         this.setState({
    //             events: data,
    //             package: data[0].name,

    //         });

    //     } catch (e) {
    //         //if failed to communicate with api this code block will run
    //         console.log(e);
    //     }
    // }

    handleChange(event) {
        const target = event.target;
        const value = target.value
        const name = target.name;

        this.setState({
            [name]: value

        });
    }


    onChangePackage(e) {

        let package1 = e.target.value;
        let price1;
        let venue1;

        this.state.events.map((event, key) => {

            if (event.name === package1) {

                price1 = event.pPrice;
                venue1 = event.venue
            }
        });
        this.setState({

            package: package1,
            price: price1,
            venue: venue1

        })

    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        if (this.state.name.trim() !== 0) {
            try {
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json", token: Auth.getToken() },
                    body: JSON.stringify({
                        name: this.state.name,
                        address: this.state.address,
                        contact: this.state.contact,
                        date: this.state.date,
                        time: this.state.time,
                        package: this.state.package,
                        venue: this.state.venue,
                        price: this.state.price,

                    }),
                };
                await fetch(
                    "http://localhost:5000/plan/newPlan",
                    requestOptions
                );
                this.loadPlans();
                this.setState({
                    name: this.state.name,
                    address: this.state.address,
                    contact: this.state.contact,
                    date: "",
                    time: "",
                    package: "",
                    venue: "",
                    price: ""
                });
                alert("Added successfully!");
            } catch (e) {
                console.log(e);
            }
        }
    }

    async deletePlan(id) {
        try {
            const requestOptions = {
                method: "DELETE",
                headers: { "Content-Type": "application/json", token: Auth.getToken() },
                body: JSON.stringify({ id: id }),
            };
            await fetch("http://localhost:5000/plan/plans", requestOptions);
            alert("Deleted");
            this.loadPlans();
        } catch (e) {
            console.log(e);
        }
    }


    myPlanList() {


        if (this.state.plans !== null) {

            return (
                <div >
                    <table className="table table-bordered" style={{ border: " 1px black" }}>
                        <thead className="thead-light">
                            <tr>
                                <th>Package</th>
                                <th>Venue</th>
                                <th>Package Price(Rs.)</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        {this.state.plans.map((plan, key) =>
                        (

                            <tbody className="tbody-light">
                                <tr>
                                    <td>{plan.package}</td>
                                    <td>{plan.venue}</td>
                                    <td>{plan.price}</td>
                                    <td>{plan.date}</td>
                                    <td>{plan.time}</td>
                                    <td>
                                        <button type="" className="btn btn-danger " style={{ width: "100px" }} onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.deletePlan(plan._id) }}><FaTrashAlt size={20} />  Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        ))

                        }

                    </table>
                </div>

            )

        }

    }



    render() {

        return (
            <div className="container">
                <br />

                <div className="row-6">
                    <form className="mt-5 col-lg-6 mx-auto" style={{ outlineStyle: "solid", width: "800px", height: "590px", padding: "10px 30px" }} onSubmit={this.handleSubmit}>
                        <h3>Add New Planned Package to My List</h3>
                        <br />

                        <div className="form-group row">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input disabled type="text" name="name" className="form-control" value={this.state.name} placeholder="Name of the User" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Address</label>
                            <div className="col-sm-10">
                                <input disabled type="text" name="address" className="form-control" value={this.state.address} placeholder="Address of the User" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Contact Info</label>
                            <div className="col-sm-10">
                                <input disabled type="text" name="contact" className="form-control" value={this.state.contact} placeholder="Contact Number of the User" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Date</label>
                            <div className="col-sm-10">
                                <input type="Date" name="date" onChange={this.handleChange} className="form-control" value={this.state.date} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Time</label>
                            <div className="col-sm-10">
                                <input type="time" name="time" onChange={this.handleChange} className="form-control" value={this.state.time} placeholder="HH/MM" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Select Package</label>
                            <div className="col-sm-10">
                                <select ref="userInput"
                                    required
                                    className="form-control"
                                    value={this.state.package}
                                    onChange={this.onChangePackage}>
                                    {
                                        this.state.events.map(function (event) {

                                            return <option
                                                key={event}
                                                value={event.name}>{event.name}({event.venue})
                                            </option>;
                                        })
                                    }
                                </select>

                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Package Price</label>
                            <div className="col-sm-10">
                                <input disabled type="text" name="price" className="form-control" value={this.state.price} placeholder="100000" />
                            </div>
                        </div>


                        <div className="form-group">
                            <div className=" mx-auto">
                                <button type="submit" className="btn btn-success col-3 m-2"><FaPlusCircle
                                    style={{
                                        marginRight: '9px',
                                        marginBottom: '6px'
                                    }}
                                />Book</button>

                            </div>

                        </div>

                    </form>

                </div>
                <div className="">
                    <br /><br />


                    <div className="" style={{ outlineStyle: "solid", padding: "20px 20px" }}>
                        <h1>All My Plans</h1>
                        {this.myPlanList()}
                    </div>

                </div>
                <br />
                <br />
            </div>

        );
    }
}

export default AddUser;