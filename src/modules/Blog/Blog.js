import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectAllBlogs } from './BlogSelector';
import { getBlogs } from './BlogAction';
import { elipsize } from '../../utils/commonFns';
import Loader from '../../components/UI/Layout/Loader';
import FloatingButton from '../../components/UI/MUI/FloatingButton';
import BlogModal from './BlogModal/BlogModal';

export default function Blog(props) {
  const { data, isLoading } = useSelector(selectAllBlogs);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  if (isLoading) return <Loader loaderType="ellipsis" />;
  return (
    <>
      <BlogWrapper>
        {data &&
          data.map((blog, i) => (
            <BlogItem key={i} onClick={() => history.push(`/blog/${blog.id}`)}>
              <BlogTitle>{elipsize(blog.title, 15)}</BlogTitle>
              <Description>{elipsize(blog.description, 50)}</Description>
            </BlogItem>
          ))}
      </BlogWrapper>
      <FloatingButton onClick={() => setModalOpen(true)} />
      <BlogModal open={modalOpen} toggle={setModalOpen} />
    </>
  );
}

const BlogWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* mobile device */
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const BlogItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: ${props => props.theme.backgroundColor};
  padding: 0.5rem;
  margin: 0.3rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0 1px 4px 1px ${props => props.theme.boxShadowColor};
  }
  @media (max-width: 600px) {
    margin: 0 auto;
    margin-bottom: 10px;
    width: 90%;
    :first-child {
      margin-top: 10px;
    }
  }
`;

const BlogTitle = styled.h1`
  display: flex;
  color: ${props => props.theme.titleColor};
  font-size: 1rem;
  letter-spacing: 2px;
  padding: 0.2rem 0.2rem;
  margin-bottom: 0.3rem;
`;

const Description = styled.p`
  color: ${props => props.theme.subtitleColor};
  font-size: 0.9rem;
`;
