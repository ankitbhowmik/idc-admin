import React, {Suspense} from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";

import App from "./App";
import { configureStore } from "./redux/store";

const Main = ()=>{
    return <div className="loading"/>
    
    return (
        <Provider store={configureStore()}>
            <Suspense fallback={<div className="loading" />}>
                <App/>
            </Suspense>
        </Provider>
    )
}

ReactDom.render(<Main/>,document.getElementById('react-target'));