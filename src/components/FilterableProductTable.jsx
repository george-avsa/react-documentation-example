import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export default class FilterableProductTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: "", 
            showStock: false
        }
        
        this.handleSearch = this.handleSearch.bind(this)
        this.handleStock = this.handleStock.bind(this)
    }

    handleSearch(value) {
        this.setState({search: value})
    }

    handleStock(value) {
        this.setState({showStock: !this.state.showStock})
    }

    render() {
        return (
            <div className='filterTable'>
                <SearchBar 
                    state={this.state} 
                    onChangeSearch={this.handleSearch} 
                    onChangeStock={this.handleStock} />
                <ProductTable 
                    search={this.state.search}
                    stock={this.state.showStock}
                    />

                
            </div>
        )
    }
}

