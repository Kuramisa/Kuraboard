import {ProgressSpinner} from "primereact/progressspinner";
import {Image} from "primereact/image";

const BotLoading = () => {
    return (
        <div className="flex flex-column justify-content-center align-items-center" style={{height: "90vh"}}>
            <div className="relative" style={{top: 0, left: 0}}>
                <ProgressSpinner
                    style={{width: "128px", height: "128px", top: 0, left: 0}}
                    strokeWidth="2"
                    animationDuration="3s"
                    className="relative"
                />
                <Image src="/logo.png" alt="" width="96px" style={{position: "absolute", top: 16, left: 16}}/>
            </div>
            <h2>Kuramisa</h2>
            <h3>Loading...</h3>
        </div>
    );
};

export default BotLoading;
