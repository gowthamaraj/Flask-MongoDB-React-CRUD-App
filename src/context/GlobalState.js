import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
  users: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
      const [state, dispatch] = useReducer(AppReducer, initialState);

      function deleteUser(id) {
        dispatch({
        type: 'DELETE',
        payload: id
        });
        }

    function addUser(user) {
         dispatch({
      type: 'ADD',
      payload: user
         });
        }

        return(<GlobalContext.Provider value={{
    users: state.users,
    deleteUser,
    addUser
  }}>
    {children}
  </GlobalContext.Provider>)
}