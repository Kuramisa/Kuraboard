import {ProgressSpinner} from "primereact/progressspinner";

const BotLoading = () => {
    return (
        <div className="flex flex-column justify-content-center align-items-center" style={{height: "90vh"}}>
            <img alt="Loading" src="/logo.png" style={{width: "96px"}}/>
            <ProgressSpinner style={{width: "128px", height: "128px", position: "absolute", top: "265px"}}
                             strokeWidth="2"
                             animationDuration="3s"/>
            <h2>Kuramisa</h2>
            <h3>Loading...</h3>
        </div>
    );
};

export default BotLoading;
