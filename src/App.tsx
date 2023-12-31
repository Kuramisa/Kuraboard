import {useQuery} from "@apollo/client";
import {Route, Routes} from "react-router-dom";
import {FetchClientUser} from "./gql/client";

import {UnderDevelopment, BotLoading, BotOffline} from "./components/status";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

const {VITE_UNDER_DEV} = import.meta.env;

const App = () => {
    const {loading, error} = useQuery(FetchClientUser, {
        pollInterval: 100000
    });

    if (VITE_UNDER_DEV === "true") return <UnderDevelopment/>;

    if (loading) return <BotLoading/>;
    if (error) return <BotOffline/>;

    return (
        <div className="block">
            <Navigation/>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </div>
    );
};

export default App;
