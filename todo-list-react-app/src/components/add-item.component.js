import React, { Component } from 'react';

class AddItem extends Component {
  render() {
    const {itemName, getItemName, addItem, editItem} = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={addItem}>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Add a To-Do Item Here..." value={itemName} onChange={getItemName} />
          </div>
          <button type="submit" className={editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}>
            {editItem ? 'Edit Item' : 'Add Item'}
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;
