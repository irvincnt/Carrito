import React, { Component } from 'react'
import { Segment, Input } from 'semantic-ui-react'

class Navigation extends Component {

  render() {
    return(
      <Segment textAlign='right' clearing style={{ marginTop: 15}}>
        <Input
          action={{ icon: 'search', color: 'teal' }}
          placeholder='Search...' />
      </Segment>
    )
  }
}

export default Navigation;
