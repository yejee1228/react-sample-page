import React from 'react'
import ContentCard from './ContentCard'
import { Contents } from './style'

const index = () => {
  return (
    <Contents>
      <div>
        <ContentCard />
        <ContentCard />
      </div>
      <div>
        <ContentCard />
      </div>
    </Contents>
  )
}

export default index
