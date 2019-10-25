import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../../../components/UI/Layout/Card";
import { getBlogs } from "../BlogAction";
import { selectAllBlogs } from "../BlogSelector";

export default function BlogMenu() {
  const { data, isLoading } = useSelector(selectAllBlogs);
  const dispatch = useDispatch();
  const params = useParams();
  debugger;
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  return (
    <Card>
      <LinkContainer>
        {data &&
          data.map(d => (
            <LinkItem to={`/blog/${d.id}`} id={d.id} pId={params.id}>
              {d.title}
            </LinkItem>
          ))}
      </LinkContainer>
    </Card>
  );
}
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const LinkItem = styled(Link)`
  padding: 0.5rem 0.3rem;
  text-decoration: none;
  background-color: ${props => (props.id == props.pId ? "#ddd" : "#f4f4f4")};
  border-radius: 0.2rem;
  margin: 0.1rem;
  font-size: 1rem;
  color: #666;
  letter-spacing: 1;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    color: #444;
  }
`;
