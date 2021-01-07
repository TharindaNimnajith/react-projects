import React, { Component } from 'react';

class NewsCard extends Component {
    render() {
        return (
            <div className={`card bg-${this.props.color} text-white`}>
                <h3 className="text-center ">{this.props.topic}</h3>
                <h3 className="text-center ">{this.props.amount}</h3>

            </div>
        );
    }
}

export default NewsCard;
