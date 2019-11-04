import React from "react";
import Card from "./Card";

export default function Loader(props) {
  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 100
      }}
    >
      <p>Loading ...</p>
    </Card>
  );
}
