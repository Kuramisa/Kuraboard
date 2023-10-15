import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider.tsx";
import {Navigate} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {LoginUser} from "../gql/auth.tsx";

const Login = () => {
    const {auth, login} = useContext(AuthContext);

    if (auth) return <Navigate to="/" replace={true}/>;

    const code = window.location.search.split("=")[1];

    const {data, error} = useQuery(LoginUser, {
        variables: {code: Buffer.from(code).toString("base64")},
    });

    if (error) return <Navigate to="/" replace={true}/>;

    if (data) {
        login(data.login);
        return <Navigate to="/" replace={true}/>;
    }

    return <></>;

};

export default Login;
