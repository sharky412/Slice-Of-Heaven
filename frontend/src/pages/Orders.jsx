import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {placeOrder, getAllOrder } from "../services/order";
import { toast } from "react-toastify";

export function Orders() {
    const [orders, setOrders] = useState([]);

    const loadOrders = async () => {
        const result = await getAllOrder();
        if (result.status == 'success') {
            setOrders(result.data);
        } else {
            toast.error(result.error);
        }
    }

    useEffect(() => {
        loadOrders();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className='title'>Welcome to the Orders Page</h1>
                {orders.length == 0 && (
                    <h5 style={{ textAlign: 'center' }}>There are no Orders</h5>
                )} 
                   {orders.length > 0 && (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Order No</th>
                                <th>Date</th>
                                <th>Total Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={order.id || index}>
                                    <td>{index + 1}</td>
                                    <td>{order.id}</td>
                                    <td>{order.createdTimeStamp}</td>
                                    <td>{order.totalAmount}</td>
                                    <td>
                                        <button className="btn btn-success">Details</button>
                                        <button className="btn btn-danger ms-2">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}

export default Orders;
