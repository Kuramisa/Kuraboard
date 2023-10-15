import {useQuery} from "@apollo/client";
import {FetchClient} from "./gql/client.tsx";

import {UnderDevelopment, BotLoading, BotOffline} from "./components/status";

const {VITE_UNDER_DEV} = import.meta.env;

const App = () => {
    const {loading, error: botError} = useQuery(FetchClient, {
        pollInterval: 100000
    });

    if (VITE_UNDER_DEV === "true") return <UnderDevelopment/>;

    if (loading) return <BotLoading/>;
    if (botError) return <BotOffline/>;

    return (
        <></>
    );
};

export default App;
