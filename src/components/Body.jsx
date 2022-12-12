import React from 'react'
import { Pages, Contents, Sites } from './bodyComponents'
import { BodyWrap } from './style'

const index = () => {
  return (
    <BodyWrap>
      <p>#Pages</p>
      <Pages />
      <p>#Contents</p>
      <Contents />
      <p>#Sites</p>
      <Sites />
    </BodyWrap>
  )
}

export default index
