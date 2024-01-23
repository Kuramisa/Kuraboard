import { MenuItem } from "primereact/menuitem";
import { SpeedDial } from "primereact/speeddial";
import { useNavigate } from "react-router-dom";

import { BiLogOutCircle, BiUserCircle } from "react-icons/bi";
import { Avatar } from "primereact/avatar";
import { Tooltip } from "primereact/tooltip";
import PropTypes from "prop-types";
import Zoom from "react-reveal/Zoom";

const AvatarMenu = ({ auth }: { auth: any }) => {
    const navigate = useNavigate();

    const items: MenuItem[] = [
        {
            label: "Logout",
            icon: <BiLogOutCircle size="1.5rem" color="red" />,
            command: () => navigate("/logout"),
        },
        {
            label: "Valorant Store",
            icon: <img src="/val_points.png" alt="Valorant" width="24px" />,
            command: () => navigate("/valorant/store/@me"),
        },
        {
            label: "Profile",
            icon: <BiUserCircle size="1.5rem" color="cyan" />,
            command: () => navigate("/profile"),
        },
    ];

    return (
        <>
            <Tooltip
                target=".user-profile-speeddial .p-speeddial-action"
                position="left"
            />
            <SpeedDial
                model={items}
                radius={90}
                className="user-profile-speeddial"
                buttonTemplate={({ onClick }) => (
                    <Zoom right cascade>
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
    auth: PropTypes.object.isRequired,
};

export default AvatarMenu;
