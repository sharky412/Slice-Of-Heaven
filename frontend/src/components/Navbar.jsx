import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaPizzaSlice, FaShoppingCart, FaBoxOpen } from "react-icons/fa";

export function NavbarComponent() {
    const navigate = useNavigate();

    // Read the store using selector
    const cart = useSelector((state) => state.cart);

    const onLogout = () => {
        sessionStorage.removeItem("token");
        navigate("/");
    };

    return (
        <Navbar bg="success" variant="dark" expand="lg" className="py-3">
            <Container fluid>
                <Navbar.Brand
                    as={Link}
                    to="/home"
                    className="me-auto d-flex align-items-center"
                    style={{ marginLeft: "5rem" }}
                >
                    <FaPizzaSlice className="mx-3" />
                    <span className="mx-1">PizzaHub</span>
                </Navbar.Brand>

                <Nav className="ms-auto">
                    <Nav.Link
                        as={Link}
                        to="/home"
                        className="mx-3"
                        style={{ marginRight: "1rem" }}
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/cart"
                        className="mx-3"
                        style={{ marginRight: "1rem" }}
                    >
                        <FaShoppingCart className="me-1" />
                        Cart ({cart.items.length || 0})
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/orders"
                        className="mx-3"
                        style={{ marginRight: "1rem" }}
                    >
                        <FaBoxOpen className="me-1" />
                        Orders
                    </Nav.Link>
                </Nav>

                <Button
                    onClick={onLogout}
                    variant="danger"
                    className="ms-auto"
                    style={{ width: "80px", height: "40px", marginRight: "5rem" }}
                >
                    Logout
                </Button>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
