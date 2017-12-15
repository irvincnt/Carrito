import React, { Component } from 'react'
import { Button, Icon, Item, Label, Divider} from 'semantic-ui-react'


class Product extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
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
                <Button compact attached='right'>-</Button>
                <Button basic color='blue' compact floated='right'>
                  Agregar
                  <Icon name='right add to cart' />
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Divider fitted />
      </Item.Group>
      </div>
    )
  }
}

export default Product
