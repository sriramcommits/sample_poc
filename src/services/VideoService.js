import Utilities from './Utilities';

const VideoService = {
    loadVideos(dispatch) {
        dispatch({ type: 'LOAD_VIDEOS', payload: null })
        Utilities.getMethod().then(videos => {
            dispatch({ type: 'GET_VIDEOS', payload: videos })
        }).catch(() => {
            dispatch({ type: 'ERROR_VIDEOS', payload: null })
        }).finally(() => { })
    }
}
export default VideoService;