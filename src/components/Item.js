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

    handleClick(e){
        e.preventDefault();
        this.setState({redirectToPost: true});
    }

    formatDate(unix) {
        let a = new Date(unix * 1000);
        let year = a.getFullYear().toString().substr(-2);
        let month = a.getMonth() + 1;
        let date = a.getDate();
        let hour = a.getHours() > 12 ? a.getHours() - 12 : a.getHours();
        let min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
        let am_pm = a.getHours() >= 12 ? "PM" : "AM";
        let time = month + '/' + date + '/' + year + ' ' + hour + ':' + min + ' ' + am_pm;
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
                        <div className="item__author">
                            <p>
                                <strong>{ data.by } - { this.formatDate(data.time) }</strong>
                            </p>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: data.text}}></div>
                        
                        <ul className="comments">
                            {data.kids && data.kids && data.kids.map((id) => (
                                <Item key={id} itemId={id} id="comment"/>  
                            ))}
                        </ul>
                    </div>
                    :<div className="item">
                        <a href={data.url} className="item__title" rel="noopener noreferrer" target="_blank">
                            { data.title } - { this.formatDate(data.time) }
                        </a> 
                        <p>	{ data.score } points by { data.by }</p>
                        <Link to="/" className="item__description" onClick={this.handleClick}>
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
