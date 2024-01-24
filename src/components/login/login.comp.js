import React from "react";
import PropTypes from 'prop-types'
import { Container,Row, Col, Form, Button, } from "react-bootstrap";


export const LoginForm = ({handleOnChange, formSwitcher, handleOnSubmit, email, pass}) => {
    return(
       <Container>
        <Row>
            <Col>
            <h1 className="text-info text-center">Client Login</h1>
            <br />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Enter the Email Address</Form.Label>
                    <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange = {handleOnChange}
                    placeholder="email"
                    required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label className="mb-2" controlId="formBasicEmail" >Enter the Password</Form.Label>
                    <Form.Control
                    type="password"
                    name="password"
                    value={pass}
                    onChange={handleOnChange}
                    placeholder="password"
                    required
                    />
                </Form.Group>
                <br />
                <Button type="submit">Login</Button>
                <br />
                <br />
                <a href="#!" className="m-5" onClick={() => formSwitcher("reset")} >Forget Password</a>
            </Form>
            </Col>
        </Row>

       </Container>
    );
}

LoginForm.prototype ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
};