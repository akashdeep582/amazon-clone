//setup data layer
//we need this track basket

import { createContext, useReducer, useContext } from "react";

//this is data layer
export const StateContext = createContext();

//build provider to wrap entire app in this provider and then we give this access to datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


export const useStateValue = () => {
    return useContext(StateContext);
};

//chidren is the app itself
//reducer initialstate children are props to stateprovider