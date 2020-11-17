import { createContext, Dispatch, useReducer } from 'react';
type TModelContext = {
  model_state: {
    headerState: { header_index: number; header_more_index: number };
  };
  model_dispatch: { headerStateDispatch: Dispatch<any> };
};


export const ModelContext = createContext<TModelContext>(null);
//actions.types
export const UPDATE_HEADER_INDEX = 'UPDATE_HEADER_INDEX';
export const UPDATE_HEADER_MORE_INDEX = 'UPDATE_HEADER_MORE_INDEX';

const header_state: {
  header_index: number;
  header_more_index: number;
} = {
  header_index: 0,
  header_more_index: 0,
};

const header_state_reducer = (state: object, action: any) => {
  switch (action.type) {
    case UPDATE_HEADER_INDEX:
      return {
        ...state,
        header_index: action.header_index,
      };
    case UPDATE_HEADER_MORE_INDEX:
      return {
        ...state,
        header_more_index: action.header_more_index,
      };
    default:
      return state;
  }
};
export const ModelContextComp = (props: any) => {
  const [headerState, headerStateDispatch] = useReducer(
    header_state_reducer,
    header_state,
  );

  const model_state : { headerState:any}= {
    headerState: headerState,
  };
  const model_dispatch = {
    headerStateDispatch: headerStateDispatch,
  };

  return (
    <ModelContext.Provider value={{ model_state, model_dispatch }}>
      {props.children}
    </ModelContext.Provider>
  );
};
