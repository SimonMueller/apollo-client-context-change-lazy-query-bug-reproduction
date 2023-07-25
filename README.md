# Apollo client context change bug reproduction

## Description

When changing the apollo client instance of the `ApolloProvider` the refetch function provided by the `useLazyQuery` does not change and therefore an outdated version of the apollo client is used to make a request.

It works as expected and the refetch function changes when using `useQuery`.

## Reproduction

1. Run `npm ci` to install
2. Run `npm start` to start the app
3. Open the app in the browser
4. Open the console tab of the dev tools in the browser
5. Click the "Make request" button and observe the client id logged to the console
6. Click the "Change client"
7. Click the "Make request" button again and observe the client id which has not changed.
