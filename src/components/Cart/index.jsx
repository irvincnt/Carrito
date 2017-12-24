import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'

import CartList from '../CartList'

class Cart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            Carrito de Compras ( {this.props.num} )
            <Icon size="large"  />
          </Card.Header>
        </Card.Content>
        <Card.Content>
        {this.props.items.map(p => {
          return (
          <CartList
            key={p.id}
            img={p.img}
            name={p.name}
            price={p.price}
          />
          )
        })}
        </Card.Content>
      </Card>
    )
  }
}

export default Cart
