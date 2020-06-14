import React from 'react';
import { Form } from 'semantic-ui-react';

const Input = props => {
    let {placeholder, input, icon, iconPosition, type, meta: { touched, error, warning }} = props;
    return (<Form.Input fluid  type={type || 'text'} icon={icon} iconPosition={iconPosition || 'left'} placeholder={placeholder} {...input} error={touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}/>
    )
}

export default Input;