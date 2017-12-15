import React, { Component } from 'react'
import { Card, Feed, Icon } from 'semantic-ui-react'

class Cart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            Carrito de Compras
            <Icon size="large" name='right add to cart' />
          </Card.Header>
        </Card.Content>
        <Card.Content>
        {this.props.items.map(p => {
          return (
          <Feed>
            <Feed.Event>
              <Feed.Label image={p.img} />
              <Feed.Content>
                <Feed.Date content={p.name} />
                <Feed.Summary>
                  {p.price}
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
          )
        })}
        </Card.Content>
      </Card>
    )
  }
}

export default Cart
