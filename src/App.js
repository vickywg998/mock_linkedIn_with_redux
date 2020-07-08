import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchProducts from './fetchProducts';
import {getProductsError, getProducts, getProductsPending } from './productsReducer';

import Spinner from './spinner'

class ProductView extends Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {fetchProducts} = this.props;
        fetchProducts();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        // more tests
        return true;
    }

    render() {
        const {products, error, pending} = this.props;

        if(!this.shouldComponentRender()) return <Spinner />

        return (
            <div className='product-list-wrapper'>
                {error && <span className='product-list-error'>{error}</span>}
                <ul>
        {products.map(product =>
          <li key={product.data.id}>{product.data.email}</li>
        )}
      </ul>
            </div>

            
        )
    }
}

const mapStateToProps = state => ({
    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProducts
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductView );
