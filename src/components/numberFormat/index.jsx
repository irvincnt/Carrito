import React, { Component } from 'react'

class Format extends Component {
  constructor(props) {
    super(props)
  }

  numberFormat(amount, decimals) {
    decimals = decimals || 0;

    if (isNaN(amount) || amount === 0) return parseFloat(0).toFixed(decimals);
    amount = '' + amount.toFixed(decimals);
    
    var amount_parts = amount.split('.'), regexp = /(\d+)(\d{3})/;

    while (regexp.test(amount_parts[0]))
      amount_parts[0] = amount_parts[0].replace(regexp, '$1' + ',' + '$2');

    return amount_parts.join('.');
  }

  render() {
    return(
      <p> $ {this.numberFormat(this.props.number)}</p>
    )
  }
}

export default Format
