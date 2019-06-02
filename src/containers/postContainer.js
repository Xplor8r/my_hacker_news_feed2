import React, { Component } from 'react';
import PostComment from '../components/postComment'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    
    componentWillMount() {
        let id = this.props.match.params.id
        fetch(`https://hacker-news.firebaseio.com/v0/PostComment/${id}.json`)
            .then(res => res.json())
            .then(postData => {
                this.setState({
                    data: postData
                });
            },
        )
    }

    render(){
        let data = this.state.data
        console.log(data)
        return (
            <div>
                {data && <div className="post">
                    <a className="post__title" href={data.url} target="_blank" rel="noopener noreferrer">
                        { data.title }
                    </a>
                    <a className="post__description" href={data.url}>
                        { data.descendants } comments { data.score } points
                    </a>

                    <ul className="comments">
                        {/* {data.kids.map((id) => (
                            <PostComment key={id} storyId={id} />  
                        ))} */}
                    </ul>
                </div>}
            </div>
        )
    }
}

export default Post