import React, { Suspense } from "react";
import { connect } from "react-redux";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import ColorSwitcher from "./components/common/ColorSwitcher";
import { isMultiColorActive, adminRoot } from "./constants/defaultValues";
import { getDirection } from "./helpers/Utils";

const ViewHome = React.lazy(() =>
    import(/* webpackChunkName: "views" */ "./views/home")
);
const ViewApp = React.lazy(() =>
    import(/* webpackChunkName: "views-app" */ "./views/app")
);

const ViewError = React.lazy(() =>
    import(/* webpackChunkName: "views-error" */ "./views/error")
);

class App extends React.Component {
    constructor(props) {
        super(props);
        const direction = getDirection();
        if (direction.isRtl) {
            document.body.classList.add("rtl");
            document.body.classList.remove("ltr");
        } else {
            document.body.classList.add("ltr");
            document.body.classList.remove("rtl");
        }
    }

    render() {
        return (
            <div className="h-100">
                <>
                    {isMultiColorActive && <ColorSwitcher />}
                    <Suspense fallback={<div className="loading" />}>
                        <Router>
                            <Switch>
                                <Route path={adminRoot}>
                                    <ViewApp />
                                </Route>
                                <Route
                                    path="/error"
                                    exact>
                                    <h1>View Error</h1>
                                </Route>
                                <Route
                                    path="/"
                                    exact
                                >
                                    <h1>Root page</h1>
                                </Route>
                                <Redirect to="/error" />
                            </Switch>
                        </Router>
                    </Suspense>
                </>
            </div>
        );
    }
}

const mapStateToProps = ({ settings }) => ({});
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
