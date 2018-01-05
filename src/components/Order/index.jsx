import React, { Component } from 'react'
import Format from '../numberFormat'
import { Card, Statistic, Button } from 'semantic-ui-react'

class Order extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Card>
        <Card.Content header='Cantidad a pagar' />
        <Card.Content extra>
          <Statistic size='mini'>
            <Statistic.Value>
              <Format number={this.props.sum}/>
            </Statistic.Value>
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
