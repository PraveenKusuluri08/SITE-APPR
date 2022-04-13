import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    // width: 400,
    // height: 450,
    margin: "auto",
  },
  content: {
    padding: 20,
    margin: "80px 0 0 0px",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  cardMediaCss: {
    background: "linear-gradient(45deg, #280071 10%, #c42053 90%)",
    height: 230,
    paddingTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    border: "2px solid #fff",
    margin: "0px 265px 0 auto",
    "& > img": {
      margin: 0,
    },
  },
  details: {
    padding: 8,
  },
  editoption: {
    margin: "-120px 0 0 100px",
  },
}));

export default useStyles;
