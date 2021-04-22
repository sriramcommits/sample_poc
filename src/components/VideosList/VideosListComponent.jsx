import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loader from '../../asserts/loader.gif';
import VideoService from '../../services/VideoService';
import useStyles from './styles'
import './globalstyle.css'

export default function VideosListComponent() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const videoInfo = useSelector((state) => state.playerData);
    useEffect(() => { VideoService.loadVideos(dispatch); }, [dispatch]);
    const errorContainer = () => { return <div>ERROR IN API</div>; }
    const showLoader = () => { return <div><img src={loader} className={classes.load} alt="loading ..." title="loading ..." /></div>; }
    const handleChange = (value) => {
        dispatch({ type: 'SET_VIDEOS', payload: [value], id: value.video_id });
        window.scroll({ top: 0, behavior: 'smooth' })
    }
    const renderData = (videoInfo) => {
        return videoInfo.error ? errorContainer() :
            <div className={classes.container}>
                <div>
                    <h2 className={classes.rowHead}>New On LIV</h2>
                    <div className='row-data'>
                        {videoInfo.videosList.map((video, index) =>
                            <div key={index} className="child">
                                <a aria-current="page" key={video.video_id} onClick={() => { handleChange(video) }} className={classes.icon} >
                                    <img
                                        className={classes.thumb}
                                        key={video.video_id}
                                        src=
                                        {video.video_thumbnail}
                                        alt="Sony-liv"
                                    />
                                    <div className={classes.title}>
                                        <h4>{video.videoName}</h4>
                                        {/* <p>{video.video_desc}</p> */}
                                    </div>
                                </a>
                            </div>)}
                    </div>
                </div>

                <div>
                    <h2 className={classes.rowHead}>LIV Originals</h2>
                    <div className='row-data'>
                        {videoInfo.videosList.map((video, index) =>
                            <div key={index} className="child">
                                <a aria-current="page" key={video.video_id} onClick={() => { handleChange(video) }} className={classes.icon} >
                                    <img
                                        className={classes.thumb}
                                        key={video.video_id}
                                        src=
                                        {video.video_thumbnail}
                                        alt="Sony-liv"
                                    />
                                    <div className={classes.title}>
                                        <h4>{video.videoName}</h4>
                                        {/* <p>{video.video_desc}</p> */}
                                    </div>
                                </a>
                            </div>)}
                    </div>
                </div>
                <div>
                    <h2 className={classes.rowHead}>Lasest Episodes</h2>
                    <div className='row-data'>
                        {videoInfo.videosList.map((video, index) =>
                            <div key={index} className="child">
                                <a aria-current="page" onClick={() => { handleChange(video) }} key={video.video_id} className={classes.icon} >
                                    <img
                                        className={classes.thumb}
                                        key={video.video_id}
                                        src=
                                        {video.video_thumbnail}
                                        alt="Sony-liv"
                                    />
                                    <div className={classes.title}>
                                        <h4>{video.videoName}</h4>
                                        {/* <p>{video.video_desc}</p> */}
                                    </div>
                                </a>
                            </div>)}
                    </div>
                </div>
                <div>
                    <h2 className={classes.rowHead}>TV Shows</h2>
                    <div className='row-data'>

                        {videoInfo.videosList.map((video, index) =>
                            <div key={index} className="child">
                                <a aria-current="page" onClick={() => { handleChange(video) }} key={video.video_id} className={classes.icon} >
                                    <img
                                        className={classes.thumb}
                                        key={video.video_id}
                                        src=
                                        {video.video_thumbnail}
                                        alt="Sony-liv"
                                    />
                                    <div className={classes.title}>
                                        <h4>{video.videoName}</h4>
                                        {/* <p>{video.video_desc}</p> */}
                                    </div>
                                </a>
                            </div>)}
                    </div>

                </div>
            </div>
    }
    return (
        videoInfo.loading ? showLoader() : renderData(videoInfo)
    )
}
