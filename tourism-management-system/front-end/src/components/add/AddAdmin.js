import React, { Component } from 'react';
import Auth from '../../Authentication/Auth';
import { FaTrashAlt, FaPlusCircle } from 'react-icons/fa';

class AddAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            venue: "",
            pPrice: "",
            events: null,
            image: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount() {
        this.loadEvents();
    }

    async loadEvents() {
        try {
            const res = await fetch("http://localhost:5000/event/events/");
            const data = await res.json();
            console.log(data)
            //updateing state with lastest data
            this.setState({
                events: data,
            });

        } catch (e) {
            //if failed to communicate with api this code block will run
            console.log(e);
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value
        const name = target.name;

        this.setState({
            [name]: value

        });
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
                        description: this.state.description,
                        venue: this.state.venue,
                        pPrice: this.state.pPrice,
                        image: this.state.image

                    }),
                };
                await fetch(
                    "http://localhost:5000/event/newEvent",
                    requestOptions
                );
                this.loadEvents();
                this.setState({
                    name: "",
                    description: "",
                    venue: "",
                    pPrice: "",
                    image: ""
                });
                alert("Added successfully!");
            } catch (e) {
                console.log(e);
            }
        }
    }

    async deleteEvent(id) {
        try {
            const requestOptions = {
                method: "DELETE",
                headers: { "Content-Type": "application/json", token: Auth.getToken() },
                body: JSON.stringify({ id: id }),
            };
            await fetch("http://localhost:5000/event/events", requestOptions);
            alert("Deleted");
            this.loadEvents();
        } catch (e) {
            console.log(e);
        }
    }



    allPackageList() {

        let eventlist;


        if (this.state.events !== null) {

            return (
                <div >
                    <table className="table table-bordered" style={{ border: " 1px black" }}>
                        <thead className="thead-light">
                            <tr>
                                <th>Package Name</th>
                                <th>Travel Description</th>
                                <th>Venue</th>
                                <th>Package Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        {this.state.events.map((event, key) =>
                        (

                            <tbody className="tbody-light">
                                <tr>
                                    <td>{event.name}</td>
                                    <td>{event.description}</td>
                                    <td>{event.venue}</td>
                                    <td>{event.pPrice}</td>
                                    <td>
                                        <button type="" className="btn btn-danger " style={{ width: "100px" }} onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.deleteEvent(event._id) }}><FaTrashAlt size={20} />  Delete</button>
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

                <div className="row">
                    <form className="mt-5 col-lg-6 mx-auto" style={{ outlineStyle: "solid", width: "800px", height: "450px", padding: "10px 30px" }} onSubmit={this.handleSubmit}>
                        <h3>Add a New Planned Package</h3>
                        <br />
                        <div className="form-group row">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" name="name" onChange={this.handleChange} className="form-control" value={this.state.name} placeholder="Name of the Package" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-10">
                                <input type="text" name="description" onChange={this.handleChange} className="form-control" value={this.state.description} placeholder="Small description" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Venue</label>
                            <div className="col-sm-10">
                                <input type="text" name="venue" className="form-control" onChange={this.handleChange} value={this.state.venue} placeholder="Place" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Package Price</label>
                            <div className="col-sm-10">
                                <input type="number" name="pPrice" className="form-control" onChange={this.handleChange} value={this.state.pPrice} placeholder="Package Price" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Image</label>
                            <div className="col-sm-10">
                                <input type="text" name="image" className="form-control" onChange={this.handleChange} value={this.state.image} placeholder="Url of the Image" />
                            </div>
                        </div>


                        <div className="form-group">
                            <div className=" mx-auto">
                                <button type="submit" className="btn btn-success col-3 m-2"> <FaPlusCircle
                                    style={{
                                        marginRight: '9px',
                                        marginBottom: '6px'
                                    }}
                                />Submit</button>

                            </div>

                        </div>

                    </form>

                </div>
                <div className="">
                    <br /><br />


                    <div className="" style={{ outlineStyle: "solid", padding: "20px 20px" }}>

                        <h1>All Added Packages</h1>
                        {this.allPackageList()}
                    </div>

                </div>

                <br />
                <br />
            </div>
        );
    }
}

export default AddAdmin;