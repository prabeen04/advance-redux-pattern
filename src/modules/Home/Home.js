import React from 'react'
import { CurveyBackgroundHeader } from '../../components/UI/Layout'
import { JumpStartBox } from '../../components/UI/Elements'

export default function Home() {
  return (
    <div>
      <CurveyBackgroundHeader>
        <div style={{
          height: '100%', zIndex: 999, display: 'flex',
          justifyContent: 'center', alignItems: 'center'
        }}>

          <JumpStartBox
            value={300}
            title='Goals scored'
          />
          <JumpStartBox
            value={28}
            title='Total wins'
          />
          <JumpStartBox
            value={5}
            title='Total lost'
          />

        </div>
      </CurveyBackgroundHeader>
    </div>
  )
}
