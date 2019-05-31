export const fetchPostData = () => {
    return dispatch => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json', { method: 'GET' })
        .then(response => response.json())
        .then(postData => {
            dispatch(getTopStories(postData))
            
        })
    }    
}

const getTopStories = postData => {
    return {
        type: 'GET_POST_DATA',
        postData
    };
}