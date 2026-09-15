import React from 'react'
import ReviewCard from './ReviewCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useCMS } from '../cms/CMSContext'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Review = () => {
    const { content } = useCMS();

  useGSAP(() => {
    const slide = document.querySelector('.scrub-slide')
    const cards = slide.children.length
    const isMobile = window.innerWidth < 768
    const scrollDistance = isMobile ? -cards * 10 : -cards * 50
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
        <div className="scrub-slide flex gap-6 items-stretch w-fit">
          {content.reviews.map(({ content: c, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={c}
              classes="md:min-w-[400px] aspect-square"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Review