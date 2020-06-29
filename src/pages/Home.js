import React, { Component } from 'react';
import axios from 'axios';


class Home extends Component {
    state = { 
        posts: []
     }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data)
            this.setState({
                posts: res.data.slice(0, 5)
            })
            
        }) //action asynchrone
    }

    render() { 

 //ici!!!!
 let postsList = this.state.posts.map(post => {
    return <article className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
    </article>
  })

        return ( 
            <div className="Home">
                <h1>Bienvenue sur ma page</h1>            
                   
                    {postsList}
            </div>
         );
    }
}
 
export default Home;