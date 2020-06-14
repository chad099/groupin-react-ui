import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import TextIcon from "../extension/TextIcon";
import {connect} from "react-redux";

class SideMenu extends Component {  
    state = {
        activeItem: 'dashboard',
    };

    handleItemClick = (e, {name}) => this.setState({activeItem: name});
    changeSize = () => this.setState({smallSidebar: !this.props.smallMenu});

    getMenu() {
        const {activeItem} = this.state;
        return (
            <Menu fixed='left' borderless className={(this.props.smallMenu ? 'small-side' : '') + ' side'} vertical style={{ "textAlign": "justify"}}>
                <Menu.Item as={Link} to={'/'} name='dashboard' active={activeItem === 'dashboard'}
                           onClick={this.handleItemClick}>
                    <TextIcon hideText={this.props.smallMenu} color='teal' name='home'>
                        Dashboard
                    </TextIcon>
                </Menu.Item>

                <Menu.Item as={Link} to={'/appointments'} name='appointments'
                           active={activeItem === 'appointments'}
                           onClick={this.handleItemClick}>
                    <TextIcon hideText={this.props.smallMenu} color='teal' name='calendar'>
                        Activity
                    </TextIcon>
                </Menu.Item>

                <Menu.Item
                    as={Link} to={'/groups'}
                    name='groups' 
                    active={activeItem === 'groups'}
                    onClick={this.handleItemClick}
                    >
                    <TextIcon hideText={this.props.smallMenu} color='teal' name='users'>
                        Groups
                    </TextIcon>
                </Menu.Item>

                <Menu.Item as={Link} to={'/card'} name='card' active={activeItem === 'card'}
                           onClick={this.handleItemClick}>

                    <TextIcon hideText={this.props.smallMenu} color='teal' name='time'>
                        Movement
                    </TextIcon>
                </Menu.Item>

            </Menu>
        )
    }

    render() {
        return (
            <div className='parent'>
                <div className={(this.props.smallMenu ? 'small-side ' : '') + 'side'}>
                    {this.getMenu()}
                </div>
                <div className={(this.props.smallMenu ? 'small-content ' : '') + 'page-content'}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smallMenu: state.app.smallMenu
    }
}
export default connect(mapStateToProps, null)(SideMenu);
