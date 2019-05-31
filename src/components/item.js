import React from 'react';

const Item = () => {

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
                {/* ng-switch-when="story" */}
                <div >
                    {/* href="{{ item.data.url }}" */}
                    <a className="item__title" href="" target="_blank">
                        {/* {{ item.data.title }} - {{ (item.data.time * 1000) | date: 'short'}} */}
                    </a> 
                    {/* <p>	{{ item.data.score }} points by {{ item.data.by }}</p> */}
                    {/* ui-sref="post({id: item.data.id})" */}
                    <a className="item__description" >
                        {/* {{ item.data.descendants }} comments  */}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Item