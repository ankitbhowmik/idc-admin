import React, {Suspense} from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import { configureStore } from "./redux/store";

const App = React.lazy(() => import(/* webpackChunkName: "App" */ './App'));

const Main = ()=>{
    
    return (
        <Provider store={configureStore()}>
            <Suspense fallback={<div className="loading" />}>
                <App/>
            </Suspense>
        </Provider>
    )
}

ReactDom.render(<Main/>,document.getElementById('react-target'));
