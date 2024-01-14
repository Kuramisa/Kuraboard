import {Weapons} from "@valapi/valorant-api.com";
import {VWeaponCategory} from "./vite-env";

export const filterWeaponsByCategory = (weapons: Weapons.Weapons<"en-US">[], category: VWeaponCategory) => weapons.filter(weapon => weapon.category.includes(category));
export const sortWeaponsByCost = (weapons: Weapons.Weapons<"en-US">[]) => weapons.sort((a, b) => (a.displayName === "Vandal" ? a.shopData.cost + 1 : a.shopData.cost) - b.shopData.cost);

export const filterAndSortWeapons = (weapons: Weapons.Weapons<"en-US">[], category: VWeaponCategory) => sortWeaponsByCost(filterWeaponsByCategory(weapons, category));