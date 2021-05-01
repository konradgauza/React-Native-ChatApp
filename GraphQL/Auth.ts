import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { Socket as PhoenixSocket } from "phoenix";
import { hasSubscription } from "@jumpn/utils-graphql";
import { split } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";


const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MjE1MDY1NTYsImlhdCI6MTYxOTA4NzM1NiwiaXNzIjoiY2hhdGx5IiwianRpIjoiZTVkYTk1YjUtYzRkOC00NmMyLWI2NGEtOGYxNjMzN2UzNmJlIiwibmJmIjoxNjE5MDg3MzU1LCJzdWIiOiI4Y2IzZGRlNC1iZTRjLTRhYmQtYmI0ZS05MWE0NWI4MDk3ZGUiLCJ0eXAiOiJhY2Nlc3MifQ.YXmANaLyeh7kBM2QpA1bSIj9rpQXb86mp-g03sv7My24DvsPs4SO3E2J4spYWsU0i8McPUw9G7S0laGSAVSxjg";

const httpLink = createHttpLink({
    uri: "https://chat.thewidlarzgroup.com/api/graphql"
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`
        }
    };
});

const authedHttpLink = authLink.concat(httpLink);

const phoenixSocket = new PhoenixSocket("wss://chat.thewidlarzgroup.com/socket", {
    params: () => {
        return token;
    }
});

const absintheSocket = AbsintheSocket.create(phoenixSocket);

const websocketLink = createAbsintheSocketLink(absintheSocket);

const link = split(
    operation => hasSubscription(operation.query),
    websocketLink,
    authedHttpLink
);

const cache = new InMemoryCache();

export const client = new ApolloClient({
    link,
    cache
});