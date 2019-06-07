const postData = (state ={data: []}, action) => {
    switch (action.type) {
        case "GET_POST_DATA":
            return {...state, data: action.postData};
        default:
            return state
    }
}
export default postData