import React from 'react'
import { Table } from "react-bootstrap";

const adminPanel = () => {
    return (
        <div>
            <div>Admin Panel, Welcome Walid.</div>
            <div className="container">
                <div className="numberOfProducts">
                    <div>
                        <div>total number of product is: 12</div>
                        <div>total number of users is: 12</div>



                    </div>
                </div>
                <div className="productOrders">

                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="productOfTheMonth">
                    <div>the most favorite product:</div>
                    <div>jean rouge</div>
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
                                <th>Delete</th>
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
                                <th>Delete</th>
                            </tr>

                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default adminPanel
