import React, { Component } from 'react';

class Item extends Component {
  render() {
    const {itemName, deleteItem, editItem} = this.props;
    return (
      <li className="list-group-item d-flex justify-content-between my-2">
        <h6>{itemName}</h6>
        <div className="crud-icons">
          <span className="mx-2 text-success" onClick={editItem}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={deleteItem}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}

export default Item;
