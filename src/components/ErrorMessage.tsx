const ErrorMessage = ({
    message,
    subtext,
}: {
    message: string;
    subtext?: string;
}) => (
    <div className="flex flex-column align-items-center p-8">
        <h1 className="text-center">{message}</h1>
        {subtext && <p className="text-center">{subtext}</p>}
    </div>
);

export default ErrorMessage;
