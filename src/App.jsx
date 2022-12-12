import React from 'react'
import GlobalStyle from './GlobalStyle'
import styled from 'styled-components'
import Body from './components/Body'
import Header from './components/Header'

export const MainWrap = styled.div`
  width: 1200px;
  height: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <MainWrap>
        <Header />
        <Body />
      </MainWrap>
    </div>
  )
}

export default App
