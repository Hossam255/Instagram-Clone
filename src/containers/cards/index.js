import React, { useEffect } from 'react'
import "./index.scss"
import Stories from '../stories'
import Card from '../../components/card'
import { useSelector, useDispatch } from 'react-redux'
import {updateCards} from '../../redux/action/action'
import { fetchCards } from "../../api/cardServies"


function Cards() {

  const dispatch = useDispatch()

  useEffect(()=> {
    const callCards = async ()=> {
      const cards = await fetchCards()
      dispatch(updateCards(cards))
    }
    callCards()
  },[])
  const cards = useSelector(state=> state.cardsReducer.cards)
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