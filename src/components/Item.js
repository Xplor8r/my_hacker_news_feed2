import React, { Component} from 'react';
import  { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            redirectToPost: false,
            fetchPost: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.fetchPost = this.fetchPost.bind(this);
    }

    fetchPost(id) {
        return (
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then(res => res.json())
                .then(postData=>{
                    this.setState({
                        data: postData,
                        fetchPost: true
                    })
                })
        )
    }
    
    componentWillMount(){
        this.fetchPost(this.props.itemId)
    }

    handleClick(){
        this.setState({redirectToPost: true});
    }

    render(){
        if (this.state.redirectToPost) {
            return (
                <Redirect to={{
                    pathname: "/post/" + this.state.data.id,
                    state: {data: this.state.data}
                }}/>
            )
        }
        if (this.state.fetchPost) {
            let data = this.state.data
            return (
                <li>
                    {data.type === "comment" ? <div className="item">
                        <div class="item__author">
                            <a>
                                { data.by } 6/5/19 7:29 PM
                            </a>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: data.text}}></div>
                        
                        <ul class="comments">
                            {data.kids && data.kids && data.kids.map((id) => (
                                <Item key={id} itemId={id} id="comment"/>  
                            ))}
                        </ul>
                    </div>
                    :<div className="item">
                        <Link to={data.url} className="item__title" target="_blank" rel="noopener noreferrer">
                            { data.title } - 6/5/19 7:29 PM
                        </Link> 
                        <p>	{ data.score } points by { data.by }</p>
                        <Link to="" className="item__description" onClick={this.handleClick}>
                            { data.descendants } comments 
                        </Link>
                    </div>}
                </li>
            )
        } else {
            return (
                <li className="item" />
            )
        }
    }
}
        
const mapStateToProps = (state) => {
    return {
        dataFetch: state.dataFetch
    }
}

  
export default connect(mapStateToProps)(Item);
        
