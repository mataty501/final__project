import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Data from "../../data/data.json";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
const AdminPanel = () => {
  const [dataOrders, setDataOrders] = useState();
  const [dataProducts, setDataProducts] = useState();
  const [dataUsers, setDataUsers] = useState();

  const deleteOrder = async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/deleteOrder/${id}`
    );
  };
  const deleteProduct = async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/deleteProduct/${id}`
    );
  };
  useEffect(() => {
    const showOrders = async () => {
      const response = await axios.get("http://localhost:5000/showOrders");
      console.log(response.data);
      setDataOrders(response.data);
    };
    const showProducts = async () => {
      const response = await axios.get("http://localhost:5000/getProducts");
      setDataProducts(response.data);
    };

    const showUsers = async () => {
      const response = await axios.get("http://localhost:5000/getUsers");
      setDataUsers(response.data);
    };

    showOrders();
    showProducts();
    showUsers();
  }, [deleteOrder, deleteProduct]);

  //console.log(dataProducts)

  return (
    <div>
      <div>Admin Panel, Welcome Walid.</div>
      <div className="container">
        <div className="numberOfProducts">
          <div>
            <div>
              Total number of products is: {dataProducts && dataProducts.length}
            </div>
            <div>
              Total number of orders is: {dataOrders && dataOrders.length}
            </div>
            <div>Total number of users is: {dataUsers && dataUsers.length}</div>
          </div>
        </div>
        <div className="productsList">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Product name</th>
                <th>Price</th>
                <th className="delete-trash-container">Action</th>
              </tr>
            </thead>
            <tbody>
              {dataProducts &&
                dataProducts.map((e) => {
                  return (
                    <tr>
                      <td>{e.title}</td>
                      <td>{e.price}</td>
                      <th className="delete-trash-container">
                        <FaTrashAlt
                          onClick={() => {
                            deleteProduct(e._id);
                          }}
                          className="delete-trash"
                        />
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="orders">
        <div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Product Name</th>
                <th>Address</th>
                <th>phone number</th>
                <th className="delete-trash-container">Delete</th>
              </tr>
            </thead>
            <tbody>
              {dataOrders &&
                dataOrders.map((e) => {
                  console.log(e);
                  return (
                    <tr>
                      <td>{e.name}</td>
                      <td>{e.productID}</td>
                      <td>{e.address}</td>
                      <th>{e.phoneNumber}</th>
                      <th className="delete-trash-container">
                        <FaTrashAlt
                          onClick={() => {
                            deleteOrder(e._id);
                          }}
                          className="delete-trash"
                        />
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
