import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../util/firebase';
import Spinner from './common/Spinner';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const Article = props => (
    <tr>
        <td>{props.article.username}</td>
        <td>{props.article.description}</td>
        <td>{props.article.article}</td>

        <td>
            <Link className="btn btn-success " style={{ width: "100px", marginRight: "10px" }} to={"/edit/" + props.articleid}><FaEdit size={20} />edit</Link>   <button className="btn btn-danger " style={{ width: "100px" }} onClick={() => { props.deleteArticle(props.article.id) }}><FaTrashAlt size={20} /> delete</button>
        </td>
    </tr>


)

export default class ArticlesList extends Component {
    constructor(props) {
        super(props);

        this.deleteArticle = this.deleteArticle.bind(this)

        this.state = { articles: [], loading: true };
    }

    componentDidMount() {

        const articleRef = firebase.database().ref('Article');
        articleRef.on('value', (snapshot) => {
            const articles = snapshot.val();


            const articleList = [];
            for (let id in articles) {
                articleList.push({ id, ...articles[id] });
            }


            console.log(articleList)
            this.setState({ articles: articleList, loading: false })
            console.log(articles)




        });
    }

    deleteArticle(id) {

        const articleRef = firebase.database().ref('Article').child(id);
        articleRef.remove();

        this.setState({
            articles: this.state.articles.filter(el => el.id !== id)
        })
    }

    ArticleList() {
        return this.state.articles.map(currentarticle => {
            return <Article article={currentarticle} articleid={currentarticle.id} deleteArticle={this.deleteArticle} key={currentarticle.id} />;
        })
    }



    render() {

        return (

            <div className="container">
                <br /><br /><br /><br />
                {this.state.loading ? <div>
                    <Spinner />
                </div> :
                    <div style={{ outlineStyle: "solid", width: "900px", height: "80%", padding: "10px 30px" }} ><h3>All Added Articles</h3>
                        <table className="table table-bordered" style={{ border: " 1px black" }}>
                            <thead className="thead-light">
                                <tr>
                                    <th>Author</th>
                                    <th>Description</th>
                                    <th>Article</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.ArticleList()}
                            </tbody>
                        </table></div>}
            </div>


        )
    }
}