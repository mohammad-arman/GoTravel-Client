import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //Google Signin
    const googleSignIn = () =>{
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        .catch(error=>{
            setError(error.message)
        })
        .finally(()=> setIsLoading(false))
    };
    //observe user
    useEffect(()=>{
        onAuthStateChanged(auth,  user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
    },[]);
    //logout user
    const logOut = () => {
        signOut(auth)
        .then(()=>{})
        .finally(()=> setIsLoading(false))
    };
    return{
        googleSignIn,
        logOut,
        user,
        setUser,
        error,
        setError,
        isLoading
    }
}
export default useFirebase;