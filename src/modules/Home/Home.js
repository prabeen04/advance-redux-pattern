import React from "react";
import styled from "styled-components";
import { CurveyBackgroundHeader } from "../../components/UI/Layout";
import { JumpStartBox } from "../../components/UI/Elements";

export default function Home() {
  return (
    <CurveyBackgroundHeader>
      <JSWrapper>
        <JumpStartBox value={300} title="Goals scored" />
        <JumpStartBox value={28} title="Total wins" />
        <JumpStartBox value={5} title="Total lost" />
      </JSWrapper>
    </CurveyBackgroundHeader>
  );
}

const JSWrapper = styled.div`
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
