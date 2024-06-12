import { gql } from "@apollo/client";

export const CONTINENTS_QUERY = gql`
    query ContinentsQuery {
        continents {
            code,
            name
        }
    }
`;

export const COUNTRIES_QUERY = gql`
    query Continent($code: ID!) {
        continent(code: $code) {
            countries {
                code,
                name
            }
        }
    }
`;

export const COUNTRY_QUERY = gql`
    query Country($code: ID!) {
        country(code: $code) {
            code
            name
            continent {
                name
            }
            currency
            languages {
                name
                native
            }
            native
            phone
            states {
                name
            }
        }
    }
`;
