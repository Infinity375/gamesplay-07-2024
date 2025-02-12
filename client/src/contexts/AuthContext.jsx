import { createContext, useContext } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext({
    userId: '',
    email: '',
    accessToken: '',
    isAuthenticate: false,
    changeAuthState: (authState = {}) => null,
    logout: () => null,
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState('auth', {});

    const changeAuthState = (state) => {
        localStorage.setItem('accessToken', state.accessToken);
        setAuthState(state);
    };

    const logout = () => {
        setAuthState(null);
    };

    const contextData = {
        userId: authState?.userId,
        email: authState?.email,
        accessToken: authState?.accessToken,
        isAuthenticate: !!authState?.email,
        changeAuthState,
        logout
    };
    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    const authData = useContext(AuthContext);
    return authData;
}