import { Weapons } from "@valapi/valorant-api.com";
import { VWeaponCategory } from "../vite-env";
import { Tooltip } from "primereact/tooltip";
import { Fragment } from "react";

const ValorantWeaponTooltip = (
    { weapons, weapon, index, weaponType }: {
        weapons: Weapons.Weapons<"en-US">[];
        weapon: Weapons.Weapons<"en-US">;
        index: number,
        weaponType: VWeaponCategory
    }
) => {
    return (
        <Tooltip
            target={`.${weaponType.toLowerCase()}-${index}`}
            position={index === weapons.length - 1 ? "top" : "bottom"}
            mouseTrack mouseTrackLeft={10}
        >
            <div>
                <h2 className="text-center">Stats</h2>
                <h5>
                    Damages {weapon.weaponStats.damageRanges.map((range, index) => (
                        <Fragment key={index}>
                            <p className="ml-2">
                                {range.rangeStartMeters}m
                            - {range.rangeEndMeters}m: {range.headDamage} head
                            / {range.bodyDamage} body / {range.legDamage.toFixed(2)} leg
                            </p>
                        </Fragment>
                    ))}
                </h5>
                <h5>First Bullet
                    Accuracy: {weapon.weaponStats.firstBulletAccuracy}%</h5>
                <h5>Fire Rate: {weapon.weaponStats.fireRate} rounds/sec</h5>
                <h5>Magazine Size: {weapon.weaponStats.magazineSize} rounds/mag</h5>
                <h5>
                    Alt Fire: {weapon.weaponStats.altFireType
                        ? weapon.weaponStats.altFireType.split("::")[1]
                        : "None"}
                </h5>
                <h5>
                    Wall Penetration: {
                        weapon.weaponStats.wallPenetration.split("::")[1]
                    }
                </h5>
                <h5>
                    Equip Time: {weapon.weaponStats.equipTimeSeconds} {
                        weapon.weaponStats.equipTimeSeconds > 1
                            ? " seconds"
                            : " second"
                    }
                </h5>
                <h5>
                    Reload Time: {
                        weapon.weaponStats.reloadTimeSeconds
                    } {
                        weapon.weaponStats.reloadTimeSeconds > 1
                            ? " seconds"
                            : " second"
                    }
                </h5>
            </div>
        </Tooltip>
    );
};

export default ValorantWeaponTooltip;