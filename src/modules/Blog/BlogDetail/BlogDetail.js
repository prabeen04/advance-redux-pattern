import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Breadcrumbs, Link, Typography, Grid } from "@material-ui/core";
import styled from "styled-components";
import { selectBlogById, selectAllBlogs } from "../BlogSelector";
import { getBlogById, getBlogs } from "../BlogAction";
import {
  KeyboardReturnIcon,
  ArrowBackIosIcon,
  ArrowForwardIosIcon,
  EditIcon
} from "../../../components/Icons/Icons";
import Card from "../../../components/UI/Layout/Card";
import BlogMenu from "./BlogMenu";
import Loader from "../../../components/UI/Layout/Loader";
import BlogModal from "../BlogModal/BlogModal";
export default function BlogDetail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [blogId, setBlogId] = useState(null);
  const { data, isLoading } = useSelector(selectBlogById);
  const [modalOpen, setModalOpen] = useState(false);
  const blogList = useSelector(selectAllBlogs).data;

  useEffect(() => {
    setBlogId(id);
    dispatch(getBlogs());
  }, [id]);

  useEffect(() => {
    dispatch(getBlogById(blogId));
  }, [blogId, id]);

  function handleUpdate(blog) {
    alert(JSON.stringify(blog));
  }
  if (!data) return <Loader loaderType="ellipsis" />;
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
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <BlogMenu />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {isLoading ? (
            <Loader loaderType="ellipsis" />
          ) : (
            <Card>
              <TitleHeader>
                <BlogTitle>{data.title}</BlogTitle>
                <EditIcon onClick={() => setModalOpen(true)} />
              </TitleHeader>
              <BlogDescription> {data.description}</BlogDescription>
            </Card>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}></Grid>
      </Grid>
      <BlogModal
        open={modalOpen}
        toggle={setModalOpen}
        blog={data}
        isEditing
        onUpdate={handleUpdate}
      />
    </div>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
  margin: 0.4rem;
  background-color: ${props => props.theme.backgroundColor};
  box-shadow: 0 1px 4px 1px ${props => props.theme.boxShadowColor};
`;
const TitleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;
const BlogTitle = styled.h1`
  font-size: 20px;
  font-weight: 400;
  color: ${props => props.theme.titleColor};
`;
const BlogDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
  color: ${props => props.theme.subtitleColor};
`;
