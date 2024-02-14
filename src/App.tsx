import { useQuery } from "@apollo/client";
import { Route, Routes } from "react-router-dom";
import { FetchClientUser } from "./gql/client";

import { UnderDevelopment, BotLoading, BotOffline } from "./components/status";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home.tsx";

import NotFound from "./pages/NotFound.tsx";

import ValorantWeapons from "./pages/valorant/ValorantWeapons.tsx";
import ValorantStore from "./pages/valorant/ValorantStore.tsx";
import ValorantSkin from "./pages/valorant/ValorantSkin.tsx";

const { VITE_UNDER_DEV } = import.meta.env;

const App = () => {
    const { loading, error } = useQuery(FetchClientUser, {
        pollInterval: 100000,
    });

    if (VITE_UNDER_DEV === "true") return <UnderDevelopment />;

    if (loading) return <BotLoading />;
    if (error) return <BotOffline />;

    return (
        <div className="block">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/valorant">
                    <Route path="store">
                        <Route path="@me" element={<ValorantStore />} />
                        <Route path=":userId" element={<ValorantStore />} />
                    </Route>
                    <Route path="weapons" element={<ValorantWeapons />} />
                    <Route path="skin">
                        <Route path=":skinUuid" element={<ValorantSkin />} />
                    </Route>
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div >
    );
};

export default App;
