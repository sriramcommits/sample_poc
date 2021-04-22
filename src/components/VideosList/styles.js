import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {

    },  
    icon: {
        cursor: "pointer"
    },
    thumb: {
        width: "90%",
    },
    title: {

        textAlign: "center",
        padding: "10px 20px",
        textDecoration: "none",
        color: "grey",
        fontFamily: "sans-serif"
    },
    rowHead: {
        color: "white",
        paddingLeft: "30px",    
        fontFamily: "cursive"
    },
    load: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "150px"
    }

}));


export default useStyles;