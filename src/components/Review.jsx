import React from 'react'
import ReviewCard from './ReviewCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const reviews = [
  {
    content:
      'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Won 3 prizes because of this.',
    name: 'Bayzid Bokhary  (কিরান)',
    imgSrc: 'images/bayzid.jpg',
    company: 'Entrepreneur',
  },
  {
    content: 'Your work is good and saved my time',
    name: 'KM Rubaid Ferdous Swapnil',
    imgSrc: 'images/SwapnilBro.jpg',
    company: 'RS22 Studios',
  },
]

const Review = () => {
  useGSAP(() => {
    const slide = document.querySelector('.scrub-slide')
    const cards = slide.children.length
    const scrollDistance = -cards * 50
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true,
      },
      x: scrollDistance,
    })
  })

  return (
    <section className="section overflow-hidden" id="reviews">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">What my clients say</h2>
        <div className="ml-[40px] scrub-slide flex gap-6 items-stretch w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
              classes="min-w-[320px] md:min-w-[400px]" // Ensure cards have a set minimum width
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Review
