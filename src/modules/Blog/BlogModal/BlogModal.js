import React, { useState } from "react";
import { useDispatch } from "react-redux";
import StyledModal from "../../../components/UI/MUI/StyledModal";
import { Button } from "@material-ui/core";
import { createBlog } from "../BlogAction";

const data = {
  id: 6,
  title: "Title1",
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
     unknown printer took a galley of type and scrambled it to make a type specimen book. 
     It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of 
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
       software like Aldus PageMaker including versions of Lorem Ipsum.`
};

export default function BlogModal(props) {
  const { open, toggle } = props;
  const dispatch = useDispatch();
  return (
    <>
      <StyledModal open={open} handleClose={() => toggle(false)}>
        <Button onClick={() => dispatch(createBlog(data))}>ADD BLOG</Button>
      </StyledModal>
    </>
  );
}
