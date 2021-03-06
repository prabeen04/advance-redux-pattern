import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getBlogs } from "../BlogAction";
import { selectAllBlogs } from "../BlogSelector";
import { LabelImportantIcon } from "../../../components/Icons/Icons";

export default function BlogMenu() {
  const { data, isLoading } = useSelector(selectAllBlogs);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  return (
    <LinkContainer>
      {data &&
        data.map(d => (
          <LinkItem to={`/blog/${d.id}`} id={d.id} pId={params.id}>
            <LabelImportantIcon />
            &nbsp;&nbsp;
            {d.title}
          </LinkItem>
        ))}
    </LinkContainer>
  );
}

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.3rem 0.5rem;
  @media (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: space-evenly; */
  }
`;

const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.7rem 0.3rem;
  text-decoration: none;
  background-color: ${props =>
    props.id == props.pId
      ? props.theme.primaryColor
      : props.theme.backgroundColor};
  margin: 0.08rem 0px;
  font-size: 1rem;
  color: ${props =>
    props.id == props.pId ? props.theme.titleColor : props.theme.subtitleColor};
  letter-spacing: 1;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #444;
  }
  @media (max-width: 600px) {
    padding: 0.3rem;
    font-size: 0.7rem;
    margin: 0.1rem;
    flex-basis: 10%;
  }
`;
