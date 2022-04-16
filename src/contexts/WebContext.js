import React, { createContext, useState, useEffect, useContext } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/Firebase/index'
import Loading from '@/Utils/Loading';

export const WebContext = createContext({})

export const WebProvider = ({ children }) => {
    // Loggedin user
    const [user, setUser] = useState(null)
    // Initializing State
    const [initializing, setInitializing] = useState(true)
    // Loading state
    const [loading, setLoading] = useState(false)
    // toggle sidebar
    const [sidebarOpen, setSidebarOpen] = useState(false)
    // App Alert
    const [showAlert, setShowAlert] = useState({
        show: false,
        message: '',
        variant: '',
    })
    const displayAlert = (show, variant, message) => {
        setShowAlert({
            show,
            message,
            variant,
        })
        setTimeout(() => setShowAlert({
            show: false,
            message: '',
            variant: '',
        }), 2000)
    }
    // Initialize Firebase Auth and check for user
    useEffect(() => onAuthStateChanged(auth, (user) => {
        if (user) {
            // User Logged In
            setUser(user)
        } else {
            // User Logged Out
            setUser(null)
        }
        console.log(user)
        setInitializing(false)
    }), [])

    const provider = new GoogleAuthProvider()

    // Sign in with Google
    const signIn = () => {
        setLoading(true)
        signInWithPopup(auth, provider).then((result) => {
            setLoading(false)
            setUser(result.user)
        }).catch((error) => {
            setLoading(false)
            displayAlert(true, 'error', error.message)
        }).finally(() => {
            setLoading(false)
        })
    }

    // Sign Out
    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {
                setUser(null)
            })
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    // Memoize the value of the context provider
    const value = {
        user,
        setLoading,
        loading,
        displayAlert,
        showAlert,
        signIn,
        logOut,
        initializing,
        sidebarOpen,
        setSidebarOpen,
    }
    return (
        <WebContext.Provider value={value}>
            {!initializing ? children : <Loading />}
        </WebContext.Provider>
    )

}
const useWeb = () => {
    return useContext(WebContext)
}
export default useWeb;