import React, { Component } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react'
import ProductList from '../ProductList'
import Cart from '../Cart'
import style from './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 5,
      products: [
        {
          id: 1,
          name: 'Nikon D5500 24.2 Mp',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_100101-MLM20255371968_032015-X.webp',
          price: 12346,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Nikon',
          shipping: 'Envío gratis a todo el país',
          status: '21 vendidos'

        },
        {
          id: 2,
          name: 'Sony Dsc-h300',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_621585-MLM25970442208_092017-X.webp',
          price: 3938,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Sony',
          shipping: 'Envío gratis a todo el país',
          status: '21 vendidos'
        },
        {
          id: 3,
          name: 'Fujifilm X-t10 ',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_997939-MLM25733136676_072017-X.webp',
          price: 18999,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Fujifilm',
          shipping: 'Envío gratis a todo el país',
          status: '21 vendidos'
        },
        {
          id: 4,
          name: 'Reflex Canon Eos',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_743505-MLM25028787002_082016-X.webp',
          price: 12346,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Canon',
          shipping: 'Envío gratis a todo el país',
          status: '21 vendidos'
        }
      ],
      cart: []
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.handleSendProduct = this.handleSendProduct.bind(this)
  }

  increment() {
    this.setState(prevState => ({
      count: this.state.count + 1
    }));
  }

  decrement() {
    this.setState(prevState => ({
      count: this.state.count -1
    }));
  }

  handleSendProduct (productId) {
    let product = this.state.products.find(p => p.id === productId);
    var productCart = {
      id: product.id,
      name: product.name,
      img: product.picture,
      price: product.price
    }
    this.setState({
      cart: this.state.cart.concat([productCart])
    })
  }

  render() {
    return (
      <Container className={style.root}>
        <Header as='h3' block>
          E-commerce
        </Header>
        <Grid>
          <Grid.Column width={10}>
            <ProductList
              products={this.state.products}
              add={this.increment}
              rest={this.decrement}
              onSendProduct={this.handleSendProduct}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <Cart items={this.state.cart} count={this.state.count}/>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default App;
