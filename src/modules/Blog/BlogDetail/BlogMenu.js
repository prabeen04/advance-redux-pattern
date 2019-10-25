import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../../../components/UI/Layout/Card";
import { getBlogs } from "../BlogAction";
import { selectAllBlogs } from "../BlogSelector";

export default function BlogMenu() {
  const { data, isLoading } = useSelector(selectAllBlogs);
  const dispatch = useDispatch();
  debugger;
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  return (
    <Card>
      <LinkContainer>
        {data &&
          data.map(d => <LinkItem to={`/blog/${d.id}`}>{d.title}</LinkItem>)}
      </LinkContainer>
    </Card>
  );
}
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const LinkItem = styled(Link)`
  padding: 0.3rem 0.7rem;
  text-decoration: none;
  background-color: #f4f4f4;
  border-radius: 0.3rem;
  margin: 0.1rem;
`;
