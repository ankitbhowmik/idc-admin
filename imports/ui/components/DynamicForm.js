import React, {useState} from 'react';

const DynamicForm = ({fields, onSubmit}) => {
    const [state, setState] = useState(()=>{
        const initialValues = {}
        fields.forEach(item=> {
            initialValues[item.name] = item.value || "";
        });
        return initialValues;
    });

    const onChangeText = (e)=>{
        setState(prev=> ({...prev, [e.target.name]: e.target.value}))
    }

    const GenerateField = ({type, label, value, ...attributes}) =>{
        switch(type){
            case "textarea":
                return (
                    <textarea  
                    {...attributes}
                    >{value || state[attributes.name]}</textarea>
                )
            default: return (
                <>
                    {label && <label>{label}</label>}
                    <input 
                        type={type} 
                        value={value || state[attributes.name]} 
                        onChange={onChangeText}
                        {...attributes}
                    />
                </>
            );
        }
    }

    return <div>
        {
            fields.map((atts, index)=> (
                <div key={index} className="dynamic-field-container">
                    {GenerateField(atts)}
                </div>
            ))
        }
    </div>;
};

export default DynamicForm;
