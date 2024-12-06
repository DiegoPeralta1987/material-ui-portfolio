import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../logo.png";
import VisitCounter from "./VisitCounter";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="ING. DIEGO PERALTA" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["ING. DIEGO PERALTA"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "React, Redux, Angular, Ruby",
            "Backend Developer",
            "Nodejs, Spring Boot, PHP, Python",
            "Base de datos",
            "Postgres, Mysql, Mongo, SqlServer",
            "App Developer",
            "Android, Flutter, Ionic",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
       {/* Contador de visitas */}
       <VisitCounter />
    
    </Box>
  );
};

export default Header;
