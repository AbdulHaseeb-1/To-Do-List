import { createContext,useContext } from "react";

const AuthContext = createContext();

function AuthProvider({children}) {
    


    <AuthContext.Provider value={HandleSubmit}>
        {{children}}
    </AuthContext.Provider>
}

const Auth = ()=>useContext(AuthContext);