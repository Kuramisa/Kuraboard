import { ApolloError, useQuery } from "@apollo/client";
import { FetchValorantSkins } from "../../gql/valorant";
import { DataScroller } from "primereact/datascroller";
import { Button } from "primereact/button";
import { IValorantWeapon, IValorantWeaponSkin } from "kuraboard";
import { Image } from "primereact/image";
import { Link } from "react-router-dom";

const ValorantDialogHeader = ({ weapon }: { weapon: IValorantWeapon }) => {
    return (
        <div className="flex align-items-center justify-content-center">
            <span className="font-bold white-space-nowrap">
                {weapon.displayName} Skins
            </span>
        </div>
    );
};

const ValorantDialogContent = ({ weapon }: { weapon: IValorantWeapon }) => {
    const { data: { skins } = {} } = useQuery(FetchValorantSkins, {
        variables: {
            weaponUuid: weapon.uuid,
            sortAlphabetically: true,
        },
    }) as {
        data: { skins: IValorantWeapon[] };
        loading: boolean;
        error?: ApolloError;
    };

    if (!skins) return <></>;

    const itemTemplate = (skin: IValorantWeaponSkin) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <Link to={`/valorant/skin/${skin.uuid}`}><img
                        className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
                        src={skin.levels[0].displayIcon}
                        alt={skin.displayName}
                    />
                    </Link>
                    <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-column gap-2">
                                <div className="flex gap-3">
                                    <div className="text-2xl font-bold text-900">
                                        <Link to={`/valorant/skin/${skin.uuid}`}>{skin.displayName}</Link>
                                    </div>

                                    <div className="text-lg font-bold text-900">
                                        <Image
                                            src="/val_points.png"
                                            width="24"
                                        />{" "}
                                        {skin.cost}
                                    </div>
                                </div>
                                {skin.levels.length > 1 && (
                                    <div className="flex gap-1">
                                        {skin.levels
                                            .slice(1)
                                            .map((level, index) => (
                                                <Button
                                                    key={index}
                                                    label={level.displayName
                                                        .replace(
                                                            skin.displayName,
                                                            "",
                                                        )
                                                        .trim()}
                                                    severity="secondary"
                                                />
                                            ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <DataScroller
            value={skins}
            itemTemplate={itemTemplate}
            rows={skins.length}
            buffer={0.4}
        />
    );
};

export { ValorantDialogHeader, ValorantDialogContent };
