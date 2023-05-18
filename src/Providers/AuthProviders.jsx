/* eslint-disable react/prop-types */
import { createContext  } from "react";
import app from "../Firebase/Firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth,  signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProviders = ({ children }) => {


    // Sign Up with google
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // User create with Email and password 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Sign Up with Github
    const loginWithGitHub = () => {
        return signInWithPopup(auth, githubProvider)
    }
    // LogIn with email and password
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // LogOut function
    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        loginWithGoogle,
        loginWithGitHub,
        logIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;