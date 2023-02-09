import type { NextPage } from 'next'
import { useDispatch } from 'react-redux'

import Button from '~/components/Button/Button'
import { setLoading } from '~/store/loader'
import Loader from '~/components/Loader/Loader'
import { hideToast, showToast } from '~/store/toast'
import { ToastWrapper as Toast } from '~/components/Toast/Toast'

const Home: NextPage = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setLoading(true))
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 5000)
  }

  const handleClick2 = () => {
    const id = Date.now().toString()
    dispatch(showToast({ id: id, message: 'Toast message', type: 'error' }))
    setTimeout(() => {
      dispatch(hideToast(id))
    }, 2500)
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
