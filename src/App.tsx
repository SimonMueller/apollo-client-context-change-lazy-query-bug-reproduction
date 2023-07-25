import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { create as createApolloClient } from "src/ApolloClient";
import Query from "src/Query";
import { v4 as uuid } from "uuid";

export default function App() {
  const [apolloClient, setApolloClient] = useState(
    createApolloClient("initial id")
  );

  return (
    <ApolloProvider client={apolloClient}>
      <Query></Query>
      <button onClick={() => setApolloClient(createApolloClient(uuid()))}>
        Change client
      </button>
    </ApolloProvider>
  );
}
