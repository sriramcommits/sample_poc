const initialState = {
    videosList: [],
    loading: true,
    error: false,
    playerVideo: [],
    setVideoId: 1
};
function usersReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_VIDEOS':
            return { ...state, videosList: [], error: false, loading: true }
        case 'GET_VIDEOS':
            return { ...state, videosList: action.payload, error: false, loading: false, setVideoId: 1 }        
        case 'SET_VIDEOS':
                return { ...state, playerVideo: action.payload.length == 0 ? initialState.videosList.filter((video) => { return video.video_id == 1}): action.payload, error: false, loading: false, setVideoId: action.id }
        case 'ERROR_VIDEOS':
            return { ...state, videosList: [], error: true, loading: false }
        default:
            return state;
    }
};
export default usersReducer;