import React from 'react';
import SideMenu from "../layout/SideMenu";
import TopMenu from "../layout/TopMenu";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Layout(props) {
    const user = useSelector(state => state.auth.user)
    const history = useHistory();
    if(!user) return history.push("/login")
    return (
        <div className="grid">
            <div className="menu">
                <TopMenu/>
            </div>
            <div className="main-content">
                <SideMenu>
                    {props.children}
                </SideMenu>
            </div>
        </div>
    );
}

export default Layout;
