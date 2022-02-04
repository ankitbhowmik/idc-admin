import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { adminRoot } from "./constants/defaultValues";


const ViewHome = React.lazy(() =>
    import(/* webpackChunkName: "views" */ './views/home')
);
const ViewApp = React.lazy(() =>
    import(/* webpackChunkName: "views-app" */ './views/app')
);

const ViewError = React.lazy(() =>
    import(/* webpackChunkName: "views-error" */ './views/error')
);


const App = () => {

    return <div></div>
    return (
        <div className="h-100">
            <h1>sdjflsjdf</h1>
            <Suspense fallback={<div className="loading" />}>
                <Router>
                    <Switch>
                        <Route path="/">
                            <h1>home is working</h1>
                        </Route>
                        {/* <Route
                                path={adminRoot}
                                render={(props) => <ViewApp {...props} />}
                            /> */}
                        {/* <Routex
                                path="/error"
                                exact
                                render={(props) => <ViewError {...props} />}
                            />
                            <Route
                                path="/"
                                exact
                                render={(props) => <ViewHome {...props} />}
                            /> */}
                        <Redirect to="/error" />
                        <Redirect to="/error" />
                    </Switch>
                </Router>
            </Suspense>
        </div>
    );
};

export default App;
