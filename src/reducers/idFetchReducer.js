const idFetch = (state = true, action) => {
    switch (action.type) {
        case 'END_DATA_FETCH':
            return false
        default:
            return state
    }
}
  
export default idFetch