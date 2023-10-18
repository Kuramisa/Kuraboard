import PropTypes from "prop-types";
import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider.tsx";
import {Button} from "primereact/button";

import {BiLogInCircle} from "react-icons/bi";

const authUrl = process.env.NODE_ENV === "production"
    ? "https://discord.com/api/oauth2/authorize?client_id=969414951292788766&redirect_uri=https%3A%2F%2Fkuramisa.com%2Flogin&response_type=code&scope=guilds%20identify"
    : "https://discord.com/api/oauth2/authorize?client_id=969414951292788766&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Flogin&response_type=code&scope=guilds%20identify";

const Navigation = () => {
    const {auth} = useContext(AuthContext);

    return (
        <nav className="flex p-3 shadow-8 align-items-center justify-content-between">
            <div className="flex gap-2 align-items-center justify-content-start">
                <img alt="Kuramisa" src="/logo.png" style={{width: "64px"}}/>
                <h3>Kuramisa</h3>
            </div>
            <div className="flex gap-2 align-items-center justify-content-center">
            </div>
            <div className="flex gap-2 align-items-center justify-content-end">
                {auth ? (
                    <></>
                ) : (
                    <Button
                        label="Login"
                        severity="success"
                        outlined
                        onClick={() => window.open(authUrl, "_self")}
                        icon={<BiLogInCircle/>}
                    />
                )}
            </div>
        </nav>
    );
};

Navigation.propTypes = {
    bot: PropTypes.any
};

export default Navigation;
