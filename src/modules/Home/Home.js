import React from 'react';
import styled from 'styled-components';
import { CurveyBackgroundHeader } from '../../components/UI/Layout';
import { JumpStartBox } from '../../components/UI/Elements';

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <CurveyBackgroundHeader />
      <JSWrapper>
        <JumpStartBox value={300} title="Goals scored" />
        <JumpStartBox value={28} title="Total wins" />
        <JumpStartBox value={5} title="Total lost" />
      </JSWrapper>
    </div>
  );
}

const JSWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  /* mobile device */
  @media (max-width: 600px) {
    flex-direction: column;
    top: 100px;
    & > * {
      width: 100%;
      margin: 0.5rem;
    }
  }
`;
