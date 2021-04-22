import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from './styles';
import VideoService from '../../services/VideoService';



export default function SearchAppBar() {
  const classes = useStyles();
  const [searchKey, setSearch] = useState("");
  
  const dispatch = useDispatch();
  const videoInfo = useSelector((state) => state.playerData);
  useEffect(() => {
    console.log('onload', videoInfo);
    VideoService.loadVideos(dispatch);
  }, [dispatch])
  const handleSearch = (value) => {
    console.log(value);
    setSearch(value);
    console.log('search', videoInfo);
    window.scroll({top:150,behavior:'smooth'})

  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navRoot}>
        <Toolbar>
        <div className={classes.title}>
            <a aria-current="page" className={classes.sonyActive} href="/">
              <img
                src="https://origin-staticv2.sonyliv.com/UI_icons/sonyliv_new_revised_header_logo.png"
                className={classes.sonyLogo}
                alt="Sony-liv"
              />
            </a>
          </div>
          <div className={classes.titleHomelogo}>
            <a aria-current="page" className={classes.sonyActive} href="/">
              <img
                src="https://origin-staticv2.sonyliv.com/UI_icons/sonyliv_new_revised_header_logo.png"
                className={classes.sonyLogo}
                alt="Sony-liv"
              />
            </a>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              value={searchKey}
              onChange={(event) => {
                //adding the onChange event
                handleSearch(event.target.value);
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
