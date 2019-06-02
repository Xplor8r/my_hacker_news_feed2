import React, {Component} from 'react';

class Story extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    
    componentWillMount() {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.storyId}.json`)
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
        return (
            <div>
                <li id="post">
                    {data &&
                    <div className="item">
                        <div>
                            <div>
                                <a className="item__title" href={data.url} target="_blank" rel="noopener noreferrer">
                                    { data.title } - {data.time}
                                </a> 
                                <p>	{ data.score } points by { data.by }</p>
                                <a className="item__description" href={"post/" + data.id }>
                                    { data.descendants } comments 
                                </a>
                            </div>
                        </div>
                    </div>}
                </li>
            </div>
        )
    }
}

export default Story