import React from "react";
import { Typography, Grid, Box, Avatar } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import useStyles from './estilos'

export default (props) => {
     const classes=useStyles()

  return (
    <Grid Item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.contenido.imagen}
            title={props.contenido.semana}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.contenido.semana}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.contenido.descripcion}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardAction}>
          <Box className={classes.disertante}>
            <Avatar src={props.contenido.avatar} />

            <Box ml={3}>
              <Typography variant="subtitle2" component="p">
                {props.contenido.disertante}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                {props.contenido.fecha}
              </Typography>
            </Box>
          </Box>
          <Box>
            <BookmarkBorderIcon />
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};