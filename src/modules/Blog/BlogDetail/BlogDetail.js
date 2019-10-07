import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import { selectBlogById } from '../BlogSelector';
import { getBlogById } from '../BlogAction';
export default function BlogDetail(props) {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [blogId, setBlogId] = useState(id)
  const { data, isLoading } = useSelector(selectBlogById)
  useEffect(() => {
    dispatch(getBlogById(blogId))
  }, [blogId])
  if (!data) return null
  if (isLoading) return <p>Loading...</p>
  return (
    <div>
      <Button variant="contained" onClick={() => {
        setBlogId(Number(blogId) + 1)
        props.history.push(`/blog/${Number(blogId) + 1}`)
      }}>Next</Button>
      <h2>Blog Detail component</h2>
      <p>ID: {data.id}</p>
      <p>TITLE: {data.title}</p>
      <p>DESCRIPTION: {data.description}</p>
    </div>
  )
}
