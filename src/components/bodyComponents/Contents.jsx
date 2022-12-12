import React from 'react'
import ContentCard from './ContentCard'
import { Contents } from './style'

const index = () => {
  return (
    <Contents>
      <div>
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </div>
    </Contents>
  )
}

export default index
