
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    navRoot: {
        backgroundColor: "rgb(234 233 241 / 18%)"
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    sonyLogo: {
        width: "2.3em"
    },
    titleHomelogo: {
        flexGrow: 1,
        display: "none",
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            display: "block"
        },
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },

    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto"
        }
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch"
            }
        }
    }
}));

export default useStyles;



// import React, { Component } from 'react';
// import videojs from 'video.js';
// import { sendData } from '../../analytics/sendData';

//  class Video360Player extends Component {
//     componentDidMount() {
//         // instantiate Video.js
//         const videoJsOptions = {
//             autoplay: true,
//             controls: true,
//             sources: [{
//               src: this.props.videoUrl,
//               type: 'video/mp4'
//             }]
//           }
//         this.player = videojs(this.videoNode, videoJsOptions,this.props, function onPlayerReady() {
//           console.log('onPlayerReady', this)
//         });
//       }
    
//       // destroy player on unmount
//       componentWillUnmount() {
//         if (this.player) {
//           this.player.dispose()
//         }
//       }
    
//       // wrap the player in a div with a `data-vjs-player` attribute
//       // so videojs won't create additional wrapper in the DOM
//       // see https://github.com/videojs/video.js/pull/3856
//       render() {
//         return (
//           <div> 
//             <div data-vjs-player>
//               <video ref={ node => this.videoNode = node } className="video-js"></video>
//             </div>
//           </div>
//         )
//       }}
// export default Video360Player