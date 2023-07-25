import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const authLink = (id: string) =>
  setContext(
    () =>
      new Promise((resolve) => {
        console.log("client id: ", id);
        resolve({});
      })
  );

export const create = (id: string) =>
  new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: ApolloLink.from([authLink(id)]),
  });
