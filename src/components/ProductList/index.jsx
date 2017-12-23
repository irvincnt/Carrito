import React, { Component }  from 'react'
import { Segment, Button } from 'semantic-ui-react'
import Product from '../Product'

class ProductList extends Component {
  constructor(props) {
    super(props)
  }

  handleAdd() {
    this.props.add();
  }

  handleRest() {
    this.props.rest();
  }

  render() {
    return (
      <Segment>
        <Button basic color='blue' compact floated='right' onClick={this.handleAdd.bind(this)}>Incrementa</Button>
        <Button basic color='blue' compact floated='right' onClick={this.handleRest.bind(this)}>Decrementar</Button>

        {this.props.products.map(p => {
          return (
            <Product
              key={p.id}
              name={p.name}
              picture={p.picture}
              price={p.price}
              datails={p.datails}
              marca={p.marca}
              shipping={p.shipping}
              status={p.status}
            />
          )
        })}
      </Segment>
    )
  }
}

export default ProductList
