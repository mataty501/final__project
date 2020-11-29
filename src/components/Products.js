import React, { useState, useEffect } from "react";
import Product from "./sub-components/Product";
import SideFilter from "./sub-components/SideCategories";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ProductPopup from "./sub-components/ProductPopup";
import Data from "../data/data.json";
import { useSelector } from "react-redux";
import {
  FaPlus,
  FaSearch,
  FaHeart,
  FaShoppingBag,
  FaUserAlt,
} from "react-icons/fa";
import Fav from "./sub-components/Fav";
import Shop from "./sub-components/Shop";
import User from "./sub-components/User";
import AddProduct from "./sub-components/AddProduct";
import { MAXMIN } from "../Redux/Actions/actions";
import { useDispatch } from "react-redux";
import axios from "axios";

const Products = (props) => {
  const Data = props.data;
  const [filtredData, setFiltredData] = useState(Data);
  const search = useSelector((state) => state.Filter.search);
  const price_range = useSelector((state) => state.Filter.price);
  const gender = useSelector((state) => state.Filter.gender);
  //const [price_range, setPrice] = useState(state => state.Filter.price);
  let min = price_range[0];
  let max = price_range[1];

  //console.log(Data[0]._id)

  const [show_plus, setShow_plus] = useState(false);
  const handleClose_plus = (e) => {
    e.stopPropagation();
    setShow_plus(false);
  };
  const handleShow_plus = (e) => {
    e.stopPropagation();
    setShow_plus(true);
  };
  const closePopup_plus = () => {
    setShow_plus(false);
  };

  //Find min & max:
  let max_price = Math.max.apply(
    Math,
    Data.map(function (e) {
      return e.price;
    })
  );
  let min_price = Math.min.apply(
    Math,
    Data.map(function (e) {
      return e.price;
    })
  );

  const btnShow = useSelector((state) => state.User.showBtn);

  const dispatch = useDispatch();

  dispatch({
    type: MAXMIN,
    payload: { min: min_price, max: max_price },
  });

  useEffect(() => {
    let dataFiltred =
      search !== ""
        ? Data.filter((elm) => {
          console.log(search);
          return elm.title.toLowerCase().includes(search);
        })
        : Data;
    dataFiltred =
      gender !== ""
        ? dataFiltred.filter((elm) => {
          return elm.gender == gender;
        })
        : dataFiltred;
    setFiltredData(dataFiltred);

    setFiltredData(
      dataFiltred.filter((x) => {
        return x.price < max && x.price > min;
      })
    );
  }, [search, price_range, gender]);

  return (
    <div className="products__container">
      <div className="products">
        <SideFilter />
        <div className="products__products">
          {filtredData.map((elm) => {
            return (
              <Product
                key={elm._id}
                id={elm._id}
                title={elm.title}
                image={elm.pictureUrl}
                description={elm.description}
                urlArray={elm.pictureUrlArray}
                price={elm.price}
                new={elm.newProduct}
              />
            );
          })}
        </div>
      </div>
      {btnShow && (
        <div className="addProductButton" onClick={(e) => handleShow_plus(e)}>
          <FaPlus />
        </div>
      )}
      <AddProduct
        show={show_plus}
        close={handleClose_plus}
        closePopup={closePopup_plus}
      />
    </div>
  );
};

export default Products;
