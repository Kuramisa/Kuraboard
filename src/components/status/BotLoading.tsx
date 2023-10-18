import {Image} from "primereact/image";

const BotLoading = () => {
    return (
        <div
            className="flex flex-column justify-content-center align-items-center"
            style={{height: "90vh", lineHeight: 0}}
        >
            <Image src="/logo.png" alt="" width="96px"/>
            <h2>Kuramisa</h2>
            <h4>Loading...</h4>
        </div>
    );
};

export default BotLoading;
