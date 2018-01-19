import React, { Component }  from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import Product from '../Product'

class ProductList extends Component {
  constructor(props) {
    super(props)

     this.onSaveProduct = this.props.onSaveProduct.bind(this)
     this.onIncrementProduct = this.props.onIncrementProduct.bind(this)
     this.onRemoveProduct = this.props.onRemoveProduct.bind(this)
  }

  render() {
    return (
      <Segment>
        <Grid>
          <Grid.Row columns={4}>
            {this.props.products.map(p => {
              return (
                <Grid.Column>
                  <Product
                    key={p.id}
                    name={p.name}
                    picture={p.picture}
                    price={p.price}
                    marca={p.marca}
                    status={p.status}
                    onSaveProduct={() => this.props.onSaveProduct(p.id)}
                    onIncrementProduct={() => this.props.onIncrementProduct(p.id)}
                    onRemoveProduct={() => this.props.onRemoveProduct(p.id)}
                  />
                </Grid.Column>
              )
            })}
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default ProductList
