'use client'
import { useState } from 'react'
import CreateProject from '../components/CreateProject'

export default function Page() {
  const [project, setProject] = useState(null)

  if (!project) {
    return <CreateProject onCreate={setProject} />
  }

  return (
    <pre style={{ padding: 16 }}>
      {JSON.stringify(project, null, 2)}
    </pre>
  )
}