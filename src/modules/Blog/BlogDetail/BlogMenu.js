import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  return <Card>{data && data.map(d => <p>{d.title}</p>)}</Card>;
}
