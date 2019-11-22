import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StyledModal from "../../../components/UI/MUI/StyledModal";
import { createBlog, getBlogs } from "../BlogAction";
import InputComponent from "../../../components/Forms/InputComponent";
import { selectUpdateBlogState } from "../BlogSelector";

export default function BlogModal(props) {
  const { open, toggle, blog, isEditing, onUpdate } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { isLoading } = useSelector(selectUpdateBlogState);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!blog) return;
    setTitle(blog.title);
    setDescription(blog.description);
  }, [blog]);

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
      <StyledModal
        open={open}
        handleClose={() => toggle(false)}
        onSubmit={
          isEditing ? () => onUpdate(blog.id, { title, description }) : addBlog
        }
        isLoading={isLoading}
        disabled={!title || !description}
      >
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
      </StyledModal>
    </>
  );
}
