import React, { useState } from "react";
import { useDispatch } from "react-redux";
import StyledModal from "../../../components/UI/MUI/StyledModal";
import { Button } from "@material-ui/core";
import { createBlog, getBlogs } from "../BlogAction";
import InputComponent from "../../../components/Forms/InputComponent";

const data = {
  id: 6,
  title: "Title6",
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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  async function addBlog() {
    await dispatch(
      createBlog({
        title,
        description
      })
    );
    toggle();
    dispatch(getBlogs());
  }
  return (
    <>
      <StyledModal open={open} handleClose={() => toggle(false)}>
        <div>
          <InputComponent
            label="Title"
            value={title}
            multiline
            onChange={e => setTitle(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <InputComponent
            label="Description"
            value={description}
            multiline
            rows={4}
            onChange={e => setDescription(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
        <br />
        <Button style={{ float: "right" }} onClick={addBlog}>
          ADD BLOG
        </Button>
      </StyledModal>
    </>
  );
}
