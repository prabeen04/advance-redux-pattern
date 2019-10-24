import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Breadcrumbs, Link, Typography } from "@material-ui/core";
import styled from "styled-components";
import { selectBlogById, selectAllBlogs } from "../BlogSelector";
import { getBlogById, getBlogs } from "../BlogAction";
import {
  KeyboardReturnIcon,
  ArrowBackIosIcon,
  ArrowForwardIosIcon
} from "../../../components/Icons/Icons";
import Card from "../../../components/UI/Layout/Card";
export default function BlogDetail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [blogId, setBlogId] = useState(null);
  const { data, isLoading } = useSelector(selectBlogById);
  const blogList = useSelector(selectAllBlogs).data;

  useEffect(() => {
    setBlogId(id);
    dispatch(getBlogs());
  }, [id]);

  useEffect(() => {
    dispatch(getBlogById(blogId));
  }, [blogId, id]);

  if (!data) return null;
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <HeaderContainer>
        <div style={{ display: "flex" }}>
          <KeyboardReturnIcon onClick={() => props.history.push(`/blog`)} />{" "}
          &nbsp;&nbsp;&nbsp;
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" onClick={() => props.history.push("/blog")}>
              Blog
            </Link>
            <Typography color="textPrimary">{blogId}</Typography>
          </Breadcrumbs>
        </div>
        <div>
          <ArrowBackIosIcon
            disabled={blogId > blogList.length || blogId == 1}
            onClick={() => {
              setBlogId(Number(blogId) - 1);
              props.history.push(`/blog/${Number(blogId) - 1}`);
            }}
          />
          &nbsp;
          <ArrowForwardIosIcon
            disabled={blogId == blogList.length || blogId < 0}
            onClick={() => {
              setBlogId(Number(blogId) + 1);
              props.history.push(`/blog/${Number(blogId) + 1}`);
            }}
          />
        </div>
      </HeaderContainer>
      <Card>
        <BlogTitle>
          {data.id}.{data.title}
        </BlogTitle>
        <BlogDescription> {data.description}</BlogDescription>
      </Card>
    </div>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
  margin: 0.4rem;
  border-radius: 0.2rem;
  background-color: ${props => props.theme.backgroundColor};
  box-shadow: 0 1px 4px 1px ${props => props.theme.boxShadowColor};
`;
const BlogTitle = styled.h1`
  margin: 0 auto;
  font-size: 20px;
  color: ${props => props.theme.titleColor};
`;
const BlogDescription = styled.p`
  font-size: 16px;
  color: ${props => props.theme.subtitleColor};
`;
