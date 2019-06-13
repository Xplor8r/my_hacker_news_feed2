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
