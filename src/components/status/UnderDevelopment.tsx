import {Button} from "primereact/button";

const invUrl = "https://discord.com/invite/T95vjSCM";

const UnderDevelopment = () => {
    return (
        <div
            className="flex flex-column justify-content-center align-items-center"
            style={{height: "90vh", lineHeight: 0.5}}
        >
            <img alt="Under Development" src="/logo.png" style={{width: "96px"}}/>
            <h2>Kuramisa</h2>
            <h3>Under Development</h3>
            <h4>Please check back later ^^</h4>
            <h4>Meanwhile you can join</h4>
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

export default UnderDevelopment;
