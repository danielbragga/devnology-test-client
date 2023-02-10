import type { NextPage } from 'next'
import { useDispatch } from 'react-redux'

import Button from '~/common/components/Button/Button'
import { setLoading } from '~/app/loader'
import Loader from '~/features/loader/Loader'
import { showToast } from '~/features/toast/toastSlice'
import { ToastWrapper as Toast } from '~/features/toast/Toast'

const Home: NextPage = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setLoading(true))
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 5000)
  }

  const handleClick2 = () => {
    dispatch(showToast({ message: 'Toast message', type: 'error' }))
  }

  return (
    <div>
      <Button onClick={handleClick}>Load</Button>
      <Loader type='spinner'></Loader>
      <Loader type='fullscreen'></Loader>
      <Button onClick={handleClick2}>Show Toast</Button>
      <Toast></Toast>
    </div>
  )
}

export default Home
