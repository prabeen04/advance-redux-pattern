import React from 'react'
import { useParams } from "react-router-dom";
export default function BlogDetail(props) {
  const params = useParams()
  return (
    <div>
      <h2>Blog Detail component</h2>
      <p>blog id: {params.id}</p>
    </div>
  )
}
