import React, { Component }  from 'react'
import { Segment } from 'semantic-ui-react'
import Product from '../Product'

class ProductList extends Component {
  constructor(props) {
    super(props)

     this.onSendProduct = this.props.onSendProduct.bind(this)
  }

  render() {
    return (
      <Segment>
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
              onSendProduct={() => this.props.onSendProduct(p.id)}
            />
          )
        })}
      </Segment>
    )
  }
}

export default ProductList
