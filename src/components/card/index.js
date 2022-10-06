import React from 'react'
import "./index.scss"
import Profile from '../../containers/profile'
import {ReactComponent as CardButton} from "../../images/cardButton.svg"
import CardMenu from '../card-menu'
import Comment from '../comment'

function Card(props) {
    const {
        storyBorder,
        image,
        comments,
        likedByText,
        likedByNumber,
        hours,
    } = props
    
  return (
    <div className='card'>
        <header>
            <Profile iconSize="medium" storyBorder={storyBorder} />
            <CardButton className='cardButton' />
        </header>
        <img className='cardImage' src={image} alt="card Content" />
        <CardMenu />
        <div className='likedBy'>
            <Profile iconSize="small" hideAccountName={true} />
            <span>
                Liked by <strong>{likedByText}</strong> and{""}
                <strong>{likedByNumber} others</strong>
            </span>
        </div>
        
        <div className='comments'>
            {comments.map(comment => {
                return (
                    <Comment key = {comment.id}
                    accountName={comment.user}
                    comment={comment.text} />
                )
            })}
        </div>
        <div className='timePosted'>{hours} HOURS AGO</div>
        <div className='addComment'>
            <input className='commentText' placeholder='Add a comment'/> 
            <div className='postText'>Post</div>
        </div>
    </div>
  )
}

export default Card