import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectBlogById } from '../BlogSelector';
import { getBlogById } from '../BlogAction';
export default function BlogDetail(props) {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { data, isLoading } = useSelector(selectBlogById)
  useEffect(() => {
    dispatch(getBlogById(id))
  }, [id])
  return (
    <div>
      <h2>Blog Detail component</h2>
      <p>blog id: {id}</p>
    </div>
  )
}
