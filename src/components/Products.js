import React, { useState, useEffect } from 'react'
import Product from './sub-components/Product'
import SideFilter from './sub-components/SideCategories'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ProductPopup from './sub-components/ProductPopup';
import Data from '../data/data.json'
import { useSelector } from 'react-redux'

const Products = () => {
    const [filtredData, setFiltredData] = useState(Data);
    const search = useSelector(state => state.Search.search);

    useEffect(() => {
        const dataFiltred = search.length && search[0].search !== '' ? filtredData.filter((elm) => {
            console.log(search[0].search)
            return elm.title.toLowerCase().startsWith(search[0].search)
        }) : Data;
        setFiltredData(dataFiltred)
    }, [search])

    return (
        <div className="products__container">

            <div className="products">
                <SideFilter />
                <div className="products__products">

                    {
                        filtredData.map((elm) => {
                            return <Product key={elm.id} id={elm.id} title={elm.title} image={elm.image} price={elm.price} new={elm.new} />
                        })
                    }


                </div>
            </div>
        </div>
    )
}

export default Products
