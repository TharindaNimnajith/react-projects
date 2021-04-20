import React, { Component } from 'react';
import firebase from '../util/firebase';
import Spinner from './common/Spinner';

export default class EditArticle extends Component {
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
      loading: true
    }
  }

  componentDidMount() {
    console.log(this.props.match.params.id)

    const articleRef = firebase.database().ref('Article').child((this.props.match.params.id));
    articleRef.on('value', (snapshot) => {
      const articles = snapshot.val();

      this.setState({ username: articles.username, description: articles.description, article: articles.article, loading: false })



    });




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
    const articleRef = firebase.database().ref('Article').child(this.props.match.params.id);

    const article = {
      username: this.state.username,
      description: this.state.description,
      article: this.state.article

    }

    console.log(article);

    articleRef.update(article);


    window.location = '/';
  }

  render() {
    return (
      <div className="container">
        <br /><br /><br />
        {this.state.loading ? <div>
          <Spinner />
        </div> : <div style={{ outlineStyle: "solid", width: "800px", height: "100%", padding: "10px 30px" }} >
            <h3>Edit Article</h3>
            <form onSubmit={this.onSubmit}>

              <div className="form-group">
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
                <input type="submit" value="Edit Article" className="btn btn-primary" />
              </div>
            </form></div>}
      </div>
    )
  }
}