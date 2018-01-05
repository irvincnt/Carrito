import React, { Component } from 'react'
import Format from '../numberFormat'
import { Card, Icon, Button, Grid } from 'semantic-ui-react'

import Cart from '../Cart'

class CartList extends Component {
  constructor(props) {
    super(props)
  }

  numberFormat(amount, decimals) {
    decimals = decimals || 0;
    if (isNaN(amount) || amount === 0) return parseFloat(0).toFixed(decimals);
    amount = '' + amount.toFixed(decimals);
    var amount_parts = amount.split('.'), regexp = /(\d+)(\d{3})/;
    while (regexp.test(amount_parts[0]))
      amount_parts[0] = amount_parts[0].replace(regexp, '$1' + ',' + '$2');
    return amount_parts.join('.');
  }

  render() {
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            Carrito de Compras
            <Icon size="large"  />
          </Card.Header>
        </Card.Content>
        <Card.Content>
        {this.props.items.map(p => {
          return (
          <Cart
            key={p.id}
            img={p.img}
            name={p.name}
            total={this.numberFormat(p.total)}
            order={p.order}
          />
          )
        })}
        </Card.Content>
        <Card.Content extra>
          <Button
            basic
            color='green'
            compact
            size="medium"
            onClick={this.props.onOpenOrder}
            >Proceder al Pago ({this.props.total} productos)
          </Button>
        </Card.Content>
      </Card>
    )
  }
}

export default CartList;
