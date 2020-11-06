import React from 'react'
import Product from './sub-components/Product'
import SideFilter from './sub-components/SideCategories'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ProductPopup from './sub-components/ProductPopup';

const Products = () => {

    return (
        <div className="products__container">
            
            <div className="products">
                <SideFilter/>
                <div className="products__products">
                <Product  />
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                </div>
            </div>
        </div>
    )
}

export default Products
