import { combineReducers } from 'redux'
import postIds from './postIdsReducer'
import dataFetch from './dataFetchReducer'

const rootReducer = combineReducers({
    postIds,
    dataFetch
})

export default rootReducer