import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(https://source.unsplash.com/random)`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: { height: "300px", fontSize: "3rem" },
  },
  semanas: {
    paddingTop: theme.spacing(3),
  },
  semanasTitulo: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
    margin: "10px",
  },
  media: {
    height: 240,
  },
  cardAction: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  disertante: {
    display: "flex",
  },
}));

export default useStyles;
