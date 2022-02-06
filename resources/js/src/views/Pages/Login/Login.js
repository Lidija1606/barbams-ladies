import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HashRouter, Route, Switch, BrowserRouter, Router, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
}
  from 'reactstrap';
import { login, onInputChange } from '../../../application/actions/authActions';

// import { login, onInputChange } from './actions/authActions';
import history from '../../../helpers/history';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false,
      errorMessage: null
    };

    if (this.props.auth.isLoggedIn) {
      history.push('/dashboard');
    }
  }

  onChange = (event) => {
    const { onInputChange } = this.props;
    onInputChange(event.currentTarget.name, event.currentTarget.value)
  }

  login = (event) => {
    const { login, auth } = this.props;
    login(auth.email, auth.password);
  }

  render() {
    const {
      error,
      email,
      password,
      isLoggedIn
    } = this.props.auth


    const heading = error ? 'Invalid email/password' : 'Sign In to your account';

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    {/* <Form> */}
                    <h1>Login</h1>
                    <p className={`text-muted ${error ? "login-error" : ''}`}>{heading}</p>

                    <FormGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text"
                          placeholder="Email"
                          autoComplete="email"
                          name="email"
                          onChange={this.onChange}
                          value={email}
                        />
                      </InputGroup>

                    </FormGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        name="password"
                        onChange={this.onChange}
                        value={password}
                      />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button
                          color="primary"
                          className="px-4"
                          onClick={this.login}
                        >Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Forgot password?</Button>
                      </Col>
                    </Row>
                    {/* </Form> */}
                  </CardBody>
                </Card>
                {/* <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card> */}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


function mapStateToProps(state) {
  // return {
  //   smsListProps: state.chatSmsReducer.smsList,
  //   text: state.chatSmsReducer.text
  // };
  return {
    auth: state.authReducer
  };
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    login,
    onInputChange
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(
  Login
);