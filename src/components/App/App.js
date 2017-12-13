import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import ProductList from '../ProductList'
import Cart from '../Cart'

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [
        {
          name: 'Camara Nikon D5500 24.2 Mp',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_100101-MLM20255371968_032015-X.webp',
          price: '$ 12,346',
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Nikon',
          shipping: 'Envío gratis a todo el país',
          status: '21 vendidos'

        },
        {
          name: 'Camara Nikon D5500 24.2 Mp',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_100101-MLM20255371968_032015-X.webp',
          price: '$ 12,346',
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Nikon',
          shipping: 'Envío gratis a todo el país',
          status: '21 vendidos'
        },
        {
          name: 'Camara Nikon D5500 24.2 Mp',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_100101-MLM20255371968_032015-X.webp',
          price: '$ 12,346',
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Nikon',
          shipping: 'Envío gratis a todo el país',
          status: '21 vendidos'
        },
        {
          name: 'Camara Nikon D5500 24.2 Mp',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_100101-MLM20255371968_032015-X.webp',
          price: '$ 12,346',
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Nikon',
          shipping: 'Envío gratis a todo el país',
          status: '21 vendidos'
        },
        {
          name: 'Camara Nikon D5500 24.2 Mp',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_100101-MLM20255371968_032015-X.webp',
          price: '$ 12,346',
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Nikon',
          shipping: 'Envío gratis a todo el país',
          status: '21 vendidos'
        },
        {
          name: 'Camara Nikon D5500 24.2 Mp',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_100101-MLM20255371968_032015-X.webp',
          price: '$ 12,346',
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Nikon',
          shipping: 'Envío gratis a todo el país',
          status: '21 vendidos'
        }
      ]
    }
  }

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Column width={10}>
            <h1>HOLA</h1>
            <ProductList products={this.state.products}/>
          </Grid.Column>
          <Grid.Column width={6}>
            <h1>HOLA</h1>
            <Cart/>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default App;
