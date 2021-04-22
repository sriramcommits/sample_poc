import {makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    container: {
        display: "flex",
        alignItems: "center"
    },
    player: {
        display: "block",
        marginRight: "auto",
        marginLeft: "auto"
    },
    load: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
    }

}));



export default useStyles;



















// var player;

// function videoHTML(videoNumber) {
// return '<video id="video-js" class="video-js vjs-default-skin" poster="img/' + videoNumber + '.jpg" preload="auto" controls="controls" width="600" height="300" data-setup="\'{&quot;example_option&quot;:true}\'">' +
// '\t<source src="videos/' + videoNumber + '.mp4" type="video/mp4" /> \n' +
// '\t\t<track id="video-srt" kind="captions" src="subs/' + videoNumber + '.srt" srclang="it" label="Italian" default="" />\n ' +
// '\t\t To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>\n' +'</video>'; } $("div.video-thumbnail").click(function () { $("div.video-thumbnail").css("background-color", "white"); $(this).css("background-color", "red"); var videoNumber = $(this).data("video"); player.dispose(); $('div.video-background').html(videoHTML(videoNumber)); player = videojs('#video-js'); }); $(document).ready(function () { $('div.video-background').html(videoHTML(1)); player = videojs('#video-js'); });