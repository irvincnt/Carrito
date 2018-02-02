import React from 'react'
import { Input } from 'semantic-ui-react'

function searchForm (props) {
    return(
      <Input
        action={{ icon: 'search', color: 'teal' }}
        placeholder='Search...' />
    )
}

export default searchForm;
