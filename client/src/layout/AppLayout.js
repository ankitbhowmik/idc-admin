import React from 'react';
import { useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom';

// import TopNav from 'containers/navs/Topnav';
// import Sidebar from 'containers/navs/Sidebar';
// import Footer from 'containers/navs/Footer';

const TopNav = ()=>{
    return <nav>navbar</nav>
}


const Sidebar = ()=>{
    return <nav>sidebar</nav>
}


const Footer = ()=>{
    return <nav>footer</nav>
}

const AppLayout = ({ children, history }) => {
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
