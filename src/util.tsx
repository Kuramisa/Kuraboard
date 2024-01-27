import { IValorantWeapon, VWeaponCategory } from "kuraboard";

export const filterWeaponsByCategory = (
    weapons: IValorantWeapon[],
    category: VWeaponCategory,
) => weapons.filter((weapon) => weapon.category.includes(category));
export const sortWeaponsByCost = (weapons: IValorantWeapon[]) =>
    weapons.sort(
        (a, b) =>
            (a.displayName === "Vandal"
                ? a.shopData.cost + 1
                : a.shopData.cost) - b.shopData.cost,
    );

export const filterAndSortWeapons = (
    weapons: IValorantWeapon[],
    category: VWeaponCategory,
) => sortWeaponsByCost(filterWeaponsByCategory(weapons, category));
