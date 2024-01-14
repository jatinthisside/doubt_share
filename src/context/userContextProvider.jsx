import React, { useState } from 'react'
import { userContext } from './UserContext'
import { useEffect } from 'react';

export const UserContextProvider = ({children}) =>{
    const [modelState,setModelState] = useState(false);
    return(
        <userContext.Provider value={{modelState,setModelState}}>
            {children}
        </userContext.Provider>
    )
}