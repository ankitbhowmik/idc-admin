import React from 'react';
import { useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom';

import TopNav from '../containers/navs/Topnav';
import Sidebar from '../containers/navs/Sidebar';
import Footer from '../containers/navs/Footer';
import { useHistory } from 'react-router-dom';

const AppLayout = ({ children }) => {
    const history = useHistory();

    const containerClassnames = useSelector(({menu})=> menu);

    return (
        <div id="app-container" className={containerClassnames}>
        <TopNav history={history} />
        <Sidebar />
        <main>
            <div className="container-fluid">{children}</div>
        </main>
        <Footer />
        </div>
    );
};
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};
const mapActionToProps = {};

export default withRouter(AppLayout);
