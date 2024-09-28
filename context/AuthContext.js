import React from 'react';
import {
    onAuthStateChanged,
    getAuth,
} from 'firebase/auth';
import firebase_app from '@/firebase/config';

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({
    children,
}) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <main className="bg-gradient-to-b from-dark to-lighterDark min-h-screen grid place-items-center p-7 md:p-10">
                <div className="w-72 h-14 bg-gray-700 rounded-lg animate-pulse flex items-center justify-center">
                    <p className='text-gray-400 font-medium'>Loading...</p>
                </div>
            </main> : children}
        </AuthContext.Provider>
    );
};