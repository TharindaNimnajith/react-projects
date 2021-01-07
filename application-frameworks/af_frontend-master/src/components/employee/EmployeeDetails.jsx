import React, { Component } from 'react';
import axios from 'axios'
import Proxy from '../../Proxy';
import ViewAll from './ViewAll'
import SiteLoading from '../siteloading/SiteLoading';
import AddEmployee from './AddEmployee';


class EmployeeDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emp: null
        }
    }


    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios.get(`${Proxy}employee/getAll`)
            .then(res => {

                this.setState({
                    emp: res.data
                })
            })
            .catch(err => {
                alert('Server Error')
            })
    }

    render() {

        if (!this.state.emp) {
            return <SiteLoading />
        }

        return (
            <div className="container">
                <br /><br />
                <ViewAll fetchData={this.fetchData} data={this.state.emp} />
                <br/><br/>
                <AddEmployee fetchData={this.fetchData}/>
            </div>
        );
    }
}

export default EmployeeDetails;
