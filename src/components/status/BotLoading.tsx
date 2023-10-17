import {Image} from "primereact/image";

const BotLoading = () => {
    return (
        <div className="flex flex-column justify-content-center align-items-center" style={{height: "90vh"}}>
            <Image src="/logo.png" alt="" width="96px"/>
            <h2>Kuramisa</h2>
            <h3>Loading...</h3>
        </div>
    );
};

export default BotLoading;
