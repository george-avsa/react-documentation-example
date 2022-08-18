import React, { Component } from 'react'

export default class ProductTableNameTitle extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let itemClasses = [this.props.type]

    if (this.props.stock) {
      itemClasses.push('stock')
    }

    return (
      <div className='productTableTitles'>
            <p className={itemClasses.join(' ')}>{this.props.name}</p>
            <p className={['marginRight', this.props.type].join(' ')}>{this.props.price}</p>
        </div>
    )
  }
}

