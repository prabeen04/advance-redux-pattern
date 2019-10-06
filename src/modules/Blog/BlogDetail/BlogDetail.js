import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { selectBlogById } from '../BlogSelector';
import { getBlogById } from '../BlogAction';
export default function BlogDetail(props) {
  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const [blogId, setBlogId] = useState(id)
  const { data, isLoading } = useSelector(selectBlogById)
  useEffect(() => {
    dispatch(getBlogById(id))
  }, [blogId])
  if (!data) return null
  if (isLoading) return <p>Loading...</p>
  return (
    <div>
      <h2>Blog Detail component</h2>
      <button onClick={() => {
        setBlogId(Number(blogId) + 1)
        history.push(`/blog/${blogId}`)
      }
      }
      >next</button>
      <button>prev</button>
      <p>ID: {data.id}</p>
      <p>TITLE: {data.title}</p>
      <p>DESCRIPTION: {data.description}</p>
    </div>
  )
}
