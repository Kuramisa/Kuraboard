import gql from "graphql-tag";

export const FetchValorantWeapons = gql`
    {
        weapons
    }
`;

export const FetchValorantWeapon = gql`
    query weapon($weaponUuid: String!, $withSkins: Boolean = false) {
        weapon(weaponUuid: $weaponUuid, withSkins: $withSkins)
    }
`;

export const FetchValorantSkins = gql`
    query skins($weaponUuid: String!, $sortAlphabetically: Boolean = false) {
        skins(weaponUuid: $weaponUuid, sortAlphabetically: $sortAlphabetically)
    }
`;
