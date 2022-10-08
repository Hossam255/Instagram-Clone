import React, { useEffect } from 'react'
import "./index.scss"
import Stories from '../stories'
import Card from '../../components/card'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_CARDES_SAGA } from '../../redux/action/action'

function Cards() {

  const dispatch = useDispatch()
  const cards = useSelector(state=> state.cardsReducer.cards)

  useEffect(()=> {
    dispatch({type:UPDATE_CARDES_SAGA})
   
  },[])
  
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