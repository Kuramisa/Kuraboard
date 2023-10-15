import App from "../App";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "../reducers";

import {BrowserRouter as Router} from "react-router-dom";

import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    InMemoryCache
} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {onError} from "@apollo/client/link/error";
import {RetryLink} from "@apollo/client/link/retry";
import {createUploadLink} from "apollo-upload-client";

import {PrimeReactProvider} from "primereact/api";

const {VITE_SERVER_URL} = import.meta.env;

const httpLink = createUploadLink({
    uri: VITE_SERVER_URL,
});

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem("kuramisaToken");
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    };
});

const errorLink = onError(({graphQLErrors, networkError}) => {
    if (process.env.NODE_ENV !== "development") return;
    if (graphQLErrors) {
        graphQLErrors.forEach(({message, locations, path}) => {
            console.log(
                `[GraphQL Error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            );
        });
    }
    if (networkError) console.log(`[Network Error]: ${networkError}`);
});

const retryLink = new RetryLink({
    delay: {
        initial: 300,
        max: Infinity,
        jitter: true
    },
    attempts: {
        max: 5,
        retryIf: (error) => !!error
    }
});

const link = ApolloLink.from([retryLink, errorLink, authLink, httpLink]);
const cache = new InMemoryCache();

const client = new ApolloClient({
    link,
    cache,
    credentials: "include"
});

export default (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ApolloProvider client={client}>
                <PrimeReactProvider>
                    <Router>
                        <App/>
                    </Router>
                </PrimeReactProvider>
            </ApolloProvider>
        </PersistGate>
    </Provider>
);
