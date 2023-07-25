import React, { useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const SomeQuery = gql`
  query SomeQuery {
    someQuery
  }
`;

export default function Query() {
  const [, { refetch }] = useLazyQuery(SomeQuery);

  useEffect(() => {
    console.log("refetch callback changed");
  }, [refetch]);

  return <button onClick={() => refetch()}>Make request</button>;
}
