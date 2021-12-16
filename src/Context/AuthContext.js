import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { auth } from '../firebase';

const  AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ childrean }) {
    const[currentUser, setCurrentUser] = useState();

    function signUp(email, password){
        auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })

        return unsubscribe;
    }, [])
     
    const value = {
        currentUser,
        signUp
    }

    return (
        <AuthContext.Provider>
            {childrean}
        </AuthContext.Provider>
    )
}
