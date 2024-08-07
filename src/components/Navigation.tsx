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
        to: "/",
    },
    {
        label: "Valorant",
        severity: "danger",
        outlined: true,
    },
    {
        label: "Legal",
        severity: "warning",
        outlined: true,
    },
];

const Navigation = () => {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const valorantMenuRef = useRef<TieredMenu>(null);
    const legalMenuRef = useRef<TieredMenu>(null);

    const valorantMenu: MenuItem[] = [
        {
            label: "Weapons",
            command: () => navigate("/valorant/weapons"),
        },
    ];

    if (auth)
        valorantMenu.unshift({
            label: "Store",
            command: () => navigate("/valorant/store/@me"),
        });

    const legalMenu: MenuItem[] = [
        {
            label: "Terms of Service",
            command: () => navigate("/tos"),
        },
        {
            label: "Privacy Policy",
            command: () => navigate("/privacy"),
        },
    ];

    return (
        <nav className="flex p-3 shadow-8 align-items-center justify-content-between">
            <div className="flex flex-wrap gap-2 align-items-center justify-content-start">
                <Zoom cascade left>
                    <img
                        alt="Kuramisa"
                        src="/logo.png"
                        style={{ width: "64px" }}
                    />
                </Zoom>
                <Zoom cascade top>
                    <h3>Kuramisa</h3>
                </Zoom>
                <div className="ml-3">
                    <TieredMenu
                        ref={valorantMenuRef}
                        popup
                        model={valorantMenu}
                        breakpoint="767px"
                    />
                    <TieredMenu
                        ref={legalMenuRef}
                        popup
                        model={legalMenu}
                        breakpoint="767px"
                    />
                    <div className="flex justify-content-between">
                        {buttons.map((button, index) =>
                            button.label === "Valorant" ||
                            button.label === "Legal" ? (
                                <Fragment key={index}>
                                    <Zoom cascade top>
                                        <Button
                                            className={`${index !== 0 ? "ml-1" : ""}`}
                                            outlined={button.outlined}
                                            severity={button.severity}
                                            onClick={(event) => {
                                                if (button.label === "Valorant")
                                                    valorantMenuRef.current?.toggle(
                                                        event,
                                                    );
                                                if (button.label === "Legal")
                                                    legalMenuRef.current?.toggle(
                                                        event,
                                                    );
                                            }}
                                        >
                                            <Zoom key={index} cascade top>
                                                <span
                                                    key={index}
                                                    className="font-semibold"
                                                >
                                                    {button.label}
                                                </span>
                                            </Zoom>
                                        </Button>
                                    </Zoom>
                                </Fragment>
                            ) : (
                                <Zoom key={index} cascade top>
                                    <Button
                                        className={`${index !== 0 ? "ml-1" : ""}`}
                                        outlined={button.outlined}
                                        severity={button.severity}
                                        onClick={() =>
                                            navigate(
                                                button.to ? button.to : "/",
                                            )
                                        }
                                    >
                                        <Zoom cascade top>
                                            <span className="font-semibold">
                                                {button.label}
                                            </span>
                                        </Zoom>
                                    </Button>
                                </Zoom>
                            ),
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 align-items-center justify-content-end">
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
    bot: PropTypes.any,
};

export default Navigation;
