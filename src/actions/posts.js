export const fetchPostIdList = () => {
    return dispatch => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json', { method: 'GET' })
        .then(response => response.json())
        .then(postIds => {
            dispatch(getTopStories(postIds))

        })
    }    
}

const getTopStories = postIds => {
    return {
        type: 'GET_POST_IDS',
        postIds
    };
}

export const fetchPost = (id) => {
    return dispatch => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, { method: 'GET' })
        .then(response => response.json())
        .then(postData => {
            dispatch(getPost(postData))

        })
    }    
}

const getPost = postData => {
    return {
        type: 'GET_POST_DATA',
        postData
    };
}