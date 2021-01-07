import React, { Component } from 'react';

class HospitalDetails extends Component {
    render() {
        return (
            <div>
                {
                    this.props.data.map((hos, key) => {
                        return (
                            <div key={key} className="">
                                <div className="card shadow">
                                    <h6 className="text-center">{hos.hospital.name}</h6>
                                    <h6 className="text-center">{hos.hospital.name_si}</h6>
                                    <h6 className="text-center">{hos.hospital.name_ta}</h6>

                                    <div className="card">
                                        <h6 className="text-center">Local - {hos.cumulative_local}</h6>
                                        <h6 className="text-center">Foreign - {hos.cumulative_foreign}</h6>
                                        <h6 className="text-center">Total - {hos.cumulative_total}</h6>
                                        <h6 className="text-center">Last Updated - {hos.created_at}</h6>
                                    </div>
                                </div>
                                <br /><br />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default HospitalDetails;
