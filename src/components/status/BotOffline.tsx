import {Button} from "primereact/button";

import {invUrl} from "../../exports";

const BotOffline = () => {
    return (
        <div
            className="flex flex-column justify-content-center align-items-center"
            style={{height: "90vh", lineHeight: 0}}
        >
            <img
                alt="Offline"
                src="/logo.png"
                style={{width: "96px"}}
            />
            <h2>Kuramisa</h2>
            <h3 className="text-red-500">Offline</h3>
            <h4>Please contact the developer</h4>
            <h5>or join</h5>
            <Button
                onClick={() => window.open(invUrl, "_self")}
                label="Our Support Server"
                severity="success"
                size="small"
                outlined
            />
        </div>
    );
};

export default BotOffline;
