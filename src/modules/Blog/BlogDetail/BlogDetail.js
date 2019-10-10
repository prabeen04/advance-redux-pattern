import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import styled from 'styled-components';
import { selectBlogById, selectAllBlogs } from '../BlogSelector';
import { getBlogById, getBlogs, } from '../BlogAction';
export default function BlogDetail(props) {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [blogId, setBlogId] = useState(null)
  const { data, isLoading } = useSelector(selectBlogById)
  const blogList = useSelector(selectAllBlogs).data
  debugger

  useEffect(() => {
    setBlogId(id)
    dispatch(getBlogs())
  }, [])
  useEffect(() => {
    dispatch(getBlogById(blogId))
  }, [blogId])
  if (!data) return null
  if (isLoading) return <p>Loading...</p>
  return (
    <div>
      <HeaderContainer>
        <Button
          color='primary'
          disabled={blogId > blogList.length || blogId == 1}
          variant="contained"
          onClick={() => {
            setBlogId(Number(blogId) - 1)
            props.history.push(`/blog/${Number(blogId) - 1}`)
          }}>prev</Button>&nbsp;
      <Button
          color='primary'
          disabled={blogId == blogList.length || blogId < 0}
          variant="contained"
          onClick={() => {
            setBlogId(Number(blogId) + 1)
            props.history.push(`/blog/${Number(blogId) + 1}`)
          }}>Next</Button>
      </HeaderContainer>
      <BlogTitle>{data.id}.{data.title}</BlogTitle>
      <p> {data.description}</p>
    </div>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.3rem;
`
const BlogTitle = styled.h1`
  margin: 0 auto;
  font-size: 26px;
  color: ${props => props.theme.color};
`