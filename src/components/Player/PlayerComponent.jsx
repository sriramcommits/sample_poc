import VideoPlayer from 'react-video-js-player'
import useStyles from './styles'
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VideoService from '../../services/VideoService';
import loader from '../../asserts/loader.gif';
import videojs from 'video.js';
import { useStore } from 'react-redux'


export default function PlayerComponent() {
    const classes = useStyles();
    // const dispatch = useDispatch();
    const videoRef = useRef();
    const videoInfo = useSelector((state) => state.playerData);
    // const [videoSrc, setVideoUrl] = useState({})

    // useEffect(() => {
    //     // VideoService.loadVideos(dispatch);
    //     VideoService.loadVideos(dispatch) 
    //     setVideoUrl(loadVideo(videoInfo));
    // }, [dispatch]);
    const errorContainer = () => { return <div>ERROR IN PLAYER</div>; }
    const showLoader = () => { return <div style={{ display: "none" }}><img src={loader} className={classes.load} alt="loading ..." title="loading ..." /></div>; }
    console.log('========', videoRef);
    const renderData = (videoInfo) => {
        return (videoInfo.error ? errorContainer() :
            <div className={classes.container}>

                {videoInfo.videosList.filter((videoJs) => { return videoJs.video_id == videoInfo.setVideoId }).map((video, index) =>
                    <VideoPlayer
                        ref={videoRef}
                        key={index}
                        src={video.url}
                        poster={video.video_thumbnail}
                        width="820"
                        height="480"
                        autoplay={true}
                        muted={true}
                        className={classes.player}
                    />
                    )}

            </div>
        )
    };

    return (
        videoInfo.loading ? showLoader() : renderData(videoInfo)
    )
}
