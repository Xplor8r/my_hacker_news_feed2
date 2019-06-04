import React, { Component} from 'react';
import  { Redirect, Link } from 'react-router-dom'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            redirectToPost: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentWillMount() {  
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.itemId}.json`)
            .then(res => res.json())
            .then(postData => {
                this.setState({
                    data: postData
                });
            },
        )
    }

    handleClick(){
        this.setState({redirectToPost: true});
    }

    render(){
        let data = this.state.data
        if (this.state.redirectToPost) {
            return (
                <Redirect to={{
                    pathname: "/post/" + this.state.data.id,
                    state: {data: this.state.data}
                }}/>
            )
        }
        if (data.type === "comment") {
            return (
                <li>
                    <div className="item">
                        <div>
                            <div>
                                <div class="item__author">
                                    <p>
                                        { data.by }
                                    </p>
                                    { data.time }
                                </div>
                                <div>{data.text}</div>
                        
                                <ul class="comments">
                                    {/* <li ng-repeat="comment in item.data.kids">
                                        <Item id="comment"/>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            )
        } else {
            return (
                <li>
                    <div className="item">
                        <div>
                            <div>
                                <Link to={data.url} className="item__title" target="_blank" rel="noopener noreferrer">
                                    { data.title } - {data.time}
                                </Link> 
                                <p>	{ data.score } points by { data.by }</p>
                                <Link to="" className="item__description" onClick={this.handleClick}>
                                    { data.descendants } comments 
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
            )
        }
    }
}
        
export default Item