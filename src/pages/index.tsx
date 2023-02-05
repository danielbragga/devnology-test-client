import type { NextPage } from 'next'

import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../store/counter'
import { RootState } from '../store'

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const Home: NextPage = () => {
  const value = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Home
