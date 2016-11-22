export const APPLY_CONFIGURATION = 'APPLY_CONFIGURATION'

export const applyConfiguration = (configuration) => {
  return {
    type: APPLY_CONFIGURATION,
    configuration
  }
}
