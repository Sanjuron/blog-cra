import React, { Component } from 'react';
import axios from "axios";

class Articles extends Component {
    state = { 
        posts: []
     }

    

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data)
            this.setState({
                posts: res.data
            })
            
        }) //action asynchrone
    }



    render() { 

        let postsList = this.state.posts.map(post => {
            return <article className="post">
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
            </article>
    });
    
        return ( 
            <div className="articles">
                <h1>Tous les articles</h1>
                {postsList}
            </div>
         );
    }
}
 
export default Articles;