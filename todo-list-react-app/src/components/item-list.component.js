import React, { Component } from 'react';
import Item from './item.component';

class ItemList extends Component {
  render() {
    const {itemsArray, removeAllItems, deleteItem, editItem} = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-center">Items List</h3>
        {
          itemsArray.map(item => {
            return <Item itemId={item.itemId} itemName={item.itemName} deleteItem={() => deleteItem(item.itemId)} editItem={() => editItem(item.itemId)} />
          })
        }
        <button type="button" className="btn btn-block btn-danger mt-3" onClick={removeAllItems}>Remove All Items</button>
      </ul>
    );
  }
}

export default ItemList;
