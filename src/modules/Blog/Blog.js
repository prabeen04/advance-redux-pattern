import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectAllBlogs } from './BlogSelector';
import { getBlogs } from './BlogAction';

export default function Blog(props) {
  const { data, isLoading } = useSelector(selectAllBlogs)
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    dispatch(getBlogs())
  }, [])
  if (isLoading) return <p>Loading...</p>
  return (
    <BlogWrapper >
      {
        data && data.map((blog, i) => (
          <BlogItem onClick={() => history.push(`/blog/${blog.id}`)}>
            <BlogTitle>{blog.title}</BlogTitle>
            <Description>{blog.description}</Description>
          </BlogItem>
        ))
      }
    </BlogWrapper>
  )
}

const BlogWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BlogItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 0.3rem;
  margin: 0.3rem;
  cursor: pointer;
`;

const BlogTitle = styled.h1`
  display: flex;
  justify-content:center;
  color: #666;
  font-size: 1.2rem;
  letter-spacing: 2px;
  padding: 0.2rem 0.4rem;
  margin-bottom: 0.3rem;
  background-color: #f4f4f4;
`;

const Description = styled.p`
  color: #888;
  font-size: 0.9rem;
`;