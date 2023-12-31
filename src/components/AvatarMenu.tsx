import {MenuItem} from "primereact/menuitem";
import {SpeedDial} from "primereact/speeddial";
import {useNavigate} from "react-router-dom";

import {BiLogOutCircle, BiUserCircle} from "react-icons/bi";
import {Avatar} from "primereact/avatar";
import PropTypes from "prop-types";

const AvatarMenu = ({auth}: { auth: any }) => {
    const navigate = useNavigate();

    const items: MenuItem[] = [
        {
            label: "Logout",
            icon: <BiLogOutCircle size="1.5rem" color="red"/>,
            command: () => navigate("/logout")
        },
        {
            label: "Profile",
            icon: <BiUserCircle size="1.5rem" color="cyan"/>,
            command: () => navigate("/profile")
        }
    ];

    return (
        <SpeedDial
            className="fadeinright"
            model={items}
            radius={120}
            buttonTemplate={({onClick}) => (
                <Avatar
                    image={auth.avatarURL}
                    size="xlarge"
                    shape="circle"
                    className="p-shadow-8"
                    onClick={onClick}
                />
            )}
            type="quarter-circle"
            direction="down-left"
        />
    );
};

AvatarMenu.propTypes = {
    auth: PropTypes.object.isRequired
};

export default AvatarMenu;