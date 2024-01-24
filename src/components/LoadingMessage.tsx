import { ProgressSpinner } from "primereact/progressspinner";

const LoadingMessage = ({
    message,
    subtext,
}: {
    message: string;
    subtext?: string;
}) => (
    <div className="flex flex-column align-items-center p-8">
        <ProgressSpinner
            style={{ width: "50px", height: "50px" }}
            strokeWidth="8"
            fill="var(--surface-ground)"
            animationDuration=".5s"
        />
        <h2 className="text-center">{message}</h2>
        {subtext && <p className="text-center">{subtext}</p>}
    </div>
);

export default LoadingMessage;
