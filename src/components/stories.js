import React from 'react';

const Story = () => {

    return (
        // ng-if="item.data"
        <div className="item" >
        {/* ng-switch="item.data.type" */}
            <div >
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

export default Story