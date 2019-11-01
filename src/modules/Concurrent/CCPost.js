import React from "react";
import { fetchProfileData } from "./fakeApi";

const resource = fetchProfileData();

export default function ProfileTimeline() {
  const posts = resource.posts.read();
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}
