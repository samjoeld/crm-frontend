import React from "react";
import PropTypes from 'prop-types'
import { Container,Row, Col, Form,Button,  } from "react-bootstrap";



export const ResetPassword = ({handleOnChange, formSwitcher, handleOnResetSubmit, email,}) => {
    return(
       <Container>
        <Row>
            <Col>
            <h1 className="text-info text-center">Reset Password</h1>
            <br />
            <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
                <Button type="Submit"> ResetPassword </Button>
            </Form>
            </Col>
        </Row>
        <Row>
            <Col>
            <a href="#!" className="m-5"  onClick={ () => formSwitcher('login')}>Login</a>
            </Col>        
            </Row>

       </Container>
    );
}

ResetPassword.prototype ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
};