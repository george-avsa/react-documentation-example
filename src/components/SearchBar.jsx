import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'

export default class SearchBar extends Component {

    constructor(props) {
        super(props)

        this.keklolarbidol = this.keklolarbidol.bind(this) 
    }

    keklolarbidol(e){
        if (e.target.type == 'text') {
            this.props.onChangeSearch(e.target.value)
        } else if (e.target.type == 'checkbox') {
            this.props.onChangeStock(e.target.checked)
        }
    }

    render() {
        return (
        <>
            <input value={this.props.state.search} onChange={this.keklolarbidol} type='text' className='searchInput' placeholder='Search...'></input>
            <div>
                <input type="checkbox" id="stock" checked={this.props.state.showStock} onChange={this.keklolarbidol}></input>
                <label htmlFor="stock">Only show products in stock</label>
            </div>
        </>
        )
    }
    }
