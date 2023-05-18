/* eslint-disable react/prop-types */
import { createContext } from "react";
import app from "../Firebase/Firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProviders = ({children}) => {
    // Sign Up with google
    const loginWithGoogle = () =>{
       return signInWithPopup(auth, googleProvider)
    }
    // User create with Email and password 
    const createUser = (email, password ) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Sign Up with Github
    const loginWithGitHub = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    const authInfo ={
        createUser,
        loginWithGoogle,
        loginWithGitHub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider> 
    );
};

export default AuthProviders;