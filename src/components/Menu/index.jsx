import React, { Component } from 'react'
import { Segment, Input } from 'semantic-ui-react'

class Navigation extends Component {

  render() {
    return(
      <Segment tertiary >
        <Input labelPosition='right' action={{ icon: 'search', color: 'teal' }} placeholder='Search...' />
      </Segment>
    )
  }
}

export default Navigation;
