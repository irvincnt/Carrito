import React, { Component } from 'react'
import { Card, Feed, Button } from 'semantic-ui-react'


class CartList extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Feed>
        <Feed.Event>
          <Feed.Label image={this.props.img} />
          <Feed.Content>
            <Feed.Date content={this.props.name} />
            <Feed.Summary>
              {this.props.price}
            </Feed.Summary>
          </Feed.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button
                compact s
                ize='mini'
                floated='right'
                attached='left'
                >+</Button>
              <Button
                compact
                size='mini'
                floated='right'
                attached='right'
                >-</Button>
            </div>
          </Card.Content>
        </Feed.Event>
      </Feed>
    )
  }
}

export default CartList;
