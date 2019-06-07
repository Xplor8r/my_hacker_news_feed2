import { beginDataFetch, endDataFetch } from './dataFetch'

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

export const fetchPost = (props) => {
    return dispatch => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${props.itemId}.json`)
            .then(res => res.json())
            .then(postData => {
                dispatch(beginDataFetch())
                dispatch(getPost(postData))
                dispatch(endDataFetch())
            },
        )
    }    
}

const getPost = postData => {
    return {
        type: 'GET_POST_DATA',
        postData
    };
}