const dataFetch = (state = true, action) => {
    switch (action.type) {
      case 'END_DATA_FETCH':
        return false
      case 'BEGIN_DATA_FETCH':
        return true
      default:
        return state
    }
  }
  
  export default dataFetch