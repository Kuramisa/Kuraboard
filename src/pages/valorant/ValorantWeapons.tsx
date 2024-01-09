import { ApolloError, useQuery } from "@apollo/client";
import { FetchValorantWeapons } from "../../gql/valorant.tsx";
import { Weapons } from "@valapi/valorant-api.com";
import { Image } from "primereact/image";
import { filterAndSortWeapons } from "../../../util.tsx";
import { Fragment } from "react";
import { Divider } from "primereact/divider";

import ValorantWeaponTooltip from "../../components/ValorantWeaponTooltip.tsx";


// TODO: Valorant Weapon Page with Skins on image click
const ValorantWeapons = () => {
    const { data: { weapons } = {}, loading, error } = useQuery(FetchValorantWeapons) as {
        data: { weapons: Weapons.Weapons<"en-US">[] },
        loading: boolean,
        error?: ApolloError
    };

    if (loading) return <></>;
    if (error) return <></>;
    if (!weapons) return <></>;

    const sidearms = filterAndSortWeapons(weapons, "Sidearm");
    const smgs = filterAndSortWeapons(weapons, "SMG");
    const shotguns = filterAndSortWeapons(weapons, "Shotgun");
    const rifles = filterAndSortWeapons(weapons, "Rifle");
    const snipers = filterAndSortWeapons(weapons, "Sniper");
    const heavies = filterAndSortWeapons(weapons, "Heavy");

    return (
        <div className="flex flex-column p-3 justify-content-center align-items-center">
            <h1>Valorant Weapons</h1>
            <div className="flex shadow-8 justify-content-between text-center">
                <div className="grid">
                    <div className="col">
                        <Divider align="center">
                            <h2>Sidearm</h2>
                        </Divider>
                        {sidearms.map(((weapon, index) => (
                            <Fragment key={weapon.uuid}>
                                <ValorantWeaponTooltip
                                    weapons={sidearms}
                                    weapon={weapon}
                                    index={index}
                                    weaponType="Sidearm"
                                />
                                <div className="flex p-2 flex-column align-items-center">
                                    <Image
                                        src={weapon.displayIcon}
                                        alt={weapon.displayName} width="86"
                                        className={`sidearm-${index}`}
                                    />
                                    <div className="flex flex-column align-items-center">
                                        <p>{weapon.displayName}</p>
                                        <div className="flex align-items-center justify-content-center">
                                            <Image
                                                src="/credits_icon.webp"
                                                width="16"
                                            />
                                            <p className="ml-1 pb-1">{weapon.shopData.cost}</p>
                                        </div>
                                    </div>
                                    {index !== sidearms.length - 1 && <Divider type="dashed" />}
                                </div>
                            </Fragment>
                        )))}
                    </div>
                    <Divider layout="vertical" />
                    <div className="col">
                        <div className="grid">
                            <div className="col">
                                <Divider align="center">
                                    <h2>SMGs</h2>
                                </Divider>
                                {smgs.map(((weapon, index) => (
                                    <Fragment key={weapon.uuid}>
                                        <ValorantWeaponTooltip
                                            weapons={smgs}
                                            weapon={weapon}
                                            index={index}
                                            weaponType="SMG"
                                        />
                                        <div className="flex p-2 flex-column align-items-center">
                                            <Image
                                                src={weapon.displayIcon}
                                                alt={weapon.displayName} width="128"
                                                className={`smg-${index}`}
                                            />
                                            <div className="flex flex-column align-items-center">
                                                <p>{weapon.displayName}</p>
                                                <div className="flex align-items-center justify-content-center">
                                                    <Image
                                                        src="/credits_icon.webp"
                                                        width="16"
                                                    />
                                                    <p className="ml-1 pb-1">{weapon.shopData.cost}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                )))}
                            </div>
                            <div className="col">
                                <Divider align="center">
                                    <h2>Shotguns</h2>
                                </Divider>
                                {shotguns.map(((weapon, index) => (
                                    <Fragment key={weapon.uuid}>
                                        <ValorantWeaponTooltip
                                            weapons={shotguns}
                                            weapon={weapon}
                                            index={index}
                                            weaponType="Shotgun"
                                        />
                                        <div className="flex p-2 flex-column align-items-center">
                                            <Image
                                                src={weapon.displayIcon}
                                                alt={weapon.displayName} width="128"
                                                className={`shotgun-${index}`}
                                            />
                                            <div className="flex flex-column align-items-center">
                                                <p>{weapon.displayName}</p>
                                                <div className="flex align-items-center justify-content-center">
                                                    <Image
                                                        src="/credits_icon.webp"
                                                        width="16"
                                                    />
                                                    <p className="ml-1 pb-1">{weapon.shopData.cost}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {index !== shotguns.length - 1 && <Divider type="dashed" />}
                                    </Fragment>
                                )))}
                            </div>
                        </div>
                    </div>
                    <Divider layout="vertical" />
                    <div className="col">
                        <Divider align="center">
                            <h2>Rifles</h2>
                        </Divider>
                        {rifles.map(((weapon, index) => (
                            <Fragment key={weapon.uuid}>
                                <ValorantWeaponTooltip
                                    weapons={rifles}
                                    weapon={weapon}
                                    index={index}
                                    weaponType="Rifle"
                                />
                                <div className="flex p-2 flex-column align-items-center">
                                    <Image
                                        src={weapon.displayIcon}
                                        alt={weapon.displayName} width="128"
                                        className={`rifle-${index}`}
                                    />
                                    <div className="flex flex-column align-items-center">
                                        <p>{weapon.displayName}</p>
                                        <div className="flex align-items-center justify-content-center">
                                            <Image
                                                src="/credits_icon.webp"
                                                width="16"
                                            />
                                            <p className="ml-1 pb-1">{weapon.shopData.cost}</p>
                                        </div>
                                    </div>
                                </div>
                                {index !== rifles.length - 1 && <Divider type="dashed" />}
                            </Fragment>
                        )))}
                    </div>
                    <Divider layout="vertical" />
                    <div className="col">
                        <div className="grid">
                            <div className="col">
                                <Divider align="center">
                                    <h2>Sniper</h2>
                                </Divider>
                                {snipers.map(((weapon, index) => (
                                    <Fragment key={weapon.uuid}>
                                        <ValorantWeaponTooltip
                                            weapons={snipers}
                                            weapon={weapon}
                                            index={index}
                                            weaponType="Sniper"
                                        />
                                        <div className="flex p-2 flex-column align-items-center">
                                            <Image
                                                src={weapon.displayIcon}
                                                alt={weapon.displayName} width="128"
                                                className={`sniper-${index}`}
                                            />
                                            <div className="flex flex-column align-items-center">
                                                <p>{weapon.displayName}</p>
                                                <div className="flex align-items-center justify-content-center">
                                                    <Image
                                                        src="/credits_icon.webp"
                                                        width="16"
                                                    />
                                                    <p className="ml-1 pb-1">{weapon.shopData.cost}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {index !== snipers.length - 1 && <Divider type="dashed" />}
                                    </Fragment>
                                )))}
                            </div>
                            <div className="col">
                                <Divider align="center">
                                    <h2>Heavy</h2>
                                </Divider>
                                {heavies.map(((weapon, index) => (
                                    <Fragment key={weapon.uuid}>
                                        <ValorantWeaponTooltip
                                            weapons={heavies}
                                            weapon={weapon}
                                            index={index}
                                            weaponType="Heavy"
                                        />
                                        <div className="flex p-2 flex-column align-items-center">
                                            <Image
                                                src={weapon.displayIcon}
                                                alt={weapon.displayName} width="128"
                                                className={`heavy-${index}`}
                                            />
                                            <div className="flex flex-column align-items-center">
                                                <p>{weapon.displayName}</p>
                                                <div className="flex align-items-center justify-content-center">
                                                    <Image
                                                        src="/credits_icon.webp"
                                                        width="16"
                                                    />
                                                    <p className="ml-1 pb-1">{weapon.shopData.cost}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {index !== heavies.length - 1 && <Divider type="dashed" />}
                                    </Fragment>
                                )))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValorantWeapons;