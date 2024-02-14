import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { FetchValorantSkin } from "../../gql/valorant";

const ValorantSkin = () => {
    const { skinUuid } = useParams();

    const { data: { skin } = {}, error, loading } = useQuery(FetchValorantSkin, {
        variables: {
            skinUuid,
        },
    });

    console.log({ skin, error, loading });

    return <div>{skinUuid}</div>;
}

export default ValorantSkin;