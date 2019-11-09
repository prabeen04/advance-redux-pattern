import React, { useState } from "react";
import StyledModal from "../../../components/UI/MUI/StyledModal";

export default function BlogModal(props) {
  const { open, toggle } = props;
  return (
    <>
      <StyledModal open={open} handleClose={() => toggle(false)}>
        <h1>Modal content</h1>
      </StyledModal>
    </>
  );
}
