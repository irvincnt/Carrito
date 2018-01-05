import React, { Component } from 'react'
import { Feed } from 'semantic-ui-react'


class Cart extends Component {
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
              $ {this.props.total} ({this.props.order} productos)
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    )
  }
}

export default Cart;
