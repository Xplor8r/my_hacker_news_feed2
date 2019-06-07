import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../components/Item';

class TopStoriesContainer extends Component {

	// this.page = 0;
	// this.totalPosts = posts.data.length;
	// this.totalPages = Math.ceil(this.totalPosts / 25);

	// this.paginatePosts =  () => {
	// 	this.posts = posts.data.slice(this.page * 25, (this.page + 1) * 25);
	// };

	// this.nextPage = () => {
	// 	this.page++;
	// 	this.paginatePosts()
	// };

	// this.previousPage = () => {
	// 	this.page--;
	// 	this.paginatePosts();
	// };

	// this.paginatePosts();

    render() {
        let ids = this.props.postIds.slice(0,25)
        // console.log(this.state)
        if (ids) {
            return (
                <div>
                    <ul className="posts">
                        {/* ng-repeat="post in top.posts" */}
                        {ids && ids.map((id) => (
                                // <li>{id}</li>   
                                <Item key={id} itemId={id} id="post" />
                        ))}
                        {/* <li >
                            <item id="post"></item> 
                        </li> */}
                    </ul>
                    <div>
                        <ul className="pagination">
                            {/* ng-if="top.page > 0" */}
                            <li >
                                {/* onClick="top.previousPage()" */}
                                <a href="/" >
                                    Previous
                                </a>
                            </li>
                            {/* ng-if="top.page < top.totalPages - 1" */}
                            <li >
                                {/*onClick="top.nextPage()"  */}
                                <a href="/" >
                                    Next
                                </a>
                            </li>
                        </ul>

                        <div></div>
                    </div>
                </div>
            )
        }
    }
}


const mapStateToProps = (state) => {
    return {
        postIds: state.postIds,
    }
  }

export default connect(mapStateToProps)(TopStoriesContainer)