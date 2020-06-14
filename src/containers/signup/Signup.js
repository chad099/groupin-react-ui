import React from 'react';
import CustomButton from '../../components/button/Button';
import { Field, reduxForm } from 'redux-form'
import {Form, Segment, Grid, Header, Message} from 'semantic-ui-react';
import '../login/Login.css';
import Input from '../../components/inputs/Input';
import {required} from '../../validations';
import Logo from '../../assets/images/Logo.png';
import {Link} from 'react-router-dom'
let Signup = props => {
    const {handleSubmit, history} = props;
    const onSubmit = prop => {
        history.push("/")
    }
    return (
        <div className="ui-login">
        <Grid textAlign="center" verticalAlign="middle" className="login-form">
          <Grid.Column>
            <Header as="h2" color="teal" textAlign="center">
              <img src={Logo} alt="logo" className="image" />{" "}
              Please sign up to start with groupIN
            </Header>
            <Form onSubmit={handleSubmit(onSubmit)} size="large">
              <Segment stacked>
              <Field
                  fluid
                  name='firstName'
                  placeholder="Enter first name"
                  component={Input}
                  validate={required}
                />
                  <Field
                  fluid
                  name='lastName'
                  placeholder="Enter last name"
                  component={Input}
                  validate={required}
                />
                  <Field
                  fluid
                  name='email'
                  placeholder="E-mail address"
                  component={Input}
                  validate={required}
                />
                <Field
                  fluid
                  name='phone'
                  placeholder="Enter mobile number"
                  component={Input}
                  validate={required}
                />
                <CustomButton type="submit" fluid size="large">
                  Login
                </CustomButton>
              </Segment>
            </Form>
            <Message>
              Already sign up? <Link to="/login">Back to login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
}

Signup = reduxForm({
    form: 'signup'
  })(Signup)

export default Signup;