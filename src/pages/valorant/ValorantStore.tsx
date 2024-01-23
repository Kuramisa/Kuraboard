import { FetchValorantStore } from "../../gql/valorant";
import { useQuery } from "@apollo/client";

import {
    TabPanel,
    TabPanelHeaderTemplateOptions,
    TabView,
} from "primereact/tabview";

import { Image } from "primereact/image";

import ErrorMessage from "../../components/ErrorMessage";
import LoadingMessage from "../../components/LoadingMessage";
import { Avatar } from "primereact/avatar";
import { Fragment } from "react";
import { Divider } from "primereact/divider";

const ValorantStore = () => {
    const {
        data: { store } = {},
        error,
        loading,
    } = useQuery(FetchValorantStore, {
        variables: {
            auth: localStorage.getItem("kuramisaToken"),
        },
    });

    if (loading) return <LoadingMessage message="Loading your store(s)..." />;
    if (error) return <ErrorMessage message={error.message} />;

    console.log(store);

    const headerTemplate = (
        options: TabPanelHeaderTemplateOptions,
        offer: any,
    ) => {
        return (
            <div
                className="flex align-items-center gap-2 p-3"
                style={{ cursor: "pointer" }}
                onClick={options.onClick}
            >
                <Avatar image={offer.account.card.displayIcon} shape="circle" />
                <span className="font-bold white-space-nowrap">
                    {offer.account.name}#{offer.account.tag} -{" "}
                    {offer.account.title.titleText}
                </span>
            </div>
        );
    };

    return (
        <div className="flex flex-col p-8 justify-content-center align-items-center">
            <TabView>
                {store.map((offer: any, index: number) => (
                    <TabPanel
                        key={index}
                        headerTemplate={(options) =>
                            headerTemplate(options, offer)
                        }
                        headerClassName="flex align-items-center justify-content-center m-2 bg-gray-800"
                        style={{
                            width: "100%",
                            borderRadius: "20px",
                            border: "1px solid #000",
                        }}
                    >
                        <div className="flex align-items-center justify-content-center">
                            {offer.offers.map((item: any, index: number) => (
                                <Fragment key={item.uuid}>
                                    <div className="p-5">
                                        <Image
                                            src={
                                                item.skin.levels[0]
                                                    .displayIcon ??
                                                item.skin.displayIcon
                                            }
                                            alt={item.skin.displayName}
                                            width="300px"
                                            height={300 / 4.3 + "px"}
                                        />
                                        <div className="p-3">
                                            <div className="flex align-items-center justify-content-center">
                                                <Image
                                                    src={
                                                        item.contentTier
                                                            .displayIcon
                                                    }
                                                    width="30px"
                                                    className="mr-2"
                                                    alt=""
                                                />
                                                <h3>{item.skin.displayName}</h3>
                                            </div>
                                            <div className="flex align-items-center justify-content-center">
                                                <Image
                                                    src="/val_points.png"
                                                    width="30px"
                                                    className="mr-2"
                                                    alt=""
                                                />
                                                <h3>
                                                    {
                                                        Object.values(
                                                            item.Cost,
                                                        )[0] as string
                                                    }
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    {offer.offers.length - 1 !== index && (
                                        <Divider layout="vertical" />
                                    )}
                                </Fragment>
                            ))}
                        </div>
                    </TabPanel>
                ))}
            </TabView>
        </div>
    );
};

export default ValorantStore;
