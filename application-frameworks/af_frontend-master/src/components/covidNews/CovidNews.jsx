import React, { Component } from 'react';

import Axios from 'axios';
import NewsCard from './NewsCard';
import SiteLoading from '../siteloading/SiteLoading'
import HospitalDetails from './HospitalDetails';

class CovidNews extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: false

        }
    }


    componentDidMount() {
        this.setState({
            loading: true
        })
        Axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
            .then(res => {
                console.log(res.data.data)
                this.setState({
                    data: res.data.data
                })
                this.setState({
                    loading: false
                })
            }).catch(err => {
                alert('Server Error please try again')
                this.setState({
                    loading: false
                })
            })
    }

    render() {

        if (!this.state.data) {
            return <SiteLoading />
        }

        return (

            <div className="container">

                <h1 className="text-center text-primary">Covid 19 Latest Updates</h1>


                <h1 className="text-center text-primary">Sri Lanka</h1>

                <div className="card-deck">
                    <NewsCard topic="Active Cases" color="success" amount={this.state.data.local_active_cases} />
                    <NewsCard topic="Recovered" color="primary" amount={this.state.data.local_recovered} />
                    <NewsCard topic="Deaths" color="danger" amount={this.state.data.local_deaths} />
                </div>

                <br /><br />

                <HospitalDetails data={this.state.data.hospital_data} />
            </div>

        );
    }
}

export default CovidNews;