import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core';
import useStyles from './estilos'
import Tarjeta from './tarjeta'

import Estructura from './img/html-css.jpg'
import Hanna from './img/hanna.jpg'

const contenido=[
     {
         semana:"HTML5 y CSS3",
         descripcion:"Conceptos iniciales de HTML5 y CSS3",
         imagen:Estructura,
         avatar:Hanna,
         disertante:"Hanna Roberts",
         fecha: "28 de Junio, 2020"
     }, //agregar mas objetos, cada objeto representa una tarjeta y puede agregar la cantidad que se desee.
]

const Cuerpo=()=>{
     return contenido.map(tarjeta=><Tarjeta contenido={tarjeta}/>)  
}

export default function Terjetas(){
     const classes=useStyles()
     return (
          <Container maxWidth='lg' className={classes.semanas}>
              <Typography variant="h4" className={classes.semanasTitulo}>
                  Semanas
              </Typography>
              <Grid container spacing={3}>
                  <Cuerpo/>
              </Grid>    
          </Container>
      );
}