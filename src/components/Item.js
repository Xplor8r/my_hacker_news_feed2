import React, { Component} from 'react';
import  { Redirect, Link } from 'react-router-dom'
import { fetchPost } from '../actions/posts'
import { connect } from 'react-redux';

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
        this.props.fetchPost(this.props)
    }

    handleClick(){
        this.setState({redirectToPost: true});
    }

    render(){
        let data = this.state.data
        // let { dataFetch } = this.props
        // console.log(data)
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
                </li>
            )
        } else {
            return (
                <li>
                    <div className="item">
                        <Link to={data.url} className="item__title" target="_blank" rel="noopener noreferrer">
                            { data.title } - 6/5/19 7:29 PM
                        </Link> 
                        <p>	{ data.score } points by { data.by }</p>
                        <Link to="" className="item__description" onClick={this.handleClick}>
                            { data.descendants } comments 
                        </Link>
                    </div>
                </li>
            )
        }
    }identifier
}
        
const mapStateToProps = (state) => {
    return {
        postData: state.postData,
        dataFetch: state.dataFetch
    }
  }
  const mapDispatchToProps = (dispatch, props) => {
        return {
            fetchPost: () => dispatch(fetchPost(props)),
            
        }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Item);