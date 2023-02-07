import type { NextPage } from 'next'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import Button from '~/components/Button/Button'
import { setLoading } from '~/store/loader'
import Loader from '~/components/Loader/Loader'
import { hideToast, showToast } from '~/store/toast'

const Home: NextPage = () => {
  const toast = useSelector((state: RootState) => state.toast)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setLoading(true))
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 5000)
  }

  const handleClick2 = () => {
    const id = 'some-id'
    const message = 'Some message'
    const type = 'success'
    dispatch(showToast({ id, message, type }))
    setTimeout(() => {
      dispatch(hideToast(id))
    }, 5000)
  }

  return (
    <div>
      <Button onClick={handleClick}>Load</Button>
      <Button onClick={handleClick2}>Show Toast</Button>
      <Loader></Loader>
      {toast.toasts.map((toast) => (
        <div key={toast.id}>
          {toast.message} - {toast.type}
        </div>
      ))}
    </div>
  )
}

export default Home
