import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'react-uuid';

import AddItem from './components/add-item.component';
import ItemList from './components/item-list.component';

class App extends Component {
  state = {
    itemsArray: [],
    itemId: uuid(),
    itemName: '',
    editItem: false
  };

  getItemName = (e) => {
    this.setState({
      itemName: e.target.value
    });
  };

  addItem = (e) => {
    e.preventDefault();

    const addedItem = {
      itemId: this.state.itemId,
      itemName: this.state.itemName
    };

    const Items = [...this.state.itemsArray, addedItem];
    const ItemsInReverse = Items.reverse();

    this.setState({
      itemsArray: ItemsInReverse,
      itemName: '',
      itemId: uuid(),
      editItem: false
    });
  };

  removeAllItems = () => {
    this.setState({
      itemsArray: []
    });
  };

  deleteItem = itemId => {
    const otherItems = this.state.itemsArray.filter(item => item.itemId !== itemId);
    this.setState({
      itemsArray: otherItems
    });
  };

  editItem = itemId => {
    const otherItems = this.state.itemsArray.filter(item => item.itemId !== itemId);
    const editingItem = this.state.itemsArray.find(item => item.itemId === itemId);
    this.setState({
      itemsArray: otherItems,
      itemName: editingItem.itemName,
      editItem: true,
      itemId: itemId
    });
  };

  completeItem = itemId => {
    const completingItem = this.state.itemsArray.find(item => item.itemId === itemId);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-center">To-Do List</h3>
            <AddItem itemName={this.state.itemName} getItemName={this.getItemName} addItem={this.addItem} editItem={this.state.editItem} />
            <ItemList itemsArray={this.state.itemsArray} removeAllItems={this.removeAllItems} deleteItem={this.deleteItem} editItem={this.editItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
