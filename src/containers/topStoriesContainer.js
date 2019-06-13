import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../components/Item';

class TopStoriesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
	        page: 0,
	        totalPosts: 0,
	        totalPages: 0
        };
        this.paginatePosts = this.paginatePosts.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }

	paginatePosts(){
	    let ids = this.props.postIds.slice(this.state.page * 25, (this.state.page + 1) * 25);
        return ids;
    }

	nextPage(e){
        e.preventDefault();
        this.setState(({ page }) => ({ page: page + 1 }))
		this.paginatePosts()
	}

	previousPage(e){
        e.preventDefault();
        this.setState(({ page }) => ({ page: page - 1 }))
		this.paginatePosts();
	}
    componentWillReceiveProps(){
	    this.setState({
            totalPosts: this.props.postIds.length,
	        totalPages: Math.ceil(this.props.postIds.length / 25)
        })
    }

    render() {
            let ids = this.paginatePosts()
            let fetching = this.props.dataFetch
            return (       
            <div>
                { !fetching && <div>
                    <ul className="posts">
                        {ids && ids.map((id) => ( 
                            <Item key={id} itemId={id} id="post" />
                        ))}
                    </ul>

                    <div>
                        <ul className="pagination">
                            { this.state.page > 0 &&
                            <li >
                                {/* onClick="top.previousPage()" */}
                                <a href="" onClick={this.previousPage} >
                                    Previous
                                </a>
                            </li>}
                            { this.state.page < this.state.totalPages - 1 &&
                            <li >
                                {/*onClick="top.nextPage()"  */}
                                <a href="" onClick={this.nextPage}>
                                    Next
                                </a>
                            </li>}
                        </ul>

                        <div></div>
                    </div>
                </div>}
            </div>
            )
        
    }
}


const mapStateToProps = (state) => {
    return {
        postIds: state.postIds,
        dataFetch: state.dataFetch
    }
  }

export default connect(mapStateToProps)(TopStoriesContainer)