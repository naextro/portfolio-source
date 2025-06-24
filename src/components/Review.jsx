import React from 'react'
import ReviewCard from './ReviewCard';

const reviews = [
  {
    content: 'Exceptional web development! Delivered a seamless, responsive site with clean code. "In another univers we will be teammate Again"',
    name: 'Bayzid Bokhary',
    imgSrc: 'images/bayzid-2.jpg',
    company: ''
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Won 3 prizes because of this.',
    name: 'Bayzid Bokhary  (কিরান)',
    imgSrc: 'images/bayzid.jpg',
    company: ''
  }
];

const Review = () => {
  return (
    <section className="section overflow-hidden" id='reviews'>
      <div className="container">
        <h2 className="headline-2 mb-8">
          What my clients say
        </h2>

        <div className='flex items-stretch gap-3 w-fit'>
          {
            reviews.map(({content, name,imgSrc,company}, key)=>(
              <ReviewCard 
              
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Review