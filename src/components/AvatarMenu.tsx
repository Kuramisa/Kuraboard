import {MenuItem} from "primereact/menuitem";
import {SpeedDial} from "primereact/speeddial";
import {useNavigate} from "react-router-dom";

import {BiLogOutCircle, BiUserCircle} from "react-icons/bi";
import {Avatar} from "primereact/avatar";
import {Tooltip} from "primereact/tooltip";
import PropTypes from "prop-types";
import Zoom from "react-reveal/Zoom";

const AvatarMenu = ({auth}: { auth: any }) => {
    const navigate = useNavigate();

    const items: MenuItem[] = [
        {
            label: "Logout",
            icon: <BiLogOutCircle size="1.5rem" className="menu-button-logout" color="lightred"/>,
            command: () => navigate("/logout"),
        },
        {
            label: "Profile",
            icon: <BiUserCircle className="menu-button-profile" size="1.5rem" color="cyan"/>,
            command: () => navigate("/profile")
        }
    ];

    return (
        <>
            <Tooltip target=".p-speeddial-action .menu-button-logout" content="Logout" position="bottom"/>
            <Tooltip target=".p-speeddial-action .menu-button-profile" content="Profile" position="left"/>
            <SpeedDial
                model={items}
                radius={120}
                buttonTemplate={({onClick}) => (
                    <Zoom top cascade>
                        <Avatar
                            image={auth.avatarURL}
                            size="xlarge"
                            imageAlt="Avatar"
                            shape="circle"
                            className="p-shadow-8"
                            onClick={onClick}
                        />
                    </Zoom>
                )}
                type="quarter-circle"
                direction="down-left"
            />
        </>
    );
};

AvatarMenu.propTypes = {
    auth: PropTypes.object.isRequired
};

export default AvatarMenu;