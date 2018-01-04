import React, { Component } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react'
import ProductList from '../ProductList'
import CartList from '../CartList'
import style from './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 5,
      products: [
        {
          id: 1,
          name: 'Nikon D5500 24.2 Mp',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_100101-MLM20255371968_032015-X.webp',
          price: 12346,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Nikon',
          shipping: 'Envío gratis',
          status: 5,
          order: 0
        },
        {
          id: 2,
          name: 'Sony Dsc-h300 20 Mp',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_621585-MLM25970442208_092017-X.webp',
          price: 3938,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Sony',
          shipping: 'Envío gratis',
          status: 6,
          order: 0
        },
        {
          id: 3,
          name: 'Fujifilm X-t10 40.0 Mp',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_997939-MLM25733136676_072017-X.webp',
          price: 18999,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Fujifilm',
          shipping: 'Envío gratis',
          status: 2,
          order: 0
        },
        {
          id: 4,
          name: 'Reflex Canon Eos 30 ',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_743505-MLM25028787002_082016-X.webp',
          price: 1000,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Canon',
          shipping: 'Envío gratis',
          status: 6,
          order: 0
        }
      ],
      cart: []
    }

    this.handleSaveProduct = this.handleSaveProduct.bind(this)
    this.handlerAddProduct = this.handlerAddProduct.bind(this)
    this.handlerRemoveProduct = this.handlerRemoveProduct.bind(this)
  }

  handlerAddProduct(indexCart, indexProduct){
    var statusCopy = Object.assign({}, this.state);
    if (statusCopy.products[indexProduct].status !== 0){
      statusCopy.cart[indexCart].total += statusCopy.cart[indexCart].price
      statusCopy.products[indexProduct].status -= 1
      this.setState(statusCopy)
    }else{
      alert('Producto inexistente')
    }
  }

  handlerRemoveProduct(productId) {
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)
    let cart = this.state.cart.find(p => p.id === productId)
    let indexCart = this.state.cart.findIndex(x => x.id === cart.id)

    var statusCopy = Object.assign({}, this.state);
    if(statusCopy.cart[indexCart].total === statusCopy.cart[indexCart].price ){
      indexCart !== -1 && statusCopy.cart.splice( indexCart, 1 );
      this.setState(statusCopy)
    }else{
      statusCopy.cart[indexCart].total -= statusCopy.cart[indexCart].price
      statusCopy.products[indexProduct].status += 1
      this.setState(statusCopy)
    }
  }

  handleSaveProduct(productId) {
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)

    var productCart = {
      id: product.id,
      name: product.name,
      img: product.picture,
      price: product.price,
      order: 0,
      total: product.price
    }

    var exist = this.state.cart.find(p => p.id === productId)
    if(undefined !== exist && exist !== null){
      let indexCart = this.state.cart.findIndex(x => x.id === exist.id)
      this.handlerAddProduct(indexCart, indexProduct)
    }else{
      var statusCopy = Object.assign({}, this.state);
      statusCopy.products[indexProduct].status -= 1
      this.setState({
        cart: this.state.cart.concat([productCart]),
        statusCopy
      })
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
            <ProductList
              products={this.state.products}
              onSaveProduct={this.handleSaveProduct}
              onIncrementProduct={this.handleSaveProduct}
              onRemoveProduct={this.handlerRemoveProduct}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <CartList
              items={this.state.cart}
              num={this.state.num}
            />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default App;
