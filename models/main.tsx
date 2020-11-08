import { createContext, useReducer } from 'react';


export const ModelContext = createContext({});


const model_state : object = {

}

const model_reducer =(state : object, action : any )=> {
    switch(action.type){
        case 1:
            return{
                ...state,
                action
            }
        default:
            return state
    }
}
export const ModelContextComp = (props:any) => {
    const [modelState, modelDispatch] = useReducer(model_reducer, model_state);

    const _model_state = {
        modelState: modelState,
    }
    const _model_dispatch = {
        modelDispatch:modelDispatch,
    }

    return(
        <ModelContext.Provider value={{_model_state, _model_dispatch}}>
            {props.children}
        </ModelContext.Provider>
    )
}