import React, {Component} from 'react'
import ProductTableNameTitle from './ProductTableTitle'


const items= [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

export default class ProductTable extends Component {  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='productTable'>
        <ProductTableNameTitle name='Name' price="Price" type="title" />
        <div className='productTableItem'>
            {items.map((kek) =>
              (kek.name.includes(this.props.search) &&
                (this.props.stock
                  ? (kek.stocked &&
                      <ProductTableNameTitle name={kek.name} price={kek.price} key={kek.name} stock={kek.stocked} type="item"/>
                  )
                  : <ProductTableNameTitle name={kek.name} price={kek.price} key={kek.name} stock={kek.stocked} type="item"/>)
              )
            )}
        </div>
      </div>
    )
  }
}
