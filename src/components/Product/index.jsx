import React, { Component } from 'react'
import Format from '../numberFormat'
import { Button, Item, Label, Divider } from 'semantic-ui-react'

class Product extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Item.Group relaxed>
          <Item>
            <Item.Image size='tiny' src={this.props.picture} />
            <Item.Content>
              <Item.Header as='a'>{this.props.name}</Item.Header>
              <Item.Meta>
                <span className='cinema'>
                  <Format number={this.props.price}/>
                </span>
              </Item.Meta>
              <Item.Description>{this.props.datails}</Item.Description>
              <Item.Extra>
                <Label>{this.props.marca}</Label>
                <Label>{this.props.shipping}</Label>
                <Label>{this.props.status} piezas en stock</Label>
                <Button
                  basic
                  compact
                  color='blue'
                  floated='right'
                  onClick={this.props.onSaveProduct}
                >
                  Agregar al carrito
                </Button>
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
              </Item.Extra>
            </Item.Content>
          </Item>
          <Divider fitted />
      </Item.Group>

    )
  }
}

export default Product
