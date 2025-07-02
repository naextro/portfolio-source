import React from 'react'
import ReviewCard from './ReviewCard';

const reviews = [  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Won 3 prizes because of this.',
    name: 'Bayzid Bokhary  (কিরান)',
    imgSrc: 'images/bayzid.jpg',
    company: 'Entrepreneur'
  },
  {
    content: 'Your work is good and saved my time',
    name: 'KM Rubaid Ferdous Swapnil',
    imgSrc: 'images/SwapnilBro.jpg',
    company: 'RS22 Studios'
  }
];

const Review = () => {
  return (
    <section className="section overflow-hidden" id='reviews'>
      <div className="container">
        <h2 className="headline-2 mb-8">
          What my clients say
        </h2>

        <div className="overflow-x-auto flex gap-3 w-full flex-nowrap -mx-4 p-4">
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