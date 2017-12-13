import React, { Component }  from 'react'
import Product from '../Product'

class ProductList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.products.map((p, index) => {
          return (
            <Product
              key={index}
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
      </div>
    )
  }
}

export default ProductList
