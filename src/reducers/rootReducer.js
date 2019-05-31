import { combineReducers } from 'redux'
import postData from './postDataReducer'
import postIds from './postIdsReducer'

const rootReducer = combineReducers({
    postIds,
    postData
})

export default rootReducer