import React from 'react';

const Post = () => {

    return (
        // ng-if="post.data"
        <div className="post" >
        {/* href="{{ post.data.url }}" target="_blank" */}
            <a className="post__title" href="" target="_blank">
                {/* {{ post.data.title }} */}
            </a>
            <a className="post__description">
                {/* {{ post.data.descendants }} comments {{ post.data.score }} points */}
            </a>

            <ul className="comments">
            {/* ng-repeat="comment in post.data.kids" */}
                <li >
                    <item id="comment"></item>
                </li>
            </ul>
        </div>
    )
}

export default Post