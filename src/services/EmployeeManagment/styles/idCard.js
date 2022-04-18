import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    margin: 'auto',
    width: '60vw',
  },
  content: {
    padding: 20,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Arial, Helvetica, sans-serif",

  },
  cardMediaCss: {
    background: 'linear-gradient(45deg, #280071 10%, #c42053 90%)',
    height: 300,
    paddingTop: 20,
  },
  cardMediaCss1: {
    background: 'linear-gradient(45deg, #280071 10%, #c42053 90%)',
    // height: 300,
    paddingTop: 20,
  },
  right: {
    marginTop: '-170px',
    marginLeft: '300px',
    marginBottom: '20px',
    width: '30vw',
    padding: 5,

    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
  },
  avatar: {
    width: 120,
    height: 120,
    border: "2px solid #fff",
    marginLeft: 70,
    marginTop: 70
  },
  details: {
    padding: 8,

  },
  editoption: {
    marginLeft: 150,
    marginTop: -30,
  },
}));
export default useStyles;
