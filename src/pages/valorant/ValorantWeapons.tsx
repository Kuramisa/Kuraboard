import {ApolloError, useQuery} from "@apollo/client";
import {FetchValorantWeapons} from "../../gql/valorant.tsx";
import {Weapons} from "@valapi/valorant-api.com";
import {Image} from "primereact/image";
import {filterAndSortWeapons} from "../../../util.tsx";
import {Fragment, useState} from "react";
import {Divider} from "primereact/divider";

const ValorantWeapons = () => {
    const {data: {weapons} = {}, loading, error} = useQuery(FetchValorantWeapons) as {
        data: { weapons: Weapons.Weapons<"en-US">[] },
        loading: boolean,
        error?: ApolloError
    };

    // TODO: Remove this later
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [currentWeapon, setCurrentWeapon] = useState<Weapons.Weapons<"en-US"> | null>(null);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (!weapons) return <p>No weapons found</p>;

    const sidearms = filterAndSortWeapons(weapons, "Sidearm");
    const smgs = filterAndSortWeapons(weapons, "SMG");
    const shotguns = filterAndSortWeapons(weapons, "Shotgun");
    const rifles = filterAndSortWeapons(weapons, "Rifle");
    const snipers = filterAndSortWeapons(weapons, "Sniper");
    const heavies = filterAndSortWeapons(weapons, "Heavy");

    const changeCurrentWeapon = (weapon?: Weapons.Weapons<"en-US">) => {
        setCurrentWeapon(weapon ?? null);
    };

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
                                <div className="flex p-2 flex-column align-items-center">
                                    <Image
                                        onClick={() => changeCurrentWeapon(weapon)}
                                        src={weapon.displayIcon}
                                        alt={weapon.displayName} width="128"
                                    />
                                    <p>{weapon.displayName}</p>
                                    {index !== sidearms.length - 1 && <Divider type="dashed"/>}
                                </div>
                            </Fragment>
                        )))}
                    </div>
                    <Divider layout="vertical"/>
                    <div className="col">
                        <div className="grid">
                            <div className="col">
                                <Divider align="center">
                                    <h2>SMGs</h2>
                                </Divider>
                                {smgs.map(weapon => (
                                    <div key={weapon.uuid} className="flex p-2 flex-column align-items-center">
                                        <Image
                                            onClick={() => changeCurrentWeapon(weapon)}
                                            src={weapon.displayIcon}
                                            alt={weapon.displayName} width="128"
                                        />
                                        <p>{weapon.displayName}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="col">
                                <Divider align="center">
                                    <h2>Shotguns</h2>
                                </Divider>
                                {shotguns.map(((weapon, index) => (
                                    <Fragment key={weapon.uuid}>
                                        <div className="flex p-2 flex-column align-items-center">
                                            <Image
                                                onClick={() => changeCurrentWeapon(weapon)}
                                                src={weapon.displayIcon}
                                                alt={weapon.displayName} width="128"
                                            />
                                            <p>{weapon.displayName}</p>
                                        </div>
                                        {index !== shotguns.length - 1 && <Divider type="dashed"/>}
                                    </Fragment>
                                )))}
                            </div>
                        </div>
                    </div>
                    <Divider layout="vertical"/>
                    <div className="col">
                        <Divider align="center">
                            <h2>Rifles</h2>
                        </Divider>
                        {rifles.map(((weapon, index) => (
                            <Fragment key={weapon.uuid}>
                                <div className="flex p-2 flex-column align-items-center">
                                    <Image
                                        onClick={() => changeCurrentWeapon(weapon)}
                                        src={weapon.displayIcon}
                                        alt={weapon.displayName} width="128"
                                    />
                                    <p>{weapon.displayName}</p>
                                </div>
                                {index !== rifles.length - 1 && <Divider type="dashed"/>}
                            </Fragment>
                        )))}
                    </div>
                    <Divider layout="vertical"/>
                    <div className="col">
                        <div className="grid">
                            <div className="col">
                                <Divider align="center">
                                    <h2>Sniper</h2>
                                </Divider>
                                {snipers.map(((weapon, index) => (
                                    <Fragment key={weapon.uuid}>
                                        <div className="flex p-2 flex-column align-items-center">
                                            <Image
                                                onClick={() => changeCurrentWeapon(weapon)}
                                                src={weapon.displayIcon}
                                                alt={weapon.displayName} width="128"
                                            />
                                            <p>{weapon.displayName}</p>
                                        </div>
                                        {index !== snipers.length - 1 && <Divider type="dashed"/>}
                                    </Fragment>
                                )))}
                            </div>
                            <div className="col">
                                <Divider align="center">
                                    <h2>Heavy</h2>
                                </Divider>
                                {heavies.map(((weapon, index) => (
                                    <Fragment key={weapon.uuid}>
                                        <div className="flex p-2 flex-column align-items-center">
                                            <Image
                                                onClick={() => changeCurrentWeapon(weapon)}
                                                src={weapon.displayIcon}
                                                alt={weapon.displayName} width="128"
                                            />
                                            <p>{weapon.displayName}</p>
                                        </div>
                                        {index !== heavies.length - 1 && <Divider type="dashed"/>}
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