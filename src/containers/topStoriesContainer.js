import React, { Component } from 'react';


class TopStoriesContainer extends Component {

    render() {
        return (
            <div>
                <ul className="posts">
                    {/* ng-repeat="post in top.posts" */}
                    <li >
                        <item id="post"></item>
                    </li>
                </ul>

                <div>
                    <ul className="pagination">
                        {/* ng-if="top.page > 0" */}
                        <li >
                            <a href="" onClick="top.previousPage()">
                                Previous
                            </a>
                        </li>
                        {/* ng-if="top.page < top.totalPages - 1" */}
                        <li >
                            <a href="" onClick="top.nextPage()">
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

export default TopStoriesContainer