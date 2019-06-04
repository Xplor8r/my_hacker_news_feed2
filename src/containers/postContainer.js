import React, { Component } from 'react';
import  { Link } from 'react-router-dom'
import Item from '../components/Item'

class Post extends Component {

    render(){
        let data = this.props.location.state.data
        // console.log(data)
        return (
            <div>
                {data && <div className="post">
                    <Link to={data.url} className="post__title" target="_blank" rel="noopener noreferrer">
                        { data.title }
                    </Link>
                    <Link to={data.url} className="post__description">
                        { data.descendants } comments { data.score } points
                    </Link>

                    <ul className="comments">
                        {data.kids.map((id) => (
                            <Item key={id} itemId={id} id="comment"/>  
                        ))}
                    </ul>
                </div>}
            </div>
        )
    }
}

export default Post