export const AD_PRESETS = {
  7: {
    name: 'Luxury Brand Film',
    roles: ['Opening', 'Product', 'Closing'],
    durations: [8,8,8],
    basePromptFn: i => 'Scene ' + (i+1),
    baseVOFn: i => 'VO ' + (i+1)
  }
}

export function initProjectWithLock({ presetId, strategy, presetConfig }) {
  const scenes = presetConfig.roles.map((role, i) => ({
    id: String(i),
    role,
    duration: presetConfig.durations[i],
    prompt: presetConfig.basePromptFn(i),
    voiceOver: presetConfig.baseVOFn(i)
  }))

  return {
    meta: { presetId, strategy },
    scenes,
    history: {},
    future: {}
  }
}

export function attachVersion(state) {
  return {
    ...state,
    meta: { ...state.meta, version: '3.2.0' }
  }
}