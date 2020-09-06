import loadScript from 'load-script'

/**
 * load naver map script and insert to Vue instance
 * @param {Vue} vueInstance
 */
export function generateNaverInstance (vueInstance) {
  const options = vueInstance.options
  if (!options.key) {
    return
  }
  if (typeof options.key !== 'string') {
    console.warn('Naver key is not string.')
    return
  }
  let mapScriptUrl = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId='
  mapScriptUrl += options.key
  if (options.libraries) {
    mapScriptUrl += '&submodules=' + options.libraries.join(',')
  }
  vueInstance.key = options.key
  vueInstance.libraries = options.libraries
  if (options.timeout) {
    vueInstance.timeout = options.timeout
  }
  loadScript(mapScriptUrl, (error) => {
    if (error) {
      throw new Error(error)
    }
    imortMarkerclustering(vueInstance)
    vueInstance.naver = window.naver
  }
  )
}

export async function imortMarkerclustering (vueInstance) {
  const clusterScript = await import('../lib/markerClustering.js')
  vueInstance.clustering = clusterScript.default
}
