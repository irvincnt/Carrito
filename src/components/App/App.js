import React, { Component } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react'
import ProductList from '../ProductList'
import Cart from '../Cart'
import style from './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [
        {
          id: 1,
          name: 'Camara Nikon D5500 24.2 Mp',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_100101-MLM20255371968_032015-X.webp',
          price: '$ 12,346',
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Nikon',
          shipping: 'Envío gratis a todo el país',
          status: '21 vendidos'

        },
        {
          id: 2,
          name: 'Camara Nikon D5500 24.2 Mp',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_100101-MLM20255371968_032015-X.webp',
          price: '$ 12,346',
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Nikon',
          shipping: 'Envío gratis a todo el país',
          status: '21 vendidos'
        },
        {
          id: 3,
          name: 'Camara Nikon D5500 24.2 Mp',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_100101-MLM20255371968_032015-X.webp',
          price: '$ 12,346',
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Nikon',
          shipping: 'Envío gratis a todo el país',
          status: '21 vendidos'
        },
        {
          id: 4,
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
      <Container className={style.root}>
        <Header as='h3' block>
          E-commerce
        </Header>
        <Grid>
          <Grid.Column width={10}>
            <ProductList products={this.state.products}/>
          </Grid.Column>
          <Grid.Column width={6}>
            <Cart/>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default App;
