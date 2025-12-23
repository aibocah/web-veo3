'use client'
import { useState } from 'react'
import CreateProject from '../components/CreateProject'

export default function Page() {
  const [project, setProject] = useState(null)

  if (!project) {
    return <CreateProject onCreate={setProject} />
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>Project Created</h2>

      <pre
        style={{
          marginTop: 12,
          padding: 12,
          background: '#111',
          color: '#0f0',
          fontSize: 12,
          overflowX: 'auto',
          borderRadius: 8,
        }}
      >
        {JSON.stringify(project, null, 2)}
      </pre>
    </div>
  )
}
