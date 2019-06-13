import React, { Component } from 'react';
import Item from '../components/Item'

class PostContainer extends Component {

    render(){
        let data = this.props.location.state.data
        if (data) {
            return (
                <div className="post">
                    <a href={data.url} className="post__title" rel="noopener noreferrer" target="_blank">
                        { data.title }
                    </a>
                    <p className="post__description">
                        { data.descendants } comments { data.score } points
                    </p>

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