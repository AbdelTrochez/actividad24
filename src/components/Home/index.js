import React, { Fragment } from 'react'
import Nav from './components/nav'
import Hero from './components/hero'
import Tarjetas from './components/tarjetas'

function index(){
     return(
          <React.StrictMode>
               <Nav />
               <Hero />
               <Tarjetas />
          </React.StrictMode>
     )
}

export default index;