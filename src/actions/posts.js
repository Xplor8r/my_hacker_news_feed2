import { beginDataFetch, endDataFetch } from './dataFetch'

export const fetchPostIdList = () => {
    return dispatch => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json', { method: 'GET' })
        .then(response => response.json())
        .then(postIds => {
            dispatch(beginDataFetch())
            dispatch(getTopStories(postIds))
            dispatch(endDataFetch())
        })
    }    
}

const getTopStories = postIds => {
    return {
        type: 'GET_POST_IDS',
        postIds
    };
}
