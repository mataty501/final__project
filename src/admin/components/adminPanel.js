import React from 'react'
import { Table } from "react-bootstrap";
import { useSelector } from 'react-redux';
import Data from '../../data/data.json'
import { FaTrashAlt } from 'react-icons/fa';
const AdminPanel = () => {

    return (
        <div>
            <div>Admin Panel, Welcome Walid.</div>
            <div className="container">
                <div className="numberOfProducts">
                    <div>
                        <div>total number of products is: {Data.length}</div>
                        <div>total number of users is: 12</div>



                    </div>
                </div>
                <div className="productsList">

                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product name</th>
                                <th className="delete-trash-container">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <th className="delete-trash-container"><FaTrashAlt className="delete-trash" /></th>

                            </tr>

                        </tbody>
                    </Table>
                </div>

            </div>
            <div className="orders">
                <div>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Full name</th>
                                <th>email</th>
                                <th>address 1</th>
                                <th>address 2</th>
                                <th>phone number</th>
                                <th className="delete-trash-container">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>walid alioua</td>
                                <td>alioua.walid1993@gmail.com</td>
                                <td>cite des annassers</td>
                                <th>kouba alger</th>
                                <th>0553757317</th>
                                <th className="delete-trash-container"><FaTrashAlt className="delete-trash" /></th>
                            </tr>

                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default AdminPanel
