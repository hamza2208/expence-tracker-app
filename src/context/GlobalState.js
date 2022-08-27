import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

//Inital State
const initialState ={
    transactions: []
}

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider =({children})=>{
    const [State, dispatch] = useReducer(AppReducer, initialState);
     // Action
     function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        });
     }

     function addTransaction(transaction){
        dispatch({
            type:'Add_TRANSACTION',
            payload: transaction
        });
     }

    return(
        <GlobalContext.Provider value={{
            transactions: State.transactions, deleteTransaction, addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}