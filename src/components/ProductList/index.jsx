import React, { Component }  from 'react'
import { Segment, Button, Icon, Item, Label, Divider } from 'semantic-ui-react'

class ProductList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Segment>
        {this.props.products.map(p => {
          return (
            <Item.Group relaxed>
              <Item>
                <Item.Image size='tiny' src={p.picture} />

                <Item.Content>
                  <Item.Header as='a'>{p.name}</Item.Header>
                  <Item.Meta>
                    <span className='cinema'>{p.price}</span>
                  </Item.Meta>
                  <Item.Description>{p.datails}</Item.Description>
                  <Item.Extra>
                    <Label>{p.marca}</Label>
                    <Label>{p.shipping}</Label>
                    <Label>{p.status}</Label>
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
          )
        })}
      </Segment>
    )
  }
}

export default ProductList
