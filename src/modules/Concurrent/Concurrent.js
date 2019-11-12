import React, { Suspense, SuspenseList } from "react";
import ProfileDetails from "./CCUser";
import ProfileTimeline from "./CCPost";

export default function Concurrent() {
  return (
    <>
      <SuspenseList>
        <Suspense fallback={<h1>Loading profile...</h1>}>
          <ProfileDetails />
        </Suspense>
        <Suspense fallback={<h3>Loading posts...</h3>}>
          <ProfileTimeline />
        </Suspense>
      </SuspenseList>
    </>
  );
}
