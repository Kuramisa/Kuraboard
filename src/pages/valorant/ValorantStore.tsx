import { useQuery } from "@apollo/client";

import capitalize from "lodash/capitalize";

import { Avatar } from "primereact/avatar";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

import ValorantDailyStore from "../../components/valorant/ValorantDailyStore";
import { FetchUser } from "../../gql/users";

const ValorantStore = () => {
    const { auth } = useContext(AuthContext);
    const { userId } = useParams();

    const [storeType] = useState<"daily" | "featured" | "accessory">("daily");

    const { data: { user } = {} } = useQuery(FetchUser, {
        variables: {
            userId: userId ?? auth.id,
        },
    });

    if (!user) return <></>;

    return (
        <div className="flex flex-column p-8 justify-content-center align-items-center">
            <div className="flex flex-column align-items-center justify-content-center">
                <Avatar image={user.avatarURL} shape="circle" size="xlarge" />
                <h1 className="font-bold text-3xl">
                    {user.username !== auth.username
                        ? `${user.globalName ?? user.username}'s`
                        : "Your"}{" "}
                    {capitalize(storeType)} Store
                </h1>
            </div>
            {storeType === "daily" && <ValorantDailyStore userId={userId} />}
        </div>
    );
};

export default ValorantStore;
