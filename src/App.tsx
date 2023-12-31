import {useQuery} from "@apollo/client";
import {Route, Routes} from "react-router-dom";
import {FetchClientUser} from "./gql/client";

import {UnderDevelopment, BotLoading, BotOffline} from "./components/status";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home.tsx";
import ValorantWeapons from "./pages/valorant/ValorantWeapons.tsx";

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
                <Route path="/" element={<Home/>}/>
                <Route path="/valorant">
                    <Route path="weapons" element={<ValorantWeapons/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
        </div>
    );
};

export default App;
