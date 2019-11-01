import React from "react";
import { fetchProfileData } from "./fakeApi";

const resource = fetchProfileData();

export default function ProfileDetails() {
  const user = resource.user.read();
  return <h1>{user.name}</h1>;
}
