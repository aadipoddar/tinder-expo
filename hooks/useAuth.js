import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import * as Google from 'expo-google-app-auth'
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
    signOut
} from 'firebase/auth'
import { auth } from '../firebase'

const AuthContext = createContext({})

const config = {
    androidClientId:
        '26037944718-fprsanoi5jfg5qbg08qmtp9dorsocfle.apps.googleusercontent.com',
    iosClientId:
        '26037944718-pkjuh6bn4d1p1s5prdtkdjsk4o0885ut.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
    permissions: ['public_profile', 'email', 'gender', 'location'],
}

export const AuthProvider = ({ children }) => {

    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)
    const [loadingInitial, setLoadingInitial] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() =>
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
            setLoadingInitial(false)
        }), [])

    const logout = () => {
        setLoading(true)

        signOut(auth)
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }

    const signInWithGoogle = async () => {
        setLoading(true)

        await Google.logInAsync(config).then(async (loginResult) => {
            if (loginResult.type == 'success') {
                const { idToken, accessToken } = loginResult
                const credentials = GoogleAuthProvider.credential(idToken, accessToken)
                await signInWithCredential(auth, credentials)
            }
            return Promise.reject()
        })
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }

    const memoedValue = useMemo(() => ({
        user,
        loading,
        error,
        signInWithGoogle,
        logout
    }), [user, loading, error])

    return (
        <AuthContext.Provider value={memoedValue}>
            {!loadingInitial && children}
        </AuthContext.Provider >
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}