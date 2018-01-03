import React, { Component } from 'react'
import { Button, Item, Label, Divider } from 'semantic-ui-react'

class Product extends Component {
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
      <Item.Group relaxed>
          <Item>
            <Item.Image size='tiny' src={this.props.picture} />
            <Item.Content>
              <Item.Header as='a'>{this.props.name}</Item.Header>
              <Item.Meta>
                <span className='cinema'>{this.numberFormat(this.props.price)}</span>
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
                  Agregar
                  {/* <Icon name='right add to cart' /> */}
                </Button>
                <Button.Group floated='right'>
                  <Button
                    compact
                    onClick={this.props.onIncrementProduct}
                    >+</Button>
                  <Button compact>-</Button>
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
