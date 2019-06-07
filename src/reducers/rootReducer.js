import { combineReducers } from 'redux'
import postIds from './postIdsReducer'
import idFetch from './idFetchReducer'

const rootReducer = combineReducers({
    postIds,
    idFetch
})

export default rootReducer