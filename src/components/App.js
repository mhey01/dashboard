import React, { Component, Fragment } from 'react';
import { Header, Footer } from './layouts';
import Financial from './financial';

export default class extends Component {
  render() {
    return(
      <Fragment>
        <Header />

        <Financial />
        
        <Footer />
      </Fragment>
    )
  }
}