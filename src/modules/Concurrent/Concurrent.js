import React, { Suspense } from "react";
import ProfileDetails from "./CCUser";
import ProfileTimeline from "./CCPost";

export default function Concurrent() {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails />
      <Suspense fallback={<h3>Loading posts...</h3>}>
        <ProfileTimeline />
      </Suspense>
    </Suspense>
  );
}
