const postIds = (state = [], action) => {
    switch (action.type) {
        case "GET_POST_IDS":
            return action.postIds;
        default:
            return state
    }
}
export default postIds