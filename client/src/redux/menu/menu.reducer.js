const INIT_STATE = {
    test:"yeah working"
}

export default function(state=INIT_STATE, action){

    switch(action.type){
        case "changed" :
            return {...state, test:"changed and still works"};
        default :
            return state;
    }

}