import React from 'react'
import {Icon,
        Image,
        Input, 
        Label, 
        Menu,  
        Dropdown
       } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import Notification from './Notification';
import logo from '../../assets/images/Logo.png';
import {toggleSideMenu} from '../../redux/modules/app';
import { useHistory } from 'react-router-dom';

function TopMenu(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const smallMenu = useSelector(
    state => state.app.smallMenu
  )

  const handleBarClick = () => {
    dispatch(toggleSideMenu(!smallMenu));
  }

  const trigger = (
    <span>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />Albiona 
    </span>
  )

  const handleSignOut = () => {
    history.push("/login");
  }
  
  const options = [
    { key: 'user', text: 'Account', icon: 'user' },
    { key: 'settings', text: 'Settings', icon: 'settings' },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out', onClick: handleSignOut },
  ]

  return (
    <Menu fixed="top" className="top-menu">
      <Menu.Item className="logo-space-menu-item">
        <div className="display-inline logo-space">
          <Image src={logo} style={{"height": "50px"}}/>
          <p>GroupIN</p>
        </div>
      </Menu.Item>

      <Menu.Item
        className="no-border"
        onClick={handleBarClick}
      >
        <Icon name="bars" color="purple"/>
      </Menu.Item>

      <Menu.Item className="no-border drop-left-padding">
        <Input
          className="icon"
          icon="search"
          placeholder="Search..."
        />
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item className="no-border" position="right">
          <Notification />
          <Label
            className="label-on-corner"
            color="teal"
            size={"mini"}
            floating
            circular
          >
            22
          </Label>
        </Menu.Item>
        <Menu.Item className="no-border" position="right">
          <div className="display-inline">
            <Dropdown
              trigger={trigger}
              options={options}
              pointing='top left'
              icon={null}
            />
          </div>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default TopMenu;
