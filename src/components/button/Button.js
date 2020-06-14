import React from 'react'
import {Button} from 'semantic-ui-react';
const CustomButton = props => {
    let {type, children, className, color, size, fluid} = props 
    return <Button type={type || 'button'} className={className || 'primary'} fluid={fluid || false}  size={size ||'medium'} color={color}>{children}</Button>
}

export default CustomButton