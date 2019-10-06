import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { selectBlogById } from '../BlogSelector';
import { getBlogById } from '../BlogAction';
export default function BlogDetail(props) {
  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const { data, isLoading } = useSelector(selectBlogById)
  useEffect(() => {
    dispatch(getBlogById(id))
  }, [id])
  if (!data) return null
  if (isLoading) return <p>Loading...</p>
  return (
    <div>
      <h2>Blog Detail component</h2>
      <button onClick={() => history.push(`/${id++}`)}>next</button>
      <button>prev</button>
      <p>ID: {data.id}</p>
      <p>TITLE: {data.title}</p>
      <p>DESCRIPTION: {data.description}</p>
    </div>
  )
}
