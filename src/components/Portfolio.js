import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/flota.png";
import project2 from "../images/app.jpg";
import project3 from "../images/factracion.png";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Control de Flota",
    description: `Este sistema está diseñado para gestionar de manera integral los ingresos y egresos diarios generados por la operación de los vehículos de la empresa. Permite un control detallado de viajes, consumo de combustible, viáticos, pagos de personal detallados y otros gastos asociados, optimizando la administración de recursos y mejorando la eficiencia operativa.`,
    image: project1,
    url: "https://prueba.tiquidevs.click/src/vistas/login.html"
  },
  {
    name: "Red Social Guarderias",
    description: `Un sistema diseñado para conectar a las familias con la guardería, funcionando como una red social institucional. Permite la visualización en tiempo real de actividades diarias, acceso a informes detallados sobre el desarrollo y progreso de los niños, y una galería de fotos de las actividades realizadas, fomentando la transparencia y fortaleciendo el vínculo entre la institución y los padres.`,
    image: project2,
    url: "https://mis.tiquidevs.click"
  },
  {
    name: "Sistema de Facturacion",
    description: `Este sistema está diseñado para optimizar el control de inventarios y la gestión de facturación en tiempo real. Proporciona herramientas para: 
    Gestión de Inventarios: Monitoreo detallado de existencias, alertas de stock bajo, y actualización automática tras ventas o ingresos de mercancías.
    Facturación Eficiente: Emisión de comprobantes personalizados, historial de ventas, y cálculos automáticos de impuestos. 
    Con una interfaz intuitiva, el sistema asegura precisión en las operaciones `,
    image: project3,
    url: "https://inventario.tiquidevs.click/vistas/login.html"
  },
  // {
  //   name: "Project 4",
  //   description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
  //   consequatur magni quod nesciunt necessitatibus molestiae non\
  //   eligendi, magnam est aliquam recusandae? Magnam soluta minus\
  //   iste alias sunt veritatis nisi dolores!`,
  //   image: project4,
  // },
  // {
  //   name: "Project 5",
  //   description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
  //   consequatur magni quod nesciunt necessitatibus molestiae non\
  //   eligendi, magnam est aliquam recusandae? Magnam soluta minus\
  //   iste alias sunt veritatis nisi dolores!`,
  //   image: project5,
  // },
  // {
  //   name: "Project 6",
  //   description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
  //   consequatur magni quod nesciunt necessitatibus molestiae non\
  //   eligendi, magnam est aliquam recusandae? Magnam soluta minus\
  //   iste alias sunt veritatis nisi dolores!`,
  //   image: project6,
  // },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* <Button size="small" color="primary">
                  Share
                </Button> */}
                <Button size="small" href={project.url} color="primary"  target="_blank" rel="noopener noreferrer" >
                  Ver Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
