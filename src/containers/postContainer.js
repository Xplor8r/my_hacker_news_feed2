import React, { Component } from 'react';
import  { Link } from 'react-router-dom'
import Item from '../components/Item'

class PostContainer extends Component {

    render(){
        let data = this.props.location.state.data
        // console.log(data)
        if (data) {
            return (
                <div className="post">
                    <Link to={data.url} className="post__title" target="_blank" rel="noopener noreferrer">
                        { data.title }
                    </Link>
                    <a className="post__description">
                        { data.descendants } comments { data.score } points
                    </a>

                    <ul className="comments">
                        {data.kids && data.kids.map((id) => (
                            <Item key={id} itemId={id} id="comment"/>  
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

export default PostContainer