import { combineReducers } from 'redux'
import postIds from './postIdsReducer'
import dataFetch from './dataFetchReducer'
import postData from './postDataReducer'

const rootReducer = combineReducers({
    postIds,
    postData,
    dataFetch
})

export default rootReducer