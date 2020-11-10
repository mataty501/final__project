import React, { useState } from 'react'
import Product from './sub-components/Product'
import SideFilter from './sub-components/SideCategories'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ProductPopup from './sub-components/ProductPopup';
import Data from '../data/data.json'

const Products = () => {
    const [products, setProducts] = useState(Data)
    return (
        <div className="products__container">

            <div className="products">
                <SideFilter />
                <div className="products__products">

                    {
                        Data.map((elm) => {
                            return <Product key={elm.id} id={elm.id} title={elm.title} image={elm.image} price={elm.price} new={elm.new} />
                        })
                    }


                </div>
            </div>
        </div>
    )
}

export default Products
