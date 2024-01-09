import PropTypes from "prop-types";
import { Fragment, useContext, useRef } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Button, ButtonProps } from "primereact/button";

import { BiLogInCircle } from "react-icons/bi";
import AvatarMenu from "./AvatarMenu";
import Zoom from "react-reveal/Zoom";
import { useNavigate } from "react-router-dom";
import { authUrl } from "../exports.tsx";
import { MenuItem } from "primereact/menuitem";
import { TieredMenu } from "primereact/tieredmenu";

const buttons: (ButtonProps & { to?: string })[] = [
    {
        label: "Home",
        severity: "success",
        outlined: true,
        to: "/"
    },
    {
        label: "Valorant",
        severity: "danger",
        outlined: true
    }
];

const Navigation = () => {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const menu = useRef<TieredMenu>(null);

    const valorantMenu: MenuItem[] = [
        {
            label: "Weapons",
            command: () => navigate("/valorant/weapons")
        }
    ];

    return (
        <nav className="flex p-3 shadow-8 align-items-center justify-content-between">
            <div className="flex gap-2 align-items-center justify-content-start">
                <Zoom cascade left>
                    <img alt="Kuramisa" src="/logo.png" style={{ width: "64px" }} />
                    <h3>Kuramisa</h3>
                </Zoom>
                <div className="ml-3">
                    <TieredMenu
                        ref={menu}
                        popup
                        model={valorantMenu}
                        breakpoint="767px"
                    />
                    <div className="flex justify-content-between">
                        {buttons.map((button, index) => (
                            button.label === "Valorant" ? (
                                <Fragment key={index}>
                                    <Zoom cascade top>
                                        <Button
                                            className={`${index !== 0 ? "ml-1" : ""} border-noround`}
                                            outlined={button.outlined}
                                            severity={button.severity}
                                            onClick={(event) => menu.current?.toggle(event)}
                                        >
                                            <Zoom key={index} cascade top>
                                                <span key={index} className="font-semibold">
                                                    {button.label}
                                                </span>
                                            </Zoom>
                                        </Button>
                                    </Zoom>
                                </Fragment>
                            ) : (
                                <Zoom key={index} cascade top>
                                    <Button
                                        className={`${index !== 0 ? "ml-1" : ""} border-noround`}
                                        outlined={button.outlined}
                                        severity={button.severity}
                                        onClick={() => navigate(button.to ? button.to : "/")}
                                    >
                                        <Zoom cascade top>
                                            <span className="font-semibold">
                                                {button.label}
                                            </span>
                                        </Zoom>
                                    </Button>
                                </Zoom>
                            )
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex gap-2 align-items-center justify-content-end">
                {auth ? (
                    <AvatarMenu auth={auth} />
                ) : (
                    <Zoom cascade right>
                        <Button
                            label="Login"
                            severity="success"
                            outlined
                            onClick={() => window.open(authUrl, "_self")}
                            icon={<BiLogInCircle />}
                        />
                    </Zoom>
                )}
            </div>
        </nav>
    );
};

Navigation.propTypes = {
    bot: PropTypes.any
};

export default Navigation;
