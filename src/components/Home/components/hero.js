import React from 'react'
import {Box} from '@material-ui/core';
import useStyles from './estilos'

export default () => {
    const classes=useStyles()
    return (
            <Box className={classes.hero}>
                <Box>Curso de FrontEnd</Box>
            </Box>
    );
};