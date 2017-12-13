import React, { Component }  from 'react'
import Product from '../Product'

class ProductList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        ProductList
      <Product/>
      {this.props.products.map( p => {
        return (
          <span>{p.name}</span>
        )
      })}
      </div>

    )
  }
}

export default ProductList
