import React, { useEffect } from 'react'
import "./index.scss"
import Stories from '../stories'
import Card from '../card'
import cards from '../../data/cards.js'


function Cards() {

  return (
    <div className='cards'>
      <Stories />
      {
        cards.map((card,i) => <Card key={i} accountName={card.accountName}
         storyBorder={card.storyBorder} image={card.image} 
         comments={card.comments} likedByText={card.likedByText} likedByNumber={card.likedByNumber} hours={card.hours} />)
      }


    </div>
  )
}

export default Cards