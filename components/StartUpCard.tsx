import React from 'react'
import { StartUpCardProps } from '../utils/types';
// import Image from 'next/image'

const StartUpCard = ({post}: {post: StartUpCardProps}) => {
  return (
    <div className='startup-card'>
      <p>{post.date}</p>
      <p>{post.title}</p>
      <p>{post.description}</p>
    </div>
  )
}

export default StartUpCard