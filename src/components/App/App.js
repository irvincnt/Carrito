import React, { Component } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react'
import Menu from '../Menu'
import ProductList from '../ProductList'
import CartList from '../CartList'
import Order from '../Order'
import style from './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openOrder: false,
      total: 0,
      sum: 0,
      products: [
        {
          id: 1,
          name: 'Nikon D5500 24.2 Mp',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_100101-MLM20255371968_032015-X.webp',
          price: 12346,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Nikon',
          status: 5,
        },
        {
          id: 2,
          name: 'Sony Dsc-h300 20 Mp',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_621585-MLM25970442208_092017-X.webp',
          price: 3938,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Sony',
          status: 6,
        },
        {
          id: 3,
          name: 'Fujifilm X-t10 40.0 Mp',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_997939-MLM25733136676_072017-X.webp',
          price: 18999,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Fujifilm',
          status: 2,
        },
        {
          id: 4,
          name: 'Reflex Canon Eos 30 ',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_743505-MLM25028787002_082016-X.webp',
          price: 1000,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Canon',
          status: 6,
        },
        {
          id: 5,
          name: 'Holster Camera Case ',
          picture: 'https://images-na.ssl-images-amazon.com/images/I/91cMeS6xLHL._SX522_.jpg',
          price: 328,
          marca: 'Amazon',
          status: 10,
        },
        {
          id: 6,
          name: 'Olympus M. 40-150mm ',
          picture: 'https://images-na.ssl-images-amazon.com/images/I/81vy-AiCWSL._AC_UL160_SR160,160_.jpg',
          price: 2733,
          marca: 'Olympus',
          status: 4,
        },
        {
          id: 7,
          name: 'Tripié ligero ',
          picture: 'https://images-na.ssl-images-amazon.com/images/G/33/aplusautomation/vendorimages/2ad656e6-6b25-48fd-af65-0a113979bc54.jpg._CB293876631__SR300,300_.jpg',
          price: 372,
          marca: 'Amazon',
          status: 2,
        },
        {
          id: 8,
          name: 'Fujinon XF10-24MMF4 ',
          picture: 'https://images-na.ssl-images-amazon.com/images/I/81tbbvcsJIL._AC_UL160_SR160,160_.jpg',
          price: 25023,
          marca: 'Fujinon',
          status: 4,
        },
        {
          id: 9,
          name: 'Fujifilm X-T2 Mirrorless ',
          picture: 'https://images-na.ssl-images-amazon.com/images/I/81CUJvIrFML._AC_UL160_SR160,160_.jpg',
          price: 50399,
          marca: 'Fujifilm',
          status: 3,
        },
        {
          id: 10,
          name: 'LUMIX G Lens, 25mm',
          picture: 'https://images-na.ssl-images-amazon.com/images/I/71dTWmH4vxL._SL1500_.jpg',
          price: 3262,
          marca: 'Panasonic',
          status: 4,
        },
        {
          id: 11,
          name: 'Olympus OM-D E-M5 ',
          picture: 'https://images-na.ssl-images-amazon.com/images/I/918N6QYcTjL._SL1500_.jpg',
          price: 18688,
          marca: 'Olympus',
          status: 3,
        },
        {
          id: 12,
          name: 'Fujifilm X-T20 ',
          picture: 'https://images-na.ssl-images-amazon.com/images/I/91in%2BYvDGtL._AC_UL160_SR160,160_.jpg',
          price: 32699,
          marca: 'Fujifilm',
          status: 10,
        }
      ],
      cart: [],
    }

    this.handleSaveProduct = this.handleSaveProduct.bind(this)
    this.handlerAddProduct = this.handlerAddProduct.bind(this)
    this.handlerRemoveProduct = this.handlerRemoveProduct.bind(this)
    this.handlerOpenOrder = this.handlerOpenOrder.bind(this)
    this.handlerClearCart = this.handlerClearCart.bind(this)
  }

  handlerClearCart() {
    this.setState({
      cart: [],
      sum: 0,
      total: 0
    });
  }

  sumProducts(array) {
    var total = 0
    array.forEach(product => total += product.order)
    this.setState({total: total})
  }

  sumTotal(array) {
    var sum = 0
    array.forEach(product => sum += product.total)
    this.setState({sum: sum})
  }

  handlerAddProduct(indexCart, indexProduct){
    var statusCopy = Object.assign({}, this.state);
    if (statusCopy.products[indexProduct].status !== 0) {
      statusCopy.cart[indexCart].total += statusCopy.cart[indexCart].price
      statusCopy.cart[indexCart].order += 1
      statusCopy.products[indexProduct].status -= 1
      this.setState(statusCopy)
      this.sumProducts(statusCopy.cart)
      this.sumTotal(statusCopy.cart)
    } else {
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
      alert('El producto fue eliminado del carrito de compras')
    } else {
      statusCopy.cart[indexCart].total -= statusCopy.cart[indexCart].price
      statusCopy.products[indexProduct].status += 1
      statusCopy.cart[indexCart].order -= 1
      statusCopy.total -= 1
      statusCopy.sum -= statusCopy.cart[indexCart].price
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
      order: 1,
      total: product.price
    }

    var exist = this.state.cart.find(p => p.id === productId)
    if (undefined !== exist && exist !== null) {
      let indexCart = this.state.cart.findIndex(x => x.id === exist.id)
      this.handlerAddProduct(indexCart, indexProduct)
    }else{
      var statusCopy = Object.assign({}, this.state);
      statusCopy.products[indexProduct].status -= 1
      this.sumProducts(statusCopy.cart)
      this.sumTotal(statusCopy.cart)
      this.setState({
        cart: this.state.cart.concat([productCart]),
        statusCopy
      })
    }
  }

  handlerOpenOrder(event) {
    event.preventDefault()
    this.setState({ openOrder: true })
  }

  renderOpenOrder() {
    if (this.state.openOrder) {
      return (
        <Order
          sum={this.state.sum}
          onClearCart={this.handlerClearCart}
        />
      )
    }
  }

  render() {
    return (
      <Container className={style.root}>
        <Menu/>
        <Grid>
          <Grid.Column width={12}>
            <ProductList
              products={this.state.products}
              onSaveProduct={this.handleSaveProduct}
              onIncrementProduct={this.handleSaveProduct}
              onRemoveProduct={this.handlerRemoveProduct}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <CartList
              items={this.state.cart}
              total={this.state.total}
              onOpenOrder={this.handlerOpenOrder}
            />
            {this.renderOpenOrder()}
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default App;
