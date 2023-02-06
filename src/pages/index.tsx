import type { NextPage } from 'next'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../store/counter'
import { RootState } from '../store'
import Button from '~/components/Button/Button'

const Home: NextPage = () => {
  const value = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{value}</h1>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Button onClick={() => dispatch(decrement())}>-</Button>
    </div>
  )
}

export default Home
