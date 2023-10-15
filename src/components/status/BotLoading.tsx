import {ProgressSpinner} from "primereact/progressspinner";

const BotLoading = () => {
    return (
        <div className="flex flex-column justify-content-center align-items-center" style={{height: "90vh"}}>

            <ProgressSpinner style={{width: "128px", height: "128px"}}
                             strokeWidth="2"
                             animationDuration="3s"/>
            <img alt="Loading" src="/logo.png" style={{width: "96px", position: "absolute", top: "33vh"}}/>
            <h2>Kuramisa</h2>
            <h3>Loading...</h3>
        </div>
    );
};

export default BotLoading;
