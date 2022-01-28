import React from 'react';
import DynamicForm from '../components/DynamicForm';
import demoLoginField from "../../data/demoLoginField.json";

const DemoPage = () => {
    const onSubmit = (data)=>{
        console.log("data is ", data);
    }

    return <div>
        <h1>this is demo page</h1>
        <DynamicForm {...demoLoginField} onSubmit={onSubmit}/>
    </div>
};

export default DemoPage;
