import gql from "graphql-tag";

export const FetchUser = gql`
    query user($userId: String!, $fetchDb: Boolean) {
        user(userId: $userId, fetchDb: $fetchDb)
    }
`;

export const FetchUserGuilds = gql`
    query userGuilds($auth: String!, $page: Int, $fetchDb: Boolean, $perPage: Int) {
        userGuilds(auth: $auth, page: $page, fetchDb: $fetchDb, perPage: $perPage)
    }
`;