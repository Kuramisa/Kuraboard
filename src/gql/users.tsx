import gql from "graphql-tag";

export const FetchUser = gql`
    query user($userId: String!, $fetchDb: Boolean) {
        user(userId: $userId, fetchDb: $fetchDb)
    }
`;
