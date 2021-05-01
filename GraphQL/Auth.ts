import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

const httpLink = new HttpLink({
    uri: "https://chat.thewidlarzgroup.com/api/graphql"
});

const authLink = setContext((_, { headers }) => {
    const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MjE1MDY1NTYsImlhdCI6MTYxOTA4NzM1NiwiaXNzIjoiY2hhdGx5IiwianRpIjoiZTVkYTk1YjUtYzRkOC00NmMyLWI2NGEtOGYxNjMzN2UzNmJlIiwibmJmIjoxNjE5MDg3MzU1LCJzdWIiOiI4Y2IzZGRlNC1iZTRjLTRhYmQtYmI0ZS05MWE0NWI4MDk3ZGUiLCJ0eXAiOiJhY2Nlc3MifQ.YXmANaLyeh7kBM2QpA1bSIj9rpQXb86mp-g03sv7My24DvsPs4SO3E2J4spYWsU0i8McPUw9G7S0laGSAVSxjg";

    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`
        }
    }
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
})