import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import firebase from '../util/firebase';

export default class CreateArticle extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeArticle = this.onChangeArticle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      article: '',


    }
  }


  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeArticle(e) {
    this.setState({
      article: e.target.value
    })
  }



  onSubmit(e) {
    e.preventDefault();
    const articleRef = firebase.database().ref('Article');

    const article = {
      username: this.state.username,
      description: this.state.description,
      article: this.state.article,

    }



    articleRef.push(article);


    window.location = '/';
  }

  render() {
    return (
      <div className="container">
        <br /><br /><br />
        <div style={{ outlineStyle: "solid", width: "800px", height: "100%", padding: "10px 30px" }}>
          <h3>Create New Article</h3>
          <form onSubmit={this.onSubmit}>

            <div className="form-group" >
              <label>Author Name: </label>
              <input type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="form-group">
              <label>Description: </label>
              <input type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
            </div>
            <div className="form-group">
              <label>Your Article: </label>
              <input type="text"
                required
                className="form-control"
                value={this.state.article}
                onChange={this.onChangeArticle}
              />
            </div>



            <div className="form-group">
              <input type="submit" value="Create Article" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}