import React, { Component } from 'react';
import { connect } from 'react-redux';
import Story from '../components/story';
import { fetchPost } from '../actions/posts'

class TopStoriesContainer extends Component {

    render() {
        let ids = this.props.postIds.slice(0,25)
        return (
            <div>
                <ul className="posts">
                    {/* ng-repeat="post in top.posts" */}
                    {ids && ids.map((id) => (
                            // <li>{id}</li>   
                            <Story key={id} storyId={id} />
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
        postData: state.postData
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: () => dispatch(fetchPost()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopStoriesContainer)