import { createContext,useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({children}) {
    function HandleSubmit(userdata) {

        console.log(userdata);
    }

    return <AuthContext.Provider value={HandleSubmit}>
        {children}
    </AuthContext.Provider>
}

export const Auth = ()=>useContext(AuthContext);