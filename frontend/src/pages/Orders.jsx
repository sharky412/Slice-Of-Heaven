import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getAllOrder, deleteOrder, getOrderDetails } from "../services/order";
import { toast } from "react-toastify";

export function Orders() {
    const [orders, setOrders] = useState([]);
    const [orderDetails, setOrderDetails] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);

    const loadOrders = async () => {
        const result = await getAllOrder();
        if (result.status === "success") {
            setOrders(result.data);
        } else {
            toast.error(result.error);
        }
    };

    const handleDeleteOrder = async (orderId) => {
        const result = await deleteOrder(orderId);
        if (result.status === "success") {
            toast.success("Order deleted successfully");
            loadOrders();
        } else {
            toast.error(result.error);
        }
    };

    const handleViewDetails = async (orderId) => {
        const result = await getOrderDetails(orderId);
        if (result.status === "success") {
            setOrderDetails(result.data);
            setModalVisible(true); // Open the modal
        } else {
            toast.error(result.error);
        }
    };

    const closeModal = () => {
        setModalVisible(false); // Close the modal
        setOrderDetails(null);
    };

    useEffect(() => {
        loadOrders();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="title">Welcome to the Orders Page</h1>
                {orders.length === 0 && (
                    <h5 style={{ textAlign: "center" }}>There are no Orders</h5>
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
                                    <td>{order.createdTimestamp}</td>
                                    <td>{order.totalAmount}</td>
                                    <td>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => handleViewDetails(order.id)}
                                        >
                                            Details
                                        </button>
                                        <button
                                            className="btn btn-danger ms-2"
                                            onClick={() => handleDeleteOrder(order.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Modal Component */}
            {isModalVisible && (
                <div className="modal fade show" style={{ display: "block" }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Order Details</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={closeModal}
                                ></button>
                            </div>
                            <div className="modal-body">
                                {orderDetails ? (
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Pizza ID</th>
                                                <th>Quantity</th>
                                                <th>Total Amount</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderDetails.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.pizzaId}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.totalAmount}</td>
                                                    <td>{item.createdTimestamp}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Orders;
