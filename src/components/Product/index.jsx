import React, { Component } from 'react'
import Format from '../numberFormat'
import { Card, Image, Label, Button } from 'semantic-ui-react'

class Product extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Card style={{ marginTop: 15 }}>
        <Image size="small" src={this.props.picture}  />
        <Card.Content>
          <Card.Header style={{fontSize: 15}}>{this.props.name}</Card.Header>
          <Card.Meta>
            <Format number={this.props.price}/>
          </Card.Meta>
          <Card.Description>
            <Label>{this.props.marca}</Label>
            <Label>{this.props.status} en stock</Label>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            basic
            compact
            color='blue'
            floated='right'
            onClick={this.props.onSaveProduct}
          >
            Agregar al carrito
          </Button>
        </Card.Content>
        <Card.Content extra>
          <Button.Group floated='right'>
            <Button
              compact
              onClick={this.props.onIncrementProduct}
              >+</Button>
            <Button
              compact
              onClick={this.props.onRemoveProduct}
              >-</Button>
          </Button.Group>
        </Card.Content>
      </Card>

    )
  }
}

export default Product
