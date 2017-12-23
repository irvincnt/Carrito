import React, { Component } from 'react'
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
                <span className='cinema'>{this.props.price}</span>
              </Item.Meta>
              <Item.Description>{this.props.datails}</Item.Description>
              <Item.Extra>
                <Label>{this.props.marca}</Label>
                <Label>{this.props.shipping}</Label>
                <Label>{this.props.status}</Label>
                <Button compact floated='right' attached='left'>+</Button>
                <Button compact floated='right'>-</Button>
                <Button
                  basic
                  compact
                  color='blue'
                  floated='right'
                  onClick={this.props.onSendProduct}
                >
                  Agregar
                  {/* <Icon name='right add to cart' /> */}
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Divider fitted />
      </Item.Group>

    )
  }
}

export default Product
