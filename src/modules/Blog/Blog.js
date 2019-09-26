import React from 'react'
import styled from 'styled-components';

const blogs = [
  { title: 'title1', desc: 'description1' },
  { title: 'title2', desc: 'description2' },
  { title: 'title3', desc: 'description3' },
  { title: 'title4', desc: 'description4' },
  { title: 'title5', desc: 'description5' },
]

export default function Blog(props) {
  return (
    <BlogWrapper>
      {
        blogs.map((blog, i) => (
          <BlogItem>
            <p>{blog.title}</p>
            <p>{blog.desc}</p>
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
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.3rem;
  margin: 0.3rem;
`;
