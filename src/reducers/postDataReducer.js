const postData = (state = [], action) => {
    switch (action.type) {
        case "GET_POST_DATA":
            return action.postData;
        default:
            return state
    }
}
export default postData