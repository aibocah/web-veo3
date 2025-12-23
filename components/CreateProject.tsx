'use client'

import { useState } from 'react'
import { AD_PRESETS, initProjectWithLock, attachVersion } from '../lib/sceneCore'

export default function CreateProject({ onCreate }) {
  const presetKeys = Object.keys(AD_PRESETS)
  const [presetId, setPresetId] = useState(presetKeys[0])
  const [strategy, setStrategy] = useState('B3')

  const handleCreate = () => {
    const preset = AD_PRESETS[presetId]
    if (!preset) return

    const project = attachVersion(
      initProjectWithLock({
        presetId,
        strategy,
        presetConfig: preset,
      })
    )

    onCreate(project)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Create Project</h1>

      <select value={presetId} onChange={e => setPresetId(e.target.value)}>
        {presetKeys.map(id => (
          <option key={id} value={id}>
            {AD_PRESETS[id].name}
          </option>
        ))}
      </select>

      <div>
        <button onClick={() => setStrategy('A3')}>A3</button>
        <button onClick={() => setStrategy('B3')}>B3</button>
      </div>

      <button onClick={handleCreate}>Create</button>
    </div>
  )
}