import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '~/store'

const Loader = () => {
  const loading = useSelector((state: RootState) => state.loader.loading)

  return loading ? <div>Loading...</div> : null
}

export default Loader
