
const initialState = 0;

const updateCount = (state = initialState,actions)=>{

    if(actions.type === "increament"){
        return  state +1;
    }
    else if(actions.type === "decreament" ){
        return state - 1 ;
    }
    else{
        return state;
    }
}

export default updateCount;