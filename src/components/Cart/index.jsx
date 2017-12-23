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
            Carrito de Compras ( {this.props.count} )
            <Icon size="large"  />
          </Card.Header>
        </Card.Content>
        <Card.Content>
        {this.props.items.map(p => {
          return (
          <Feed key={p.id}>
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
