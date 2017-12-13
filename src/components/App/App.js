import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import ProductList from '../ProductList'

class App extends Component {
  render() {
    return (
      <Container>
        <h1>HOLA</h1>
        <ProductList />
      </Container>
    )
  }
}

export default App;
