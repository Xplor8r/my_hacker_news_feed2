import React from 'react';

const Comment = () => {

    return (

        // ng-if="item.data"
        <div className="item" >
        {/* ng-switch="item.data.type" */}
            <div >
                {/* ng-switch-when="comment" */}
                <div >
                    <div className="item__author">
                    {/* ui-sref="user({id: item.data.by })" */}
                        <a >
                            {/* {{ item.data.by }} */}
                        </a>
                        {/* {{ (item.data.time * 1000) | date: 'short'}} */}
                    </div>
                    {/* ng-bind-html="item.data.text" */}
                    <div ></div>

                    <ul className="comments">
                    {/* ng-repeat="comment in item.data.kids" */}
                        <li >
                            <item id="comment"></item>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
        
export default Comment