import React, { Component } from 'react';
import { connect } from 'react-redux';
import Story from '../components/story';
import { fetchPost } from '../actions/posts'

// function TopStoriesController(posts) {
// 	let ctrl = this;

// 	ctrl.page = 0;
// 	ctrl.totalPosts = posts.data.length;
// 	ctrl.totalPages = Math.ceil(ctrl.totalPosts / 25);

// 	ctrl.paginatePosts =  () => {
// 		ctrl.posts = posts.data.slice(ctrl.page * 25, (ctrl.page + 1) * 25);
// 	};

// 	ctrl.nextPage = () => {
// 		ctrl.page++;
// 		ctrl.paginatePosts()
// 	};

// 	ctrl.previousPage = () => {
// 		ctrl.page--;
// 		ctrl.paginatePosts();
// 	};

// 	ctrl.paginatePosts();
// }
class TopStoriesContainer extends Component {

    render() {
        let ids = this.props.postIds;
        return (
            <div>
                <ul className="posts">
                    {/* ng-repeat="post in top.posts" */}
                    {ids.map((id) => (
                            // <li>{id}</li>   
                            <Story key={id} story={this.props.fetchPost(id)} />
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


const mapStateToProps = (state) => {
    return {
        postIds: state.postIds,
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: () => dispatch(fetchPost()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopStoriesContainer)