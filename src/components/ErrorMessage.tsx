const ErrorMessage = ({
    message,
    subtext,
}: {
    message: string;
    subtext?: string;
}) => (
    <div className="flex flex-column align-items-center">
        <h2 className="text-center">{message}</h2>
        {subtext && <p className="text-center" style={{ marginTop: -1 }}>{subtext}</p>}
    </div>
);

export default ErrorMessage;
