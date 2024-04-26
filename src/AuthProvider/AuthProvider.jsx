
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    // Login Provider 
    // const googleProvider = new GoogleAuthProvider();
    // const githubProvider = new GithubAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }



    const authInfo = {
        user,
        loading,
        createUser,
        setUser,
        setLoading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}