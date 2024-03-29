import { useMutation } from "@apollo/client";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthUser } from "../gql/auth";
import { login, logout } from "../reducers/auth";

const AuthContext = createContext({
    auth: null as any,
    login: (userData: any) => userData,
    logout: () => {
        return;
    },
});

const AuthProvider = (props: any) => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.auth.user);

    const [authUser] = useMutation(AuthUser, {
        update: (_, { data: { authUser: authData } }) => {
            dispatch(login(authData));
        },
    });

    const loginUser = (token: string) => {
        localStorage.setItem("kuramisaToken", token);
        authUser({ variables: { auth: token } });
    };

    const logoutUser = () => {
        dispatch(logout());
        localStorage.removeItem("kuramisaToken");
    };

    return (
        <AuthContext.Provider
            value={{ auth: user, login: loginUser, logout: logoutUser }}
            {...props}
        />
    );
};

export { AuthContext, AuthProvider };
