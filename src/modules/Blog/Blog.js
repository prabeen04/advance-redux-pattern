import React from 'react'
import styled from 'styled-components';
import useFonoApi from '../../Hooks/useFonoApi';

const blogs = [
  { title: 'Title1', desc: 'Description 1 lorem pixel losus erprie sekjrn' },
  { title: 'Title2', desc: 'Description 2' },
  { title: 'Title3', desc: 'Description 3' },
  { title: 'Title4', desc: 'Description 4' },
  { title: 'Title5', desc: 'Description 5' },
]

export default function Blog(props) {
  const blogs2 = useFonoApi()
  debugger
  return (
    <BlogWrapper>
      {
        blogs.map((blog, i) => (
          <BlogItem>
            <BlogTitle>{blog.title}</BlogTitle>
            <Description>{blog.desc}</Description>
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