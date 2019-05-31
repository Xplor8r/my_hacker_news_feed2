import React, { Component } from 'react';
import { connect } from 'react-redux';

class TopStoriesContainer extends Component {

    render() {
        console.log(this.props.postData)
        return (
            <div>
                <ul className="posts">
                    {/* ng-repeat="post in top.posts" */}
                    <li >
                        {/* <item id="post"></item> */}
                    </li>
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
        postData: state.postData,
    }
  }
  
export default connect(mapStateToProps)(TopStoriesContainer)