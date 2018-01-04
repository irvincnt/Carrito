import React, { Component } from 'react'
import { Card, Statistic, Button } from 'semantic-ui-react'

class Order extends Component {
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
        <Card.Content header='Cantidad a pagar' />
        <Card.Content extra>
          <Statistic size='mini'>
            <Statistic.Value>$ {this.numberFormat(this.props.sum)}</Statistic.Value>
          </Statistic>
          <Button
            basic
            color='green'
            compact
            size="medium"
            floated='right'
            >Pagar
          </Button>
        </Card.Content>
      </Card>
    )
  }
}

export default Order
