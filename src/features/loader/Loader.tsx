import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '~/app/store'
import { FullScreenLoaderContainer, ButtonLoader } from './Loader.styled'
import { createPortal } from 'react-dom'

const Loader = ({ type }: { type: 'spinner' | 'fullscreen' }) => {
  const loading = useSelector((state: RootState) => state.loader.loading)

  if (!loading) {
    return null
  }

  if (type === 'spinner') {
    return <ButtonLoader />
  }

  if (type === 'fullscreen') {
    return createPortal(
      <FullScreenLoaderContainer>
        <ButtonLoader />
      </FullScreenLoaderContainer>,
      document.body,
    )
  }

  return null
}

export default Loader
