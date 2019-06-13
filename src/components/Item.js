import React, { Component} from 'react';
import  { Redirect, Link } from 'react-router-dom'

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

    formatDate(unix) {
        let a = new Date(unix * 1000);
        let months = ['Jan','Feb','Mar','Apr','May','Jun',
            'Jul','Aug','Sep','Oct','Nov','Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
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
                            <p>
                                <strong>{ data.by } - { this.formatDate(data.time) }</strong>
                            </p>
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
                            { data.title } - { this.formatDate(data.time) }
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
 
export default Item        
